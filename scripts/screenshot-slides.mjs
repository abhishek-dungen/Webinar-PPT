import { spawn } from 'node:child_process';
import { access, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();
const VIEWPORT = { width: 1920, height: 1080 };
const INPUT_HTML = path.join(ROOT, 'dist', 'index.html');
const PORT = 4173;
const BASE_URL = `http://127.0.0.1:${PORT}/`;
const OUTPUT_BASE = path.join(ROOT, 'screenshots-final');
const USER_DATA_DIR = path.join(ROOT, '.chromium-profile-slides');

process.env.HOME = ROOT;
process.env.XDG_CONFIG_HOME = path.join(ROOT, '.config');
process.env.XDG_CACHE_HOME = path.join(ROOT, '.cache');

async function pathExists(targetPath) {
  try {
    await access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function findExecutable() {
  const candidates = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
  ];
  for (const candidate of candidates) {
    if (await pathExists(candidate)) return candidate;
  }
  return null;
}

async function getOutputDir() {
  try {
    await stat(OUTPUT_BASE);
    const stamp = new Date().toISOString().replace(/[:.]/g, '-');
    const next = `${OUTPUT_BASE}-${stamp}`;
    await mkdir(next, { recursive: true });
    return next;
  } catch {
    await mkdir(OUTPUT_BASE, { recursive: true });
    return OUTPUT_BASE;
  }
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
    await new Promise((resolve) => setTimeout(resolve, 500));
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
  const outputDir = await getOutputDir();
  const executablePath = await findExecutable();
  let targetUrl = pathToFileURL(INPUT_HTML).toString();
  let serverProcess;
  if (await isServerUp()) {
    targetUrl = BASE_URL;
  } else {
    serverProcess = startDevServer();
    const ready = await waitForServer();
    if (ready) {
      targetUrl = BASE_URL;
    }
  }
  const context = await chromium.launchPersistentContext(
    USER_DATA_DIR,
    {
      headless: true,
      args: [
        '--disable-crash-reporter',
        '--disable-crashpad',
        '--no-crashpad',
        '--disable-features=Crashpad',
      ],
      viewport: { ...VIEWPORT, deviceScaleFactor: 1 },
      ...(executablePath ? { executablePath } : {}),
    },
  );
  const page = await context.newPage();

  try {
    await page.goto(targetUrl, { waitUntil: 'networkidle' });
    await page.emulateMedia({ media: 'screen' });
    await page.addStyleTag({
      content: `
        * { transition-duration: 0s !important; }
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
        }
      `,
    });
    await page.evaluate(async () => {
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }
    });

    const sections = await page.$$('.slide-section');
    if (!sections.length) {
      throw new Error('No .slide-section elements found.');
    }

    for (const section of sections) {
      await section.scrollIntoViewIfNeeded();
    }
    await page.waitForTimeout(300);
    await page.evaluate(() => {
      const animations = document.getAnimations?.() ?? [];
      for (const animation of animations) {
        try {
          animation.finish();
        } catch {
          // Ignore non-finishable animations.
        }
      }
    });
    await page.waitForTimeout(200);

    for (let i = 0; i < sections.length; i += 1) {
      const section = sections[i];
      await section.scrollIntoViewIfNeeded();
      await page.waitForTimeout(100);
      const filename = `${i + 1}.png`;
      const filePath = path.join(outputDir, filename);
      await section.screenshot({ path: filePath, type: 'png' });
      process.stdout.write(`Captured ${i + 1}/${sections.length}\n`);
    }
    process.stdout.write(`Saved slides to ${outputDir}\n`);
  } finally {
    await context.close();
    serverProcess?.kill('SIGTERM');
  }
}

main().catch((err) => {
  process.stderr.write(`${err.message}\n`);
  process.exit(1);
});
