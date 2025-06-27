import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input#twotabsearchtextbox');
    this.searchButton = page.locator('input#nav-search-submit-button');
  }

  async searchForProduct(product: string) {
    await this.searchInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.searchInput.fill(product);
    await this.searchButton.click();
  }
} 