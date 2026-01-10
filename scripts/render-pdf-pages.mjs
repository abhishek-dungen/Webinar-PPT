import { access, mkdir } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();
const PDF_PATH = path.join(ROOT, 'Webinar PPT.pdf');
const OUTPUT_DIR = path.join(ROOT, 'reports', 'pdf-pages');
const USER_DATA_DIR = path.join(ROOT, '.chromium-profile-pdf');

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

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });
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
      viewport: { width: 1600, height: 900 },
      ...(executablePath ? { executablePath } : {}),
    },
  );
  const page = await context.newPage();

  try {
    await page.goto(pathToFileURL(PDF_PATH).toString(), { waitUntil: 'networkidle' });
    await page.waitForFunction(() => window.PDFViewerApplication?.initialized);
    const pageCount = await page.evaluate(() => window.PDFViewerApplication.pdfViewer.pagesCount);

    for (let i = 1; i <= pageCount; i += 1) {
      await page.evaluate((pageNumber) => {
        const viewer = window.PDFViewerApplication.pdfViewer;
        viewer.currentPageNumber = pageNumber;
        viewer.scrollPageIntoView({ pageNumber });
      }, i);
      await page.waitForTimeout(150);
      const selector = `.page[data-page-number="${i}"]`;
      await page.waitForSelector(selector, { timeout: 5000 });
      const element = page.locator(selector);
      const outPath = path.join(OUTPUT_DIR, `page-${String(i).padStart(3, '0')}.png`);
      await element.screenshot({ path: outPath });
      process.stdout.write(`Rendered ${i}/${pageCount}\n`);
    }
  } finally {
    await context.close();
  }
}

main().catch((err) => {
  process.stderr.write(`${err.message}\n`);
  process.exit(1);
});
