import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly addedToCartMessage: Locator;
  readonly cartCount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('#add-to-cart-button');
    this.addedToCartMessage = page.locator('h1:has-text("Added to Cart")');
    this.cartCount = page.locator('#nav-cart-count');
  }

  async addToCart() {
    await this.addToCartButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.addToCartButton.click();
  }

  async isAddedToCart(): Promise<boolean> {
    try {
      await this.addedToCartMessage.waitFor({ state: 'visible', timeout: 10000 });
      const count = await this.cartCount.textContent();
      return count === '1';
    } catch {
      return false;
    }
  }
} 