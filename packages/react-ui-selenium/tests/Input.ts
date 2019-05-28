import { expect } from 'chai';
import { By, Key } from 'selenium-webdriver';

describe('Input', function() {
  describe('Inputs with different sizes', function() {
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#small-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Focused', async function() {
      const element = await this.browser.findElement(By.css('#small-input-wrapper'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#small-input-wrapper input')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('Focused');
    });
    it('With typed text', async function() {
      const element = await this.browser.findElement(By.css('#small-input-wrapper'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#small-input-wrapper input')))
        .sendKeys('Test...')
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('With typed text');
    });
    it('With long typed text', async function() {
      const element = await this.browser.findElement(By.css('#small-input-wrapper'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#small-input-wrapper input')))
        .sendKeys('Test...')
        .sendKeys(
          'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        )
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('With long typed text');
    });
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#medium-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Focused', async function() {
      const element = await this.browser.findElement(By.css('#medium-input-wrapper'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#medium-input-wrapper input')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('Focused');
    });
    it('With typed text', async function() {
      const element = await this.browser.findElement(By.css('#medium-input-wrapper'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#medium-input-wrapper input')))
        .sendKeys('Test...')
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('With typed text');
    });
    it('With long typed text', async function() {
      const element = await this.browser.findElement(By.css('#medium-input-wrapper'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#medium-input-wrapper input')))
        .sendKeys('Test...')
        .sendKeys(
          'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        )
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('With long typed text');
    });
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#large-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Focused', async function() {
      const element = await this.browser.findElement(By.css('#large-input-wrapper'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#large-input-wrapper input')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('Focused');
    });
    it('With typed text', async function() {
      const element = await this.browser.findElement(By.css('#large-input-wrapper'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#large-input-wrapper input')))
        .sendKeys('Test...')
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('With typed text');
    });
    it('With long typed text', async function() {
      const element = await this.browser.findElement(By.css('#large-input-wrapper'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#large-input-wrapper input')))
        .sendKeys('Test...')
        .sendKeys(
          'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        )
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('With long typed text');
    });
  });
  describe('Inputs with different states', function() {
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#warning-small-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#warning-large-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#error-small-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#error-large-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#disabled-small-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#disabled-large-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#disabled-text-small-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#disabled-text-large-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#placeholder-small-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#placeholder-large-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#password-small-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#password-large-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#borderless-small-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#borderless-large-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#left-icon-small-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#left-icon-large-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#right-icon-small-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#right-icon-large-input-wrapper'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
  });
  describe('Select all by prop', function() {
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Focused', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('label')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('Focused');
    });
  });
  describe('Select all by button', function() {
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Selected', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('Selected');
    });
  });
  describe('Input with phone mask', function() {
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('Focused', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('input')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('Focused');
    });
    it('Editing', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('input')))
        .sendKeys('9')
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('Editing');
    });
    it('Blured', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('input')))
        .sendKeys('9', Key.TAB)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('Blured');
    });
  });
  describe('Placeholder and Mask', function() {
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
  });
  describe('Prefix and suffix', function() {
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#inputWithPrefixOrSuffx-small'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('First input focused', async function() {
      const element = await this.browser.findElement(By.css('#inputWithPrefixOrSuffx-small'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#inputWithPrefixOrSuffx-small input')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('First input focused');
    });
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#inputWithPrefixOrSuffx-medium'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('First input focused', async function() {
      const element = await this.browser.findElement(By.css('#inputWithPrefixOrSuffx-medium'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#inputWithPrefixOrSuffx-medium input')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('First input focused');
    });
    it('Plain', async function() {
      const element = await this.browser.findElement(By.css('#inputWithPrefixOrSuffx-large'));
      await expect(await element.takeScreenshot()).to.matchImage('Plain');
    });
    it('First input focused', async function() {
      const element = await this.browser.findElement(By.css('#inputWithPrefixOrSuffx-large'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#inputWithPrefixOrSuffx-large input')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('First input focused');
    });
  });
  describe('text styles reset', function() {
    it('plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('plain');
    });
  });
});
