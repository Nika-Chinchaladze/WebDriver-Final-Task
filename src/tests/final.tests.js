const { expect, browser } = require('@wdio/globals');

const { page } = require("../pom/index");

describe("Swag Labs Page", () => {
    beforeEach(async () => {
        await page("base").open();
    });
/*
    it("should test UC-1 task", async () => {
        // Type any credentials into "Username" and "Password" fields.
        await page("login").usernameInput.setValue("chincho");
        await page("login").passwordInput.setValue("chincho123");
    
        // Clear the inputs.
        await page("login").usernameInput.setValue("");
        await page("login").passwordInput.setValue("");

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
    
    it("should test UC-2 task", async () => {
        // Type any credentials in username & Enter password.
        await page("login").usernameInput.setValue("chincho");
        await page("login").passwordInput.setValue("chincho123");

        // Clear the "Password" input.
        await page("login").passwordInput.setValue("");

        // Hit the "Login" button.
        const value = await page("login").passwordInput.getValue();
        expect(value).toBe("");
        
        await browser.refresh();
        await page("login").usernameInput.setValue("chincho");
        await page("login").submitBtn.click();

        // Check the error messages: "Password is required".
        const errorElement = await page("error").userNameRequired;
        const errorMessage = await errorElement.getText();
    
        expect(errorElement).toExist();
        expect(errorMessage).toContain("Password is required");
    });
*/
    it("should test UC-3 task", async () => {
        // Type credentials in username which are under Accepted username are sections.
        const validUsername = await page("credential").validUserName.getText();
        const validPassword = await page("credential").validPassword.getText();

        const usernameList = validUsername.split("\n");
        const passwordList = validPassword.split("\n");

        await page("login").usernameInput.setValue(usernameList[usernameList.length - 1]);

        // Enter password as secret_sauce.
        await page("login").passwordInput.setValue(passwordList[passwordList.length - 1]);

        // Click on Login
        await page("login").submitBtn.click();
        await browser.pause(3000);
        
        // Validate the title “Swag Labs” in the dashboard.
    });
});