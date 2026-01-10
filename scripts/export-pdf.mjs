import { spawn } from 'node:child_process';
import { access, readdir } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();
const PORT = 4173;
const BASE_URL = `http://127.0.0.1:${PORT}/`;
const PDF_PATH = path.join(ROOT, 'slides.pdf');
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
    await page.emulateMedia({ media: 'screen' });
    await page.addStyleTag({
      content: `
        * { animation-duration: 0s !important; transition-duration: 0s !important; }
        html, body { margin: 0; padding: 0; }
        #root { width: ${VIEWPORT.width}px; }
        #root > div {
          height: auto !important;
          min-height: 0 !important;
          overflow: visible !important;
          scroll-snap-type: none !important;
        }
        .slide-section {
          width: ${VIEWPORT.width}px !important;
          height: ${VIEWPORT.height}px !important;
          min-height: ${VIEWPORT.height}px !important;
          break-after: page;
          page-break-after: always;
          break-inside: avoid;
          page-break-inside: avoid;
        }
        @page { size: ${VIEWPORT.width}px ${VIEWPORT.height}px; margin: 0; }
      `,
    });
    await sleep(500);

    const sections = await page.$$('.slide-section');
    if (!sections.length) {
      throw new Error('No .slide-section elements found.');
    }

    for (const section of sections) {
      await section.scrollIntoViewIfNeeded();
      await sleep(200);
    }
    await page.evaluate(() => {
      const animations = document.getAnimations?.() ?? [];
      for (const animation of animations) {
        try {
          animation.finish();
        } catch {
          // Some animations may not be finishable; ignore them.
        }
      }
    });
    await sleep(200);

    await page.pdf({
      path: PDF_PATH,
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    });
    process.stdout.write(`PDF saved to ${PDF_PATH}\n`);
  } finally {
    await context.close();
    serverProcess?.kill('SIGTERM');
  }
}

main().catch((err) => {
  process.stderr.write(`${err.message}\n`);
  process.exit(1);
});
