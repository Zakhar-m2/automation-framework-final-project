import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  use: {
    baseURL: 'https://www.amazon.com/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    storageState: './.auth/storageState.json',
    headless: false
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: './.auth/storageState.json',
        headless: true
      },
    },
  ],
}); 