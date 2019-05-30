import { expect } from 'chai';
import { By, Key } from 'selenium-webdriver';

describe("Kebab", function () {
  describe("14px", function () {
    it("plain", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await expect((await element.takeScreenshot())).to.matchImage("plain");
    });
    it("hovered", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))
      }).perform();
      await expect((await element.takeScreenshot())).to.matchImage("hovered");
    });
    it("clickedOnButton2ndTime", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))
      }).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).perform();
      await expect((await element.takeScreenshot())).to.matchImage("clickedOnButton2ndTime");
    });
    it("clicked", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))
      }).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).perform();
      await expect((await element.takeScreenshot())).to.matchImage("clicked");
    });
    it("clickedOutside", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))
      }).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("body"))).perform();
      await expect((await element.takeScreenshot())).to.matchImage("clickedOutside");
    });
    it("tabPress", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))
      }).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("body"))).sendKeys(Key.TAB).perform();
      await expect((await element.takeScreenshot())).to.matchImage("tabPress");
    });
    it("enterPress", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))
      }).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("body"))).sendKeys(Key.TAB).sendKeys(Key.ENTER).perform();
      await expect((await element.takeScreenshot())).to.matchImage("enterPress");
    });
    it("escapePress", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))
      }).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("body"))).sendKeys(Key.TAB).sendKeys(Key.ENTER).sendKeys(Key.ESCAPE).perform();
      await expect((await element.takeScreenshot())).to.matchImage("escapePress");
    });
  });
  describe("18px", function () {
    it("plain", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await expect((await element.takeScreenshot())).to.matchImage("plain");
    });
    it("hovered", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))
      }).perform();
      await expect((await element.takeScreenshot())).to.matchImage("hovered");
    });
    it("clickedOnButton2ndTime", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))
      }).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).perform();
      await expect((await element.takeScreenshot())).to.matchImage("clickedOnButton2ndTime");
    });
    it("clicked", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))
      }).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).perform();
      await expect((await element.takeScreenshot())).to.matchImage("clicked");
    });
    it("clickedOutside", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))
      }).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("body"))).perform();
      await expect((await element.takeScreenshot())).to.matchImage("clickedOutside");
    });
    it("tabPress", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))
      }).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("body"))).sendKeys(Key.TAB).perform();
      await expect((await element.takeScreenshot())).to.matchImage("tabPress");
    });
    it("enterPress", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))
      }).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("body"))).sendKeys(Key.TAB).sendKeys(Key.ENTER).perform();
      await expect((await element.takeScreenshot())).to.matchImage("enterPress");
    });
    it("escapePress", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))
      }).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("body"))).sendKeys(Key.TAB).sendKeys(Key.ENTER).sendKeys(Key.ESCAPE).perform();
      await expect((await element.takeScreenshot())).to.matchImage("escapePress");
    });
  });
  describe("20px", function () {
    it("plain", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await expect((await element.takeScreenshot())).to.matchImage("plain");
    });
    it("hovered", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))
      }).perform();
      await expect((await element.takeScreenshot())).to.matchImage("hovered");
    });
    it("clickedOnButton2ndTime", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))
      }).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).perform();
      await expect((await element.takeScreenshot())).to.matchImage("clickedOnButton2ndTime");
    });
    it("clicked", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))
      }).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).perform();
      await expect((await element.takeScreenshot())).to.matchImage("clicked");
    });
    it("clickedOutside", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))
      }).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("body"))).perform();
      await expect((await element.takeScreenshot())).to.matchImage("clickedOutside");
    });
    it("tabPress", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))
      }).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("body"))).sendKeys(Key.TAB).perform();
      await expect((await element.takeScreenshot())).to.matchImage("tabPress");
    });
    it("enterPress", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))
      }).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("body"))).sendKeys(Key.TAB).sendKeys(Key.ENTER).perform();
      await expect((await element.takeScreenshot())).to.matchImage("enterPress");
    });
    it("escapePress", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))
      }).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("[class^=\"Kebab-kebab\"]"))).click(this.browser.findElement(By.css("body"))).sendKeys(Key.TAB).sendKeys(Key.ENTER).sendKeys(Key.ESCAPE).perform();
      await expect((await element.takeScreenshot())).to.matchImage("escapePress");
    });
  });
});