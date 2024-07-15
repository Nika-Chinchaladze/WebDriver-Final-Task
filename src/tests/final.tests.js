const { expect, browser } = require('@wdio/globals');

const { page } = require("../pom/index");

describe("Swag Labs Page", () => {
    beforeEach(async () => {
        await page("base").open();
    });

    it("should test UC-1 task", async () => {
        // Type any credentials into "Username" and "Password" fields.
        await page("login").usernameInput.click();
        await page("login").usernameInput.setValue("Chincho");
        await page("login").passwordInput.click();
        await page("login").passwordInput.setValue("chincho123");

        await browser.pause(3000);

        // Clear the inputs.
        await page("login").usernameInput.setValue("");
        await page("login").passwordInput.setValue("");

        // Hit the "Login" button.
        await page("login").submitBtn.click();

        // Check the error messages: "Username is required".
    });
});