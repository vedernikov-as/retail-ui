import { expect } from 'chai';
import { By, Key } from 'selenium-webdriver';

describe('Button', function() {
  describe('playground', function() {
    it('idle', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('idle');
    });
    it('hover', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('hover');
    });
    it('mouseLeave', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('mouseLeave');
    });
    it('pressed', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .press()
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('pressed');

      await this.browser
        .actions({
          bridge: true,
        })
        .release()
        .perform();
    });
    it('clicked', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .click(this.browser.findElement(By.css('button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('clicked');
    });
    it('clickedOutside', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .click(this.browser.findElement(By.css('button')))
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
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .click(this.browser.findElement(By.css('button')))
        .click(this.browser.findElement(By.css('body')))
        .sendKeys(Key.TAB)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('tabPress');
    });
  });
  describe('use link', function() {
    it('idle', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('idle');
    });
    it('hover', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('hover');
    });
    it('mouseLeave', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('mouseLeave');
    });
    it('pressed', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .press()
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('pressed');

      await this.browser
        .actions({
          bridge: true,
        })
        .release()
        .perform();
    });
    it('clicked', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .click(this.browser.findElement(By.css('button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('clicked');
    });
    it('clickedOutside', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .click(this.browser.findElement(By.css('button')))
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
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .click(this.browser.findElement(By.css('button')))
        .click(this.browser.findElement(By.css('body')))
        .sendKeys(Key.TAB)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('tabPress');
    });
  });
  describe('use link with icon', function() {
    it('idle', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('idle');
    });
    it('hover', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('hover');
    });
    it('mouseLeave', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('mouseLeave');
    });
    it('pressed', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .press()
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('pressed');

      await this.browser
        .actions({
          bridge: true,
        })
        .release()
        .perform();
    });
    it('clicked', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .click(this.browser.findElement(By.css('button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('clicked');
    });
    it('clickedOutside', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .click(this.browser.findElement(By.css('button')))
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
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .click(this.browser.findElement(By.css('button')))
        .click(this.browser.findElement(By.css('body')))
        .sendKeys(Key.TAB)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('tabPress');
    });
  });
  describe('multiline text with link button', function() {
    it('idle', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('idle');
    });
    it('hover', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('hover');
    });
    it('mouseLeave', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('mouseLeave');
    });
    it('pressed', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .press()
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('pressed');

      await this.browser
        .actions({
          bridge: true,
        })
        .release()
        .perform();
    });
    it('clicked', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .click(this.browser.findElement(By.css('button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('clicked');
    });
    it('clickedOutside', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .click(this.browser.findElement(By.css('button')))
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
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .click(this.browser.findElement(By.css('button')))
        .click(this.browser.findElement(By.css('body')))
        .sendKeys(Key.TAB)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('tabPress');
    });
  });
  describe('with error', function() {
    it('idle', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('idle');
    });
    it('hover', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('hover');
    });
    it('mouseLeave', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('mouseLeave');
    });
    it('pressed', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .press()
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('pressed');

      await this.browser
        .actions({
          bridge: true,
        })
        .release()
        .perform();
    });
    it('clicked', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .click(this.browser.findElement(By.css('button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('clicked');
    });
    it('clickedOutside', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .click(this.browser.findElement(By.css('button')))
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
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .move({
          origin: this.browser.findElement(By.css('button')),
        })
        .click(this.browser.findElement(By.css('button')))
        .click(this.browser.findElement(By.css('body')))
        .sendKeys(Key.TAB)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('tabPress');
    });
  });
  describe('arrow table', function() {
    it('plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('plain');
    });
  });
  describe('text styles reset', function() {
    it('plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('plain');
    });
  });
  describe('with width', function() {
    it('plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('plain');
    });
  });
  describe('different aligns', function() {
    it('plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('plain');
    });
  });
  describe('different visual states', function() {
    it('page - 1', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#paginator'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('page - 1');
    });
    it('page - 2', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#paginator'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#next-page')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('page - 2');
    });
    it('page - 3', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#paginator'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('page - 3');
    });
    it('page - 4', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#paginator'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('page - 4');
    });
    it('page - 5', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#paginator'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('page - 5');
    });
    it('page - 6', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#paginator'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('page - 6');
    });
    it('page - 7', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#paginator'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('page - 7');
    });
    it('page - 8', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#paginator'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('page - 8');
    });
    it('page - 9', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#paginator'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('page - 9');
    });
  });
  describe('different content', function() {
    it('page - 1', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#paginator'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('page - 1');
    });
    it('page - 2', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#paginator'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#next-page')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('page - 2');
    });
    it('page - 3', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#paginator'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('page - 3');
    });
    it('page - 4', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#paginator'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('page - 4');
    });
    it('page - 5', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#paginator'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('page - 5');
    });
    it('page - 6', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#paginator'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('page - 6');
    });
    it('page - 7', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#paginator'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('page - 7');
    });
    it('page - 8', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#paginator'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .click(this.browser.findElement(By.css('#next-page')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('page - 8');
    });
  });
});
