import { expect } from 'chai';
import { By, Key } from 'selenium-webdriver';

describe("Tabs", function () {
  describe("simple", function () {
    it("plain", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await expect((await element.takeScreenshot())).to.matchImage("plain");
    });
    it("hovered", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))
      }).perform();
      await expect((await element.takeScreenshot())).to.matchImage("hovered");
    });
    it("clicked", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))
      }).click(this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))).perform();
      await expect((await element.takeScreenshot())).to.matchImage("clicked");
    });
    it("mouseLeave", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))
      }).click(this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))).move({
        origin: this.browser.findElement(By.css("body"))
      }).perform();
      await expect((await element.takeScreenshot())).to.matchImage("mouseLeave");
    });
    it("focused", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))
      }).click(this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))).move({
        origin: this.browser.findElement(By.css("body"))
      }).click(this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))).perform();
      await expect((await element.takeScreenshot())).to.matchImage("focused");
    });
    it("tabPress", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))
      }).click(this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))).move({
        origin: this.browser.findElement(By.css("body"))
      }).click(this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))).sendKeys(Key.TAB).perform();
      await expect((await element.takeScreenshot())).to.matchImage("tabPress");
    });
    it("enterPress", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))
      }).click(this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))).move({
        origin: this.browser.findElement(By.css("body"))
      }).click(this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))).sendKeys(Key.TAB).sendKeys(Key.ENTER).perform();
      await expect((await element.takeScreenshot())).to.matchImage("enterPress");
    });
  });
  describe("vertical", function () {
    it("plain", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await expect((await element.takeScreenshot())).to.matchImage("plain");
    });
    it("hovered", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))
      }).perform();
      await expect((await element.takeScreenshot())).to.matchImage("hovered");
    });
    it("clicked", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))
      }).click(this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))).perform();
      await expect((await element.takeScreenshot())).to.matchImage("clicked");
    });
    it("mouseLeave", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))
      }).click(this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))).move({
        origin: this.browser.findElement(By.css("body"))
      }).perform();
      await expect((await element.takeScreenshot())).to.matchImage("mouseLeave");
    });
    it("focused", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))
      }).click(this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))).move({
        origin: this.browser.findElement(By.css("body"))
      }).click(this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))).perform();
      await expect((await element.takeScreenshot())).to.matchImage("focused");
    });
    it("tabPress", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))
      }).click(this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))).move({
        origin: this.browser.findElement(By.css("body"))
      }).click(this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))).sendKeys(Key.TAB).perform();
      await expect((await element.takeScreenshot())).to.matchImage("tabPress");
    });
    it("enterPress", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))
      }).click(this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))).move({
        origin: this.browser.findElement(By.css("body"))
      }).click(this.browser.findElement(By.css("[class^=\"Tab-root\"]:nth-child(2)"))).sendKeys(Key.TAB).sendKeys(Key.ENTER).perform();
      await expect((await element.takeScreenshot())).to.matchImage("enterPress");
    });
  });
});
