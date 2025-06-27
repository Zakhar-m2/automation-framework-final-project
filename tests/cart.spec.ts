import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { ProductPage } from '../pages/product.page';
import { CartPage } from '../pages/cart.page';
import { allure } from 'allure-playwright';

const SEARCH_QUERY = 'iPhone';

test.describe.skip('Amazon Guest Cart', () => {
  test('Added product is displayed in the cart (guest)', async ({ page }) => {
    // This test is skipped due to Amazon's anti-bot protections, which block automation for cart actions.
    // See README for details.
  });
}); 