import { expect } from 'chai';
import { By } from 'selenium-webdriver';

describe('Logotype', function() {
  describe('with widget', function() {
    it('without widget', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#toggle-widget'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('without widget');
    });
    it('with widget', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#toggle-widget'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#toggle-widget')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('with widget');
    });
  });
});
