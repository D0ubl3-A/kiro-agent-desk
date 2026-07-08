const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const appFile = path.resolve(process.cwd(), 'index.html').replace(/\\\\/g, '/');
const outDir = path.resolve(process.cwd(), 'artifacts', 'button-demo');
fs.mkdirSync(outDir, { recursive: true });
const logPath = path.join(outDir, 'demo-log.json');

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: false,
    args: ['--disable-web-security']
  });

  const context = await browser.newContext({
    recordVideo: {
      dir: outDir,
      size: { width: 1366, height: 768 }
    }
  });

  const page = await context.newPage();
  const log = [];

  const snap = async (label) => {
    await page.screenshot({ path: path.join(outDir, label + '.png'), fullPage: true });
  };

  const step = async (label, action) => {
    await action();
    await page.waitForTimeout(700);
    const state = {
      label,
      state: await page.locator('#state').innerText(),
      files: await page.locator('#filesN').innerText(),
      checks: await page.locator('#checksN').innerText(),
      ready: await page.locator('#ready').innerText(),
      written: await page.locator('#written').innerText(),
      chat: await page.locator('#chat').innerText(),
    };
    log.push(state);
    await snap(label.replace(/\\s+/g, '-').toLowerCase());
  };

  try {
    await page.goto('file:///' + appFile);
    await snap('00-start');

    await step('01-chat', async () => {
      await page.fill('#msg', 'add a compliance checklist button');
      await page.click('#chatBtn');
    });

    await step('02-build', async () => {
      await page.click('#buildBtn');
    });

    await step('03-write-folder-fallback', async () => {
      await page.click('#writeBtn');
    });

    await step('04-download', async () => {
      await page.click('#downloadBtn');
    });

    await fs.promises.writeFile(logPath, JSON.stringify(log, null, 2));
    console.log('Button demo complete. Artifacts at:');
    console.log(outDir);
    console.log('Log:', logPath);
  } catch (error) {
    console.error('Demo failed:', error.message);
    process.exitCode = 1;
  } finally {
    await context.close();
    await browser.close();
  }
})();
