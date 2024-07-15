const { expect, browser } = require('@wdio/globals');

const { page } = require("../pom/index");

describe("Swag Labs Page", () => {
    beforeEach(async () => {
        await page("base").open();
    });

    it("should test UC-1 task", async () => {
        // Type any credentials into "Username" and "Password" fields.
        const username = await page("login").usernameInput;
        const password = await page("login").passwordInput;

        await username.setValue("Chincho");
        await password.setValue("chincho123");

        // Clear the inputs.
        await username.setValue("");
        await password.setValue("");

        // Hit the "Login" button.
        await browser.waitUntil(async () => {
            const usernameValue = await username.getValue();
            const passwordValue = await password.getValue();
            return usernameValue === "" && passwordValue === "";
        }, {
            timeout: 5000,
            timeoutMsg: "Inputs were not cleared within 5 seconds"
        });

        await page("login").submitBtn.click();

        // Check the error messages: "Username is required".
        const errorElement = await page("error").userNameRequired;
        const errorMessage = await errorElement.getText();

        expect(errorElement).toExist();
        expect(errorMessage).toContain("Username is required");
    });
});