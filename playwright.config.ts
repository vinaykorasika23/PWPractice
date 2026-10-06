import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 50_000,
  expect: {
    timeout: 10_000,
  },

  // Fail CI if test.only or describe.only was committed.
  forbidOnly: !!process.env.CI,

  // Keep the initial CI setup predictable.
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never',
    }],
    ['junit', {
      outputFile: 'test-results/junit.xml',
    }],
  ],

  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
});