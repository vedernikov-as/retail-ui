import { expect } from 'chai';
import { By, Key } from 'selenium-webdriver';

describe("Paging", function () {
  describe("GoToAbsensePage", function () {
    it("plain", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await expect((await element.takeScreenshot())).to.matchImage("plain");
    });
    it("hover", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Paging-pageLinkWrapper\"]"))
      }).perform();
      await expect((await element.takeScreenshot())).to.matchImage("hover");
    });
    it("change page by number", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Paging-pageLinkWrapper\"]"))
      }).click(this.browser.findElement(By.css("[class^=\"Paging-pageLinkWrapper\"]"))).perform();
      await expect((await element.takeScreenshot())).to.matchImage("change page by number");
    });
    it("change page by forwardLink", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Paging-pageLinkWrapper\"]"))
      }).click(this.browser.findElement(By.css("[class^=\"Paging-pageLinkWrapper\"]"))).click(this.browser.findElement(By.css("[class^=\"Paging-forwardLink\"]"))).perform();
      await expect((await element.takeScreenshot())).to.matchImage("change page by forwardLink");
    });
    it("focused", async function () {
      [{
        "type": "skip",
        "args": ["ie11", "в ie11 не получается \"нажать\" `gemini.CONTROL + gemini.ARROW_RIGHT`"]
      }];
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).click(this.browser.findElement(By.css("[class^=\"Paging-paging\"]"))).perform();
      await expect((await element.takeScreenshot())).to.matchImage("focused");
    });
    it("Move focus right", async function () {
      [{
        "type": "skip",
        "args": ["ie11", "в ie11 не получается \"нажать\" `gemini.CONTROL + gemini.ARROW_RIGHT`"]
      }];
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).click(this.browser.findElement(By.css("[class^=\"Paging-paging\"]"))).sendKeys(Key.ARROW_RIGHT).perform();
      await expect((await element.takeScreenshot())).to.matchImage("Move focus right");
    });
    it("Move to page by Ender", async function () {
      [{
        "type": "skip",
        "args": ["ie11", "в ie11 не получается \"нажать\" `gemini.CONTROL + gemini.ARROW_RIGHT`"]
      }];
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).click(this.browser.findElement(By.css("[class^=\"Paging-paging\"]"))).sendKeys(Key.ARROW_RIGHT).sendKeys(Key.ENTER).perform();
      await expect((await element.takeScreenshot())).to.matchImage("Move to page by Ender");
    });
    it("Next page", async function () {
      [{
        "type": "skip",
        "args": ["ie11", "в ie11 не получается \"нажать\" `gemini.CONTROL + gemini.ARROW_RIGHT`"]
      }];
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).click(this.browser.findElement(By.css("[class^=\"Paging-paging\"]"))).sendKeys(Key.ARROW_RIGHT).sendKeys(Key.ENTER).sendKeys(Key.CONTROL, Key.ARROW_RIGHT).perform();
      await expect((await element.takeScreenshot())).to.matchImage("Next page");
    });
    it("focused", async function () {
      [{
        "type": "only",
        "args": ["ie11"]
      }];
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).click(this.browser.findElement(By.css("[class^=\"Paging-paging\"]"))).perform();
      await expect((await element.takeScreenshot())).to.matchImage("focused");
    });
    it("Move focus right", async function () {
      [{
        "type": "only",
        "args": ["ie11"]
      }];
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).click(this.browser.findElement(By.css("[class^=\"Paging-paging\"]"))).sendKeys(Key.ARROW_RIGHT).perform();
      await expect((await element.takeScreenshot())).to.matchImage("Move focus right");
    });
    it("Move to page by Ender", async function () {
      [{
        "type": "only",
        "args": ["ie11"]
      }];
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).click(this.browser.findElement(By.css("[class^=\"Paging-paging\"]"))).sendKeys(Key.ARROW_RIGHT).sendKeys(Key.ENTER).perform();
      await expect((await element.takeScreenshot())).to.matchImage("Move to page by Ender");
    });
  });
});
