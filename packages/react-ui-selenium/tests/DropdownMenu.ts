import { expect } from 'chai';
import { By, Key } from 'selenium-webdriver';

describe('DropdownMenu', function() {
  describe('Simple example', function() {
    it('plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('plain');
    });
    it('clickAfterClickedOnCaption', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[class^="PopupMenu-caption"]')))
        .click(this.browser.findElement(By.css('[class^="PopupMenu-caption"]')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('clickAfterClickedOnCaption');
    });
    it('clicked', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[class^="PopupMenu-caption"]')))
        .click(this.browser.findElement(By.css('[class^="PopupMenu-caption"]')))
        .click(this.browser.findElement(By.css('[class^="PopupMenu-caption"]')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('clicked');
    });
    it('clickedOutside', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[class^="PopupMenu-caption"]')))
        .click(this.browser.findElement(By.css('[class^="PopupMenu-caption"]')))
        .click(this.browser.findElement(By.css('[class^="PopupMenu-caption"]')))
        .click(this.browser.findElement(By.css('body')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('clickedOutside');
    });
    it('tabPress', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[class^="PopupMenu-caption"]')))
        .click(this.browser.findElement(By.css('[class^="PopupMenu-caption"]')))
        .click(this.browser.findElement(By.css('[class^="PopupMenu-caption"]')))
        .click(this.browser.findElement(By.css('body')))
        .sendKeys(Key.TAB)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('tabPress');
    });
    it('enterPress', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[class^="PopupMenu-caption"]')))
        .click(this.browser.findElement(By.css('[class^="PopupMenu-caption"]')))
        .click(this.browser.findElement(By.css('[class^="PopupMenu-caption"]')))
        .click(this.browser.findElement(By.css('body')))
        .sendKeys(Key.TAB)
        .sendKeys(Key.ENTER)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('enterPress');
    });
    it('escapePress', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[class^="PopupMenu-caption"]')))
        .click(this.browser.findElement(By.css('[class^="PopupMenu-caption"]')))
        .click(this.browser.findElement(By.css('[class^="PopupMenu-caption"]')))
        .click(this.browser.findElement(By.css('body')))
        .sendKeys(Key.TAB)
        .sendKeys(Key.ENTER)
        .sendKeys(Key.ESCAPE)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('escapePress');
    });
  });
  describe('With header and footer', function() {
    it('clicked', async function() {
      const element = await this.browser.findElement(By.css('html'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[class^="PopupMenu-caption"]')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('clicked');
    });
    it('scrolled by 100', async function() {
      const element = await this.browser.findElement(By.css('html'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[class^="PopupMenu-caption"]')))
        .perform();
      await this.browser.executeScript(function() {
        let scrollContainer = window.document.querySelector('[class^="ScrollContainer-inner"]') as Element;
        scrollContainer.scrollTop += 100;
      });
      await expect(await element.takeScreenshot()).to.matchImage('scrolled by 100');
    });
    it('scrolled down to bottom', async function() {
      const element = await this.browser.findElement(By.css('html'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('[class^="PopupMenu-caption"]')))
        .perform();
      await this.browser.executeScript(function() {
        let scrollContainer = window.document.querySelector('[class^="ScrollContainer-inner"]') as Element;
        scrollContainer.scrollTop += 100;
      });
      await this.browser.executeScript(function() {
        let scrollContainer = window.document.querySelector('[class^="ScrollContainer-inner"]') as Element;
        scrollContainer.scrollTop += scrollContainer.scrollHeight;
      });

      await expect(await element.takeScreenshot()).to.matchImage('scrolled down to bottom');
    });
  });
});
