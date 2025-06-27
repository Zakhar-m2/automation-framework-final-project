import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartIcon: Locator;
  readonly cartItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartIcon = page.locator('#nav-cart');
    this.cartItem = page.locator('.sc-list-item-content');
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async isProductInCart(): Promise<boolean> {
    try {
      await this.cartItem.waitFor({ state: 'visible', timeout: 10000 });
      return true;
    } catch {
      return false;
    }
  }
} 