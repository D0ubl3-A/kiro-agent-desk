const { test, expect } = require('@playwright/test');
const path = require('path');

function appFileUrl() {
  return 'file:///' + path.resolve(process.cwd(), 'index.html').replace(/\\/g, '/');
}

test('smoke: chat button appends mission context', async ({ page }) => {
  await page.goto(appFileUrl());
  await page.fill('#msg', 'target local music creators for beta signup');
  await page.click('#chatBtn');

  const mission = await page.locator('#mission').inputValue();
  await expect(page.locator('#chat')).toContainText('Mission updated.');
  expect(mission).toContain('target local music creators for beta signup');
});

test('smoke: build button generates rap package outputs', async ({ page }) => {
  await page.goto(appFileUrl());
  await page.click('#buildBtn');

  await expect(page.locator('#state')).toHaveText('Built');
  await expect(page.locator('#checksN')).not.toHaveText('0');
  const filesText = await page.locator('#files').inputValue();
  const files = filesText.split(/\r?\n/).filter(Boolean);
  const checksText = await page.locator('#verify').inputValue();
  const checks = checksText.split(/\r?\n/).filter(Boolean);

  expect(files.length).toBeGreaterThan(8);
  expect(checks.length).toBeGreaterThan(3);
  await expect(page.locator('#ready')).toHaveText('Yes');
});

test('smoke: write folder button handles fallback when picker missing', async ({ page }) => {
  await page.goto(appFileUrl());
  await page.click('#writeBtn');
  await page.waitForTimeout(500);
  const chatText = await page.locator('#chat').innerText();
  expect(chatText.includes('Brain>')).toBeTruthy();
});

test('smoke: download button starts file exports', async ({ page }) => {
  await page.goto(appFileUrl());
  const downloads = [];
  page.on('download', (download) => {
    downloads.push(download);
  });

  await page.click('#buildBtn');
  await page.click('#downloadBtn');

  await page.waitForTimeout(1500);
  expect(downloads.length).toBeGreaterThan(0);
  const filesText = await page.locator('#chat').innerText();
  expect(filesText).toContain('Downloaded');
  expect(filesText).toContain('10 files');
});
