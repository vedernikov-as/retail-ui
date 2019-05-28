import { expect } from 'chai';
import { By } from 'selenium-webdriver';

describe('DropdownContainer', function() {
  describe('various aligns, portals, items and scrolls', function() {
    it('shot', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#buttons'],
        },
      ];
      const element = await this.browser.findElement(By.css('html'));
      await expect(await element.takeScreenshot()).to.matchImage('shot');
    });
    it('shot', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#buttons'],
        },
      ];
      const element = await this.browser.findElement(By.css('html'));
      await this.browser.executeScript(function() {
        let innerScroll = window.document.querySelector('#inner-scroll') as Element;
        innerScroll.scrollTop = innerScroll.scrollHeight;
        innerScroll.scrollLeft = innerScroll.scrollWidth;
      });
      await expect(await element.takeScreenshot()).to.matchImage('shot');
    });
    it('shot', async function() {
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
        .click(this.browser.findElement(By.css('#buttons button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('shot');
    });
    it('shot', async function() {
      [
        {
          type: 'ignoreElements',
          args: ['#buttons'],
        },
      ];
      const element = await this.browser.findElement(By.css('html'));
      await this.browser.executeScript(function () {
        let innerScroll = window.document.querySelector('#inner-scroll') as Element;
        innerScroll.scrollTop = innerScroll.scrollHeight;
        innerScroll.scrollLeft = innerScroll.scrollWidth;
      });
      await this.browser
      .actions({
        bridge: true,
        })
        .click(this.browser.findElement(By.css('#buttons button')))
        .perform();
      await expect(await element.takeScreenshot()).to.matchImage('shot');
    });
  });
});
