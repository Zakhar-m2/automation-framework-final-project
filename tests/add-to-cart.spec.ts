import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { ProductPage } from '../pages/product.page';

const SEARCH_QUERY = 'iPhone';

test.describe.skip('Amazon Guest Add to Cart', () => {
  test('Guest can add product to cart from product page', async ({ page }) => {
    // This test is skipped due to Amazon's anti-bot protections, which block automation for cart actions.
    // See README for details.
  });
}); 