import { access, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { chromium } from 'playwright';
import pptxgen from 'pptxgenjs';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();
const VIEWPORT = { width: 1920, height: 1080 };
const HTML_PATH = path.join(ROOT, 'reports', 'insights_slides.html');
const PPTX_PATH = path.join(ROOT, 'reports', 'data_insights_presentation.pptx');
const USER_DATA_DIR = path.join(ROOT, '.chromium-profile-pptx');

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
  const base = path.join(ROOT, 'reports', 'slide-screenshots');
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
  const outputDir = await getOutputDir();
  const executablePath = await findExecutable();
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
    await page.goto(pathToFileURL(HTML_PATH).toString(), { waitUntil: 'networkidle' });
    await page.addStyleTag({
      content: `
        * { animation-duration: 0s !important; transition-duration: 0s !important; }
        html, body { margin: 0; padding: 0; }
        .slide-section { width: ${VIEWPORT.width}px !important; height: ${VIEWPORT.height}px !important; }
      `,
    });

    const sections = await page.$$('.slide-section');
    if (!sections.length) {
      throw new Error('No .slide-section elements found in insights_slides.html');
    }

    const imagePaths = [];
    for (let i = 0; i < sections.length; i += 1) {
      const section = sections[i];
      await section.scrollIntoViewIfNeeded();
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
  }
}

main().catch((err) => {
  process.stderr.write(`${err.message}\n`);
  process.exit(1);
});
