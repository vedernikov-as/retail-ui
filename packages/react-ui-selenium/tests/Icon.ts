import { expect } from 'chai';
import { By } from 'selenium-webdriver';

describe('Icon', function() {
  describe('All icons', function() {
    it('idle', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('idle');
    });
  });
});
