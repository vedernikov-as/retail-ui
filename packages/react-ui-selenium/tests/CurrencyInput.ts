import { expect } from 'chai';
import { By } from 'selenium-webdriver';

describe('CurrencyInput', function() {
  describe('Sample', function() {
    it('Plain', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['button'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Focus', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['button'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[data-comp-name*="CurrencyInput"] input')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('Focus');
    });
    it('Input value', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['button'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[data-comp-name*="CurrencyInput"] input')))
        .sendKeys('1234')
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('Input value');
    });
    it('External focus and input', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['button'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[data-comp-name*="CurrencyInput"] input')))
        .sendKeys('1234')
        .click(this.browser.findElement(By.css('button')))
        .sendKeys('5678')
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('External focus and input');
    });
  });
});
