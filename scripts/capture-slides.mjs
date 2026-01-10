import { spawn } from 'node:child_process';
import { access, mkdir, readdir, stat } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { chromium } from 'playwright';
import pptxgen from 'pptxgenjs';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();
const PORT = 4173;
const BASE_URL = `http://127.0.0.1:${PORT}/`;
const PPTX_PATH = path.join(ROOT, 'slides.pptx');
const REAL_HOME = process.env.HOME || os.homedir();

const VIEWPORT = { width: 1920, height: 1080 };

process.env.HOME = ROOT;
process.env.XDG_CONFIG_HOME = path.join(ROOT, '.config');
process.env.XDG_CACHE_HOME = path.join(ROOT, '.cache');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function pathExists(targetPath) {
  try {
    await access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function resolveChromiumExecutable() {
  const defaultPath = chromium.executablePath();
  if (await pathExists(defaultPath)) return defaultPath;

  const cacheRoot = path.join(REAL_HOME, 'Library/Caches/ms-playwright');
  let entries = [];
  try {
    entries = await readdir(cacheRoot, { withFileTypes: true });
  } catch {
    return null;
  }

  const arch = process.arch === 'arm64' ? 'arm64' : 'x64';
  const platform = process.platform === 'darwin' ? 'mac' : process.platform;
  const chromiumDirs = entries
    .filter((entry) => entry.isDirectory() && entry.name.startsWith('chromium-'))
    .map((entry) => entry.name);

  for (const dir of chromiumDirs) {
    let candidate;
    if (platform === 'mac') {
      candidate = path.join(cacheRoot, dir, 'chrome-mac/Chromium.app/Contents/MacOS/Chromium');
    } else if (platform === 'linux') {
      candidate = path.join(cacheRoot, dir, 'chrome-linux/chrome');
    } else {
      candidate = path.join(cacheRoot, dir, 'chrome-win/chrome.exe');
    }
    if (await pathExists(candidate)) return candidate;
  }

  const headlessDirs = entries
    .filter((entry) => entry.isDirectory() && entry.name.startsWith('chromium_headless_shell-'))
    .map((entry) => entry.name);

  for (const dir of headlessDirs) {
    const candidate = path.join(
      cacheRoot,
      dir,
      `chrome-headless-shell-${platform}-${arch}`,
      'chrome-headless-shell',
    );
    if (await pathExists(candidate)) return candidate;
  }

  return null;
}

function runBuild() {
  return new Promise((resolve, reject) => {
    const proc = spawn('npx', ['vite', 'build', '--base', './'], { stdio: 'inherit' });
    proc.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error('Vite build failed.'));
    });
  });
}

async function isServerUp() {
  try {
    const res = await fetch(BASE_URL);
    return res.ok;
  } catch {
    return false;
  }
}

async function waitForServer(timeoutMs = 60000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (await isServerUp()) return true;
    await sleep(500);
  }
  return false;
}

function startDevServer() {
  return spawn('npm', ['run', 'dev', '--', '--host', '127.0.0.1', '--port', String(PORT)], {
    stdio: 'inherit',
    env: { ...process.env, BROWSER: 'none' },
  });
}

async function getOutputDir() {
  const base = path.join(ROOT, 'screenshots');
  try {
    await stat(base);
    const stamp = new Date().toISOString().replace(/[:.]/g, '-');
    const next = `${base}-${stamp}`;
    await mkdir(next, { recursive: true });
    return next;
  } catch {
    await mkdir(base, { recursive: true });
    return base;
  }
}

async function main() {
  let targetUrl;
  let serverProcess;
  if (await isServerUp()) {
    targetUrl = BASE_URL;
  } else {
    serverProcess = startDevServer();
    const ready = await waitForServer();
    if (ready) {
      targetUrl = BASE_URL;
    } else {
      serverProcess?.kill('SIGTERM');
      await runBuild();
      targetUrl = pathToFileURL(path.join(ROOT, 'dist', 'index.html')).toString();
    }
  }

  const outputDir = await getOutputDir();
  const executablePath = await resolveChromiumExecutable();
  const userDataDir = path.join(ROOT, '.chromium-profile');
  const context = await chromium.launchPersistentContext(
    userDataDir,
    executablePath
      ? {
          executablePath,
          headless: true,
          args: ['--disable-crash-reporter', '--disable-features=Crashpad'],
          viewport: { ...VIEWPORT, deviceScaleFactor: 1 },
        }
      : {
          headless: true,
          args: ['--disable-crash-reporter', '--disable-features=Crashpad'],
          viewport: { ...VIEWPORT, deviceScaleFactor: 1 },
        },
  );
  const page = await context.newPage();

  try {
    await page.goto(targetUrl, { waitUntil: 'networkidle' });
    await page.addStyleTag({
      content: `
        * { animation-duration: 0s !important; transition-duration: 0s !important; }
        html, body, #root { margin: 0; padding: 0; width: ${VIEWPORT.width}px; }
        .slide-section { width: ${VIEWPORT.width}px !important; height: ${VIEWPORT.height}px !important; }
      `,
    });
    await sleep(300);

    const sections = await page.$$('.slide-section');
    if (!sections.length) {
      throw new Error('No .slide-section elements found.');
    }

    const imagePaths = [];
    for (let i = 0; i < sections.length; i += 1) {
      const section = sections[i];
      await section.scrollIntoViewIfNeeded();
      await sleep(100);
      const filename = `slide-${String(i + 1).padStart(3, '0')}.png`;
      const filePath = path.join(outputDir, filename);
      await section.screenshot({ path: filePath, type: 'png' });
      imagePaths.push(filePath);
      process.stdout.write(`Captured ${i + 1}/${sections.length}\n`);
    }

    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_WIDE';
    for (const imgPath of imagePaths) {
      const slide = pptx.addSlide();
      slide.addImage({ path: imgPath, x: 0, y: 0, w: 13.333, h: 7.5 });
    }
    await pptx.writeFile({ fileName: PPTX_PATH });
    process.stdout.write(`PPT saved to ${PPTX_PATH}\n`);
  } finally {
    await context.close();
    serverProcess?.kill('SIGTERM');
  }
}

main().catch((err) => {
  process.stderr.write(`${err.message}\n`);
  process.exit(1);
});
