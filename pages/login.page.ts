import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly accountLists: Locator;
  readonly signInButton: Locator;
  readonly emailInput: Locator;
  readonly continueButton: Locator;
  readonly passwordInput: Locator;
  readonly signInSubmit: Locator;
  readonly navAccountName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountLists = page.locator('#nav-link-accountList');
    this.signInButton = page.locator('a[data-nav-role="signin"]');
    this.emailInput = page.locator('input[type="email"]');
    this.continueButton = page.locator('input[type="submit"]');
    this.passwordInput = page.locator('input[type="password"]');
    this.signInSubmit = page.locator('input#signInSubmit');
    this.navAccountName = page.locator('#nav-link-accountList-nav-line-1');
  }

  async hoverAccountLists() {
    await this.accountLists.hover();
  }

  async clickSignIn() {
    // Use the visible Sign-In button in the flyout
    await this.page.locator('#nav-flyout-ya-signin a:visible').first().click();
  }

  async enterEmail(email: string) {
    await this.emailInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.emailInput.fill(email);
  }

  async clickContinue() {
    await this.continueButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.continueButton.click();
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickSignInSubmit() {
    await this.signInSubmit.click();
    // Debug: take screenshot and log URL after clicking sign in
    await this.page.screenshot({ path: 'debug-after-signin.png' });
    console.log('Current URL after sign in:', this.page.url());
  }

  async isLoggedIn(): Promise<boolean> {
    // Wait for the account name to be visible after login
    try {
      await this.navAccountName.waitFor({ state: 'visible', timeout: 10000 });
      const text = await this.navAccountName.textContent();
      return text !== null && text.trim().length > 0 && !text.includes('Sign in');
    } catch {
      return false;
    }
  }
} 