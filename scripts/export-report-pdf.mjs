import { chromium } from 'playwright';
import path from 'node:path';
import { access } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();
const HTML_PATH = path.join(ROOT, 'reports', 'data_insights_report.html');
const PDF_PATH = path.join(ROOT, 'reports', 'data_insights_report.pdf');
const USER_DATA_DIR = path.join(ROOT, '.chromium-profile-report');

process.env.HOME = ROOT;
process.env.XDG_CONFIG_HOME = path.join(ROOT, '.config');
process.env.XDG_CACHE_HOME = path.join(ROOT, '.cache');

async function findExecutable() {
  const candidates = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
  ];
  for (const candidate of candidates) {
    try {
      await access(candidate);
      return candidate;
    } catch {
      // Try next candidate.
    }
  }
  return null;
}

async function main() {
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
      viewport: { width: 1280, height: 720 },
      ...(executablePath ? { executablePath } : {}),
    },
  );
  const page = await context.newPage();
  await page.goto(pathToFileURL(HTML_PATH).toString(), { waitUntil: 'networkidle' });
  await page.pdf({
    path: PDF_PATH,
    format: 'A4',
    printBackground: true,
    margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' },
  });
  await context.close();
  process.stdout.write(`PDF saved to ${PDF_PATH}\n`);
}

main().catch((err) => {
  process.stderr.write(`${err.message}\n`);
  process.exit(1);
});
