const { expect, browser } = require('@wdio/globals');

const { page } = require("../pom/index");

describe("Swag Labs Page", () => {
    beforeEach(async () => {
        await page("base").open();
    });

    it("should test UC-1 task", async () => {
        await page("login").usernameInput.click();
        await page("login").usernameInput.setValue("chincho");
        await browser.pause(5000);
    });
});