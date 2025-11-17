import { BasePage } from './base.page.js';

export class LoginPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.errorAlert = page.locator('.oxd-alert-content-text');
    this.dashboardHeader = page.locator('h6:has-text("Dashboard")');
  }

  async open() {
    await this.page.goto('/');
  }

  /**
   * Perform login with the given credentials.
   * @param {string} username
   * @param {string} password
   */
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertUserIsLoggedIn() {
    await this.dashboardHeader.waitFor({ state: 'visible' });
  }

  async assertErrorIsVisible() {
    await this.errorAlert.waitFor({ state: 'visible' });
  }
}
