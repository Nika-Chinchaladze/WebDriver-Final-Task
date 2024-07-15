const { expect, browser } = require('@wdio/globals');

const { page } = require("../pom/index");

describe("Swag Labs Page", () => {
    beforeEach(async () => {
        await page("base").open();
    });

    it("should test UC-1 task", async () => {
        // Type any credentials into "Username" and "Password" fields.
        await page("login").usernameInput.setValue("chincho");
        await page("login").passwordInput.setValue("chincho123");
    
        // Clear the inputs.
        await page("login").usernameInput.clearValue();
        await page("login").passwordInput.clearValue();

        const username = await page("login").usernameInput.getValue();
        const password = await page("login").passwordInput.getValue();

        expect(username).toBe("");
        expect(password).toBe("");
    
        // Hit the "Login" button.
        await browser.refresh();
        await page("login").submitBtn.click();
    
        // Check the error messages: "Username is required".
        const errorElement = await page("error").userNameRequired;
        const errorMessage = await errorElement.getText();
    
        expect(errorElement).toExist();
        expect(errorMessage).toContain("Username is required");
    });
});