import { expect } from 'chai';
import { By, Key } from 'selenium-webdriver';

describe('Tooltip', function() {
  describe('static tooltip', function() {
    it('simple', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('simple');
    });
  });
  describe('tooltip left', function() {
    it('plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('plain');
    });
  });
  describe('tooltip right', function() {
    it('plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('plain');
    });
  });
  describe('tooltip bottom', function() {
    it('plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('plain');
    });
  });
  describe('Tooltips without wrapper around inline-block with 50% width', function() {
    it('hover', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .move({
          origin: this.browser.findElement(By.css('textarea')),
        })
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('hover');
    });
  });
  describe('Opened tooltip without wrapper', function() {
    it('plain', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('plain');
    });
  });
  describe('focus tooltip', function() {
    it('01 - plain', async function() {
      [
        {
          type: 'skip',
          args: ['firefox', 'в firefox завезли поддержку focusin/focusout только с 52ой версии'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('01 - plain');
    });
    it('02 - focus', async function() {
      [
        {
          type: 'skip',
          args: ['firefox', 'в firefox завезли поддержку focusin/focusout только с 52ой версии'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .sendKeys(Key.TAB)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('02 - focus');
    });
    it('03 - blur', async function() {
      [
        {
          type: 'skip',
          args: ['firefox', 'в firefox завезли поддержку focusin/focusout только с 52ой версии'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .sendKeys(Key.TAB)
        .sendKeys(/*selector("button"),*/ Key.TAB)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('03 - blur');
    });
  });
  describe('focus tooltip (native input)', function() {
    it('01 - plain', async function() {
      [
        {
          type: 'skip',
          args: ['firefox', 'в firefox завезли поддержку focusin/focusout только с 52ой версии'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('01 - plain');
    });
    it('02 - focus', async function() {
      [
        {
          type: 'skip',
          args: ['firefox', 'в firefox завезли поддержку focusin/focusout только с 52ой версии'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('input')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('02 - focus');
    });
    it('03 - blur', async function() {
      [
        {
          type: 'skip',
          args: ['firefox', 'в firefox завезли поддержку focusin/focusout только с 52ой версии'],
        },
      ];
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('input')))
        .sendKeys(Key.TAB)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('03 - blur');
    });
  });
  describe('Tooltip with external dynamic content', function() {
    it('01 - plain', async function() {
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
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('01 - plain');
    });
    it('02 - changes top position if does not fit', async function() {
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
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#Container-0 button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('02 - changes top position if does not fit');
    });
    it('03 - does not change position back on shrink', async function() {
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
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#Container-0 button')))
        .click(this.browser.findElement(By.css('#Container-0 button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('03 - does not change position back on shrink');
    });
    it('04 - does not change top position if fits', async function() {
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
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#Container-0 button')))
        .click(this.browser.findElement(By.css('#Container-0 button')))
        .click(this.browser.findElement(By.css('#Container-1 button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('04 - does not change top position if fits');
    });
    it('05 - does not change position on shrink', async function() {
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
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#Container-0 button')))
        .click(this.browser.findElement(By.css('#Container-0 button')))
        .click(this.browser.findElement(By.css('#Container-1 button')))
        .click(this.browser.findElement(By.css('#Container-1 button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('05 - does not change position on shrink');
    });
    it('06 - changes left position if does not fit', async function() {
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
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#Container-0 button')))
        .click(this.browser.findElement(By.css('#Container-0 button')))
        .click(this.browser.findElement(By.css('#Container-1 button')))
        .click(this.browser.findElement(By.css('#Container-1 button')))
        .click(this.browser.findElement(By.css('#Container-2 button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('06 - changes left position if does not fit');
    });
    it('07 - does not change position back on shrink', async function() {
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
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#Container-0 button')))
        .click(this.browser.findElement(By.css('#Container-0 button')))
        .click(this.browser.findElement(By.css('#Container-1 button')))
        .click(this.browser.findElement(By.css('#Container-1 button')))
        .click(this.browser.findElement(By.css('#Container-2 button')))
        .click(this.browser.findElement(By.css('#Container-2 button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('07 - does not change position back on shrink');
    });
    it('08 - does not change bottom position if fits', async function() {
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
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#Container-0 button')))
        .click(this.browser.findElement(By.css('#Container-0 button')))
        .click(this.browser.findElement(By.css('#Container-1 button')))
        .click(this.browser.findElement(By.css('#Container-1 button')))
        .click(this.browser.findElement(By.css('#Container-2 button')))
        .click(this.browser.findElement(By.css('#Container-2 button')))
        .click(this.browser.findElement(By.css('#Container-3 button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('08 - does not change bottom position if fits');
    });
    it('09 - does not change position on shrink', async function() {
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
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#Container-0 button')))
        .click(this.browser.findElement(By.css('#Container-0 button')))
        .click(this.browser.findElement(By.css('#Container-1 button')))
        .click(this.browser.findElement(By.css('#Container-1 button')))
        .click(this.browser.findElement(By.css('#Container-2 button')))
        .click(this.browser.findElement(By.css('#Container-2 button')))
        .click(this.browser.findElement(By.css('#Container-3 button')))
        .click(this.browser.findElement(By.css('#Container-3 button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('09 - does not change position on shrink');
    });
    it('10 - does not change bottom position if does not fit', async function() {
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
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#Container-0 button')))
        .click(this.browser.findElement(By.css('#Container-0 button')))
        .click(this.browser.findElement(By.css('#Container-1 button')))
        .click(this.browser.findElement(By.css('#Container-1 button')))
        .click(this.browser.findElement(By.css('#Container-2 button')))
        .click(this.browser.findElement(By.css('#Container-2 button')))
        .click(this.browser.findElement(By.css('#Container-3 button')))
        .click(this.browser.findElement(By.css('#Container-3 button')))
        .click(this.browser.findElement(By.css('#Container-4 button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage(
        '10 - does not change bottom position if does not fit',
      );
    });
    it('11 - does not change position on shrink', async function() {
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
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#Container-0 button')))
        .click(this.browser.findElement(By.css('#Container-0 button')))
        .click(this.browser.findElement(By.css('#Container-1 button')))
        .click(this.browser.findElement(By.css('#Container-1 button')))
        .click(this.browser.findElement(By.css('#Container-2 button')))
        .click(this.browser.findElement(By.css('#Container-2 button')))
        .click(this.browser.findElement(By.css('#Container-3 button')))
        .click(this.browser.findElement(By.css('#Container-3 button')))
        .click(this.browser.findElement(By.css('#Container-4 button')))
        .click(this.browser.findElement(By.css('#Container-4 button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('11 - does not change position on shrink');
    });
  });
  describe('Tooltip with Input and switchable content', function() {
    it('focus and types', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('input')))
        .sendKeys('Hi')
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('focus and types');
    });
    it('clear input', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('input')))
        .sendKeys('Hi')
        .sendKeys(Key.BACK_SPACE, Key.BACK_SPACE)
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('clear input');
    });
  });
  describe('dynamic triggers', function() {
    it('without trigger', async function() {
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
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('without trigger');
    });
    it('hover - mouseEnter', async function() {
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
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#hover')))
        .move({
          origin: this.browser.findElement(By.css('#anchor')),
        })
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('hover - mouseEnter');
    });
    it('hover - mouseLeave', async function() {
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
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#hover')))
        .move({
          origin: this.browser.findElement(By.css('#anchor')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('hover - mouseLeave');
    });
    it('click - click anchor', async function() {
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
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#hover')))
        .move({
          origin: this.browser.findElement(By.css('#anchor')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .click(this.browser.findElement(By.css('#click')))
        .click(this.browser.findElement(By.css('#anchor')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('click - click anchor');
    });
    it('click - click outside', async function() {
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
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#hover')))
        .move({
          origin: this.browser.findElement(By.css('#anchor')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .click(this.browser.findElement(By.css('#click')))
        .click(this.browser.findElement(By.css('#anchor')))
        .click(this.browser.findElement(By.css('body')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('click - click outside');
    });
    it('focus - focus', async function() {
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
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#hover')))
        .move({
          origin: this.browser.findElement(By.css('#anchor')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .click(this.browser.findElement(By.css('#click')))
        .click(this.browser.findElement(By.css('#anchor')))
        .click(this.browser.findElement(By.css('body')))
        .click(this.browser.findElement(By.css('#focus')))
        .click(this.browser.findElement(By.css('#anchor')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('focus - focus');
    });
    it('focus - blur', async function() {
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
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#hover')))
        .move({
          origin: this.browser.findElement(By.css('#anchor')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .click(this.browser.findElement(By.css('#click')))
        .click(this.browser.findElement(By.css('#anchor')))
        .click(this.browser.findElement(By.css('body')))
        .click(this.browser.findElement(By.css('#focus')))
        .click(this.browser.findElement(By.css('#anchor')))
        .click(this.browser.findElement(By.css('body')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('focus - blur');
    });
    it('opened', async function() {
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
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#hover')))
        .move({
          origin: this.browser.findElement(By.css('#anchor')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .click(this.browser.findElement(By.css('#click')))
        .click(this.browser.findElement(By.css('#anchor')))
        .click(this.browser.findElement(By.css('body')))
        .click(this.browser.findElement(By.css('#focus')))
        .click(this.browser.findElement(By.css('#anchor')))
        .click(this.browser.findElement(By.css('body')))
        .click(this.browser.findElement(By.css('#opened')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('opened');
    });
    it('closed', async function() {
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
      const element = await this.browser.findElement(By.css('#test-element'));
      await this.browser
        .actions({
          bridge: true,
        })
        .click(this.browser.findElement(By.css('#hover')))
        .move({
          origin: this.browser.findElement(By.css('#anchor')),
        })
        .move({
          origin: this.browser.findElement(By.css('body')),
        })
        .click(this.browser.findElement(By.css('#click')))
        .click(this.browser.findElement(By.css('#anchor')))
        .click(this.browser.findElement(By.css('body')))
        .click(this.browser.findElement(By.css('#focus')))
        .click(this.browser.findElement(By.css('#anchor')))
        .click(this.browser.findElement(By.css('body')))
        .click(this.browser.findElement(By.css('#opened')))
        .click(this.browser.findElement(By.css('#closed')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('closed');
    });
  });
});
