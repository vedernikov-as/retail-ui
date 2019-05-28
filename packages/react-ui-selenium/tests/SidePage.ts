import { expect } from 'chai';
import { By } from 'selenium-webdriver';

describe('SidePage', function() {
  describe('Simple', function() {
    it('open side-page', async function() {
      const element = await this.browser.findElement(By.css('html'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('open side-page');
    });
  });
  describe('SidePage with left position', function() {
    it('plain', async function() {
      const element = await this.browser.findElement(By.css('html'));
      await expect(await element.takeScreenshot()).to.matchImage('plain');
    });
  });
  describe('SidePage over another SidePage', function() {
    it('open internal side-page', async function() {
      const element = await this.browser.findElement(By.css('html'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('button')))
        .click(this.browser.findElement(By.css('[class^="SidePage-body"] button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('open internal side-page');
    });
    it('close internal side-page', async function() {
      const element = await this.browser.findElement(By.css('html'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('button')))
        .click(this.browser.findElement(By.css('[class^="SidePage-body"] button')))
        .click(this.browser.findElement(By.css('.react-ui:last-child [class^="SidePage-footer"] button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('close internal side-page');
    });
  });
  describe('test updateLayout method', function() {
    it('idle', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#buttons'],
        },
      ];
      const element = await this.browser.findElement(By.css('html'));
      await expect(await element.takeScreenshot()).to.matchImage('idle');
    });
    it('Body content has been changed', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#buttons'],
        },
      ];
      const element = await this.browser.findElement(By.css('html'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#toggle-body-content')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('Body content has been changed');
    });
    it('child component content has been changed', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#buttons'],
        },
      ];
      const element = await this.browser.findElement(By.css('html'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#toggle-body-content')))
        .click(this.browser.findElement(By.css('#toggle-body-content')))
        .click(this.browser.findElement(By.css('#toggle-child-component-content')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('child component content has been changed');
    });
    it('update layout', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#buttons'],
        },
      ];
      const element = await this.browser.findElement(By.css('html'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#toggle-body-content')))
        .click(this.browser.findElement(By.css('#toggle-body-content')))
        .click(this.browser.findElement(By.css('#toggle-child-component-content')))
        .click(this.browser.findElement(By.css('#update')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('update layout');
    });
  });
  describe('With long title', function() {
    it('not fixed', async function() {
      [
        {
          type: 'ignoreElements',
          args: [
            {
              every: 'button',
            },
          ],
        },
      ];
      const element = await this.browser.findElement(By.css('html'));
      await expect(await element.takeScreenshot()).to.matchImage('not fixed');
    });
    it('fixed close element', async function() {
      [
        {
          type: 'ignoreElements',
          args: [
            {
              every: 'button',
            },
          ],
        },
      ];
      const element = await this.browser.findElement(By.css('html'));
      await this.browser.executeScript(function() {
        const sidePageContainer = window.document.querySelector('[class^="SidePage-container"]') as Element;
        const sidePageHeader = window.document.querySelector('[class^="SidePage-header"]') as HTMLElement;
        const fixedHeaderHeight = 50;

        sidePageContainer.scrollTop = (sidePageHeader.offsetHeight - fixedHeaderHeight) / 2;
      });
      await expect(await element.takeScreenshot()).to.matchImage('fixed close element');
    });
    it('fixed header', async function() {
      [
        {
          type: 'ignoreElements',
          args: [
            {
              every: 'button',
            },
          ],
        },
      ];
      const element = await this.browser.findElement(By.css('html'));
      await this.browser.executeScript(function() {
        const sidePageContainer = window.document.querySelector('[class^="SidePage-container"]') as Element;
        const sidePageHeader = window.document.querySelector('[class^="SidePage-header"]') as HTMLElement;
        const fixedHeaderHeight = 50;

        sidePageContainer.scrollTop = (sidePageHeader.offsetHeight - fixedHeaderHeight) / 2;
      });
      await this.browser.executeScript(function() {
        const sidePageContainer = window.document.querySelector('[class^="SidePage-container"]') as Element;
        const sidePageHeader = window.document.querySelector('[class^="SidePage-header"]') as HTMLElement;
        const fixedHeaderHeight = 50;

        sidePageContainer.scrollTop = sidePageHeader.offsetHeight - fixedHeaderHeight;
      });
      await expect(await element.takeScreenshot()).to.matchImage('fixed header');
    });
  });
});
