import { expect } from 'chai';
import { By } from 'selenium-webdriver';

describe('TokenInput', function() {
  describe('empty with reference', function() {
    it('idle', async function() {
      const element = await this.browser.findElement(By.css('.tokens-test-container'));
      await expect(await element.takeScreenshot()).to.matchImage('idle');
    });
    it('clicked', async function() {
      const element = await this.browser.findElement(By.css('.tokens-test-container'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[data-tid="TokenInput"]')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('clicked');
    });
    it('withText', async function() {
      const element = await this.browser.findElement(By.css('.tokens-test-container'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[data-tid="TokenInput"]')))
        .sendKeys('aa')
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('withText');
    });
    it('withMenu', async function() {
      const element = await this.browser.findElement(By.css('.tokens-test-container'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[data-tid="TokenInput"]')))
        .sendKeys('aa')
        .pause(500)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('withMenu');
    });
  });
});
