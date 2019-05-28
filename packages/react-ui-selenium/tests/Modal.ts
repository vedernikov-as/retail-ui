import { expect } from 'chai';
import { By } from 'selenium-webdriver';

describe('Modal', function() {
  describe('Modal over another modal', function() {
    it('open first modal', async function() {
      const element = await this.browser.findElement(By.css('html'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('open first modal');
    });
    it('open second modal', async function() {
      const element = await this.browser.findElement(By.css('html'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('button')))
        .click(this.browser.findElement(By.css('[data-comp-name="Body"] button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('open second modal');
    });
  });
  describe('Modal with footer panel', function() {
    it('open modal', async function() {
      const element = await this.browser.findElement(By.css('html'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('open modal');
    });
  });
  describe('Modal without footer panel', function() {
    it('open modal', async function() {
      const element = await this.browser.findElement(By.css('html'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('open modal');
    });
  });
  describe('Modal without footer', function() {
    it('open modal', async function() {
      const element = await this.browser.findElement(By.css('html'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('open modal');
    });
  });
  describe('Modal without header', function() {
    it('open modal', async function() {
      const element = await this.browser.findElement(By.css('html'));
      await expect(await element.takeScreenshot()).to.matchImage('open modal');
    });
  });
  describe('With Icon Input', function() {
    it('open modal', async function() {
      const element = await this.browser.findElement(By.css('html'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('open modal');
    });
  });
  describe('Modal with variable height of content', function() {
    it('open modal', async function() {
      const element = await this.browser.findElement(By.css('html'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('open modal');
    });
    it('toggle content height', async function() {
      const element = await this.browser.findElement(By.css('html'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('button')))
        .click(this.browser.findElement(By.css('#modal-inner [data-comp-name="Toggle"]')))
        .pause(500)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('toggle content height');
    });
  });
  describe('Modal without sticky elements', function() {
    it('top', async function() {
      const element = await this.browser.findElement(By.css('html'));
      await expect(await element.takeScreenshot()).to.matchImage('top');
    });
    it('middle', async function() {
      const element = await this.browser.findElement(By.css('html'));
      await this.browser.executeScript(function() {
        let modalContainer = window.document.querySelector('[class^="Modal-container"]') as Element;
        let modalContent = window.document.querySelector('[class^="Modal-centerContainer"]') as HTMLElement;

        modalContainer.scrollTop = modalContent.offsetHeight / 2;
      });
      await expect(await element.takeScreenshot()).to.matchImage('middle');
    });
    it('bottom', async function() {
      const element = await this.browser.findElement(By.css('html'));
      await this.browser.executeScript(function() {
        let modalContainer = window.document.querySelector('[class^="Modal-container"]') as Element;
        let modalContent = window.document.querySelector('[class^="Modal-centerContainer"]') as HTMLElement;

        modalContainer.scrollTop = modalContent.offsetHeight / 2;
      });
      await this.browser.executeScript(function() {
        let modalContainer = window.document.querySelector('[class^="Modal-container"]') as Element;
        let modalContent = window.document.querySelector('[class^="Modal-centerContainer"]') as HTMLElement;

        modalContainer.scrollTop = modalContent.offsetHeight;
      });
      await expect(await element.takeScreenshot()).to.matchImage('bottom');
    });
  });
  describe('With alignTop', function() {
    it('alignTop', async function() {
      const element = await this.browser.findElement(By.css('html'));
      await expect(await element.takeScreenshot()).to.matchImage('alignTop');
    });
  });
  describe('Small modal on the Top', function() {
    it('open modal', async function() {
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
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('open modal');
    });
    it('close by click on the cross', async function() {
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
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('button')))
        .click(this.browser.findElement(By.css('[data-tid="modal-close"]')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('close by click on the cross');
    });
    it('open again', async function() {
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
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('button')))
        .click(this.browser.findElement(By.css('[data-tid="modal-close"]')))
        .click(this.browser.findElement(By.css('button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('open again');
    });
    it("doesn't close by click on the content", async function() {
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
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('button')))
        .click(this.browser.findElement(By.css('[data-tid="modal-close"]')))
        .click(this.browser.findElement(By.css('button')))
        .click(this.browser.findElement(By.css('[data-tid="modal-content-button"]')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage("doesn't close by click on the content");
    });
    it('closes by click on the background', async function() {
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
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('button')))
        .click(this.browser.findElement(By.css('[data-tid="modal-close"]')))
        .click(this.browser.findElement(By.css('button')))
        .click(this.browser.findElement(By.css('[data-tid="modal-content-button"]')))
        .click(this.browser.findElement(By.css('[data-tid="modal-container"]')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('closes by click on the background');
    });
  });
});
