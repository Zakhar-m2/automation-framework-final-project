import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

const SEARCH_QUERY = 'iPhone';

test.describe('Amazon Guest Search', () => {
  test('Guest can search for products', async ({ page }) => {
    await page.goto('https://www.amazon.com/');
    const homePage = new HomePage(page);
    await homePage.searchForProduct(SEARCH_QUERY);
    // Wait for search results
    const resultsText = await page.locator('span.a-color-state.a-text-bold').textContent();
    expect(resultsText).toContain(SEARCH_QUERY);
  });
}); 