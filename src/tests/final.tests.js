const { expect, browser } = require('@wdio/globals');

const { page } = require("../pom/index");

describe("Swag Labs Page", () => {
    beforeEach(async () => {
        await page("base").open();
    });
/*
    it("should test UC-1 task", async () => {
        // Type any credentials into "Username" and "Password" fields.
        await page("login").setLoginInputs("chincho", "chincho123");
    
        // Clear the inputs.
        await page("login").setLoginInputs();

        // check that login inputs are cleared.
        const values = await page("login").getLoginInputs();
        expect(values.username).toBe("");
        expect(values.password).toBe("");
    
        // Hit the "Login" button.
        await browser.refresh();
        await page("login").submitBtn.click();
    
        // Check the error messages: "Username is required".
        const errorElement = await page("error").userNameRequired;
        const errorMessage = await errorElement.getText();
    
        expect(errorElement).toExist();
        expect(errorMessage).toContain("Username is required");
    });
*/    
    it("should test UC-2 task", async () => {
        // Type any credentials in username & Enter password.
        await page("login").setLoginInputs("chincho", "chincho123");

        // Clear the "Password" input.
        await page("login").setLoginInputs("chincho", "");

        // Hit the "Login" button.
        const values = await page("login").getLoginInputs();
        expect(values.password).toBe("");
        
        await browser.refresh();
        await page("login").setLoginInputs("chincho", "");
        await page("login").submitBtn.click();

        // Check the error messages: "Password is required".
        const errorElement = await page("error").userNameRequired;
        const errorMessage = await errorElement.getText();
    
        expect(errorElement).toExist();
        expect(errorMessage).toContain("Password is required");
    });

/*    
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

        // Validate the title "Swag Labs" in the dashboard.
        const title = await page("title").title;
        const titleText = await title.getText();

        expect(title).toExist();
        expect(titleText).toHaveText("Swag Labs");
    });
*/  
});