const { defineConfig } = require('@playwright/test');
const path = require('path');

const edgeExecutable = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    headless: true,
    launchOptions: {
      executablePath: edgeExecutable,
    },
    screenshot: 'on',
    video: {
      mode: 'retain-on-failure',
      size: { width: 1366, height: 768 }
    },
  },
  outputDir: path.join(__dirname, 'artifacts', 'playwright'),
});
