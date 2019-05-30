import { expect } from 'chai';
import { By, Key } from 'selenium-webdriver';

describe('Checkbox', function() {
  describe('plain', function() {
    it('plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('plain');
    });
    it('hovered', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('span')),
        })
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('hovered');
    });
    it('clicked', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('span')),
        })
        .click(this.browser.findElement(By.css('span')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('clicked');
    });
    it('mouseLeave', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('span')),
        })
        .click(this.browser.findElement(By.css('span')))
        .click(this.browser.findElement(By.css('body')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('mouseLeave');
    });
    it('tabPress', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('span')),
        })
        .click(this.browser.findElement(By.css('span')))
        .click(this.browser.findElement(By.css('body')))
        .sendKeys(Key.TAB)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('tabPress');
    });
    it('spacePress', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('span')),
        })
        .click(this.browser.findElement(By.css('span')))
        .click(this.browser.findElement(By.css('body')))
        .sendKeys(Key.TAB)
        .sendKeys(Key.SPACE)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('spacePress');
    });
  });
  describe('disabled', function() {
    it('Checkbox disabled', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('Checkbox disabled');
    });
  });
  describe('disabled checked', function() {
    it('Checkbox disabled checked', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('Checkbox disabled checked');
    });
  });
  describe('error', function() {
    it('Checkbox error', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('Checkbox error');
    });
  });
  describe('with a long label', function() {
    it('plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('plain');
    });
  });
  describe('w/o label', function() {
    it('plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('plain');
    });
  });
  describe('indeterminate', function() {
    it('plain', async function() {
      const element = await this.browser.findElement(By.css('#screenshot-capture'));
      await expect(await element.takeScreenshot()).to.matchImage('plain');
    });
    it('hovered', async function() {
      const element = await this.browser.findElement(By.css('#screenshot-capture'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('label')),
        })
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('hovered');
    });
    it('tabPress', async function() {
      const element = await this.browser.findElement(By.css('#screenshot-capture'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('label')),
        })
        .click(this.browser.findElement(By.css('body')))
        .sendKeys(Key.TAB)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('tabPress');
    });
  });
  describe('highlighted', function() {
    it('plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('plain');
    });
    it('tabPress', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('body')))
        .sendKeys(Key.TAB)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('tabPress');
    });
  });
});
