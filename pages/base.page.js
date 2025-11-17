export class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to a given path, default is root.
   * @param {string} path
   */
  async goto(path = '/') {
    await this.page.goto(path);
  }

  /**
   * Waits for a locator to become visible.
   * @param {import('@playwright/test').Locator} locator
   */
  async waitForVisible(locator) {
    await locator.waitFor({ state: 'visible' });
  }
}
