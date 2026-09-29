import { test as base, expect, Page } from '@playwright/test';

type MyFixtures = { practicePage: Page };

export const test = base.extend<MyFixtures>({
  practicePage: async ({ page }, use) => {
   console.log('[FIXTURE SETUP]');
   await page.goto('https://practice.expandtesting.com/')
    await use(page);
    console.log('[FIXTURE SETUP]');

  },
});

export { expect };