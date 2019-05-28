import { expect } from 'chai';
import { By } from 'selenium-webdriver';

describe("Link", function () {
  describe("Simple", function () {
    it("idle", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await expect((await element.takeScreenshot())).to.matchImage("idle");
    });
    it("hover", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("a"))
      }).perform();
      await expect((await element.takeScreenshot())).to.matchImage("hover");
    });
    it("mouseLeave", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("a"))
      }).move({
        origin: this.browser.findElement(By.css("body"))
      }).perform();
      await expect((await element.takeScreenshot())).to.matchImage("mouseLeave");
    });
  });
  describe("With Icon", function () {
    it("idle", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await expect((await element.takeScreenshot())).to.matchImage("idle");
    });
    it("hover", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("a"))
      }).perform();
      await expect((await element.takeScreenshot())).to.matchImage("hover");
    });
    it("mouseLeave", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("a"))
      }).move({
        origin: this.browser.findElement(By.css("body"))
      }).perform();
      await expect((await element.takeScreenshot())).to.matchImage("mouseLeave");
    });
  });
  describe("Danger", function () {
    it("idle", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await expect((await element.takeScreenshot())).to.matchImage("idle");
    });
    it("hover", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("a"))
      }).perform();
      await expect((await element.takeScreenshot())).to.matchImage("hover");
    });
    it("mouseLeave", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("a"))
      }).move({
        origin: this.browser.findElement(By.css("body"))
      }).perform();
      await expect((await element.takeScreenshot())).to.matchImage("mouseLeave");
    });
  });
  describe("Grayed", function () {
    it("idle", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await expect((await element.takeScreenshot())).to.matchImage("idle");
    });
    it("hover", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("a"))
      }).perform();
      await expect((await element.takeScreenshot())).to.matchImage("hover");
    });
    it("mouseLeave", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("a"))
      }).move({
        origin: this.browser.findElement(By.css("body"))
      }).perform();
      await expect((await element.takeScreenshot())).to.matchImage("mouseLeave");
    });
  });
  describe("Disabled", function () {
    it("idle", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await expect((await element.takeScreenshot())).to.matchImage("idle");
    });
    it("hover", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("a"))
      }).perform();
      await expect((await element.takeScreenshot())).to.matchImage("hover");
    });
    it("mouseLeave", async function () {
      const element = await this.browser.findElement(By.css("#test-element"));
      await this.browser.actions({
        bridge: true
      }).move({
        origin: this.browser.findElement(By.css("a"))
      }).move({
        origin: this.browser.findElement(By.css("body"))
      }).perform();
      await expect((await element.takeScreenshot())).to.matchImage("mouseLeave");
    });
  });
});
