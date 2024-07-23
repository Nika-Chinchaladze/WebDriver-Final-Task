const { expect, browser } = require('@wdio/globals');
const testData = require("./testData.json");

const { page } = require("../pom/index");

describe("Swag Labs Page", () => {
    beforeEach(async () => {
        await page("base").open();
    });

    it("should test UC-1 task", async () => {
        // Type any credentials into "Username" and "Password" fields.
        await page("login").setLoginInputs(testData.username, testData.password);
    
        // Clear the inputs.
        await page("login").setLoginInputs();

        // check that login inputs are cleared.
        const values = await page("login").getLoginInputs();
        expect(values.username).toBe(testData.empty);
        expect(values.password).toBe(testData.empty);
    
        // Hit the "Login" button.
        await browser.refresh();
        await page("login").submitBtn.click();
    
        // Check the error messages: "Username is required".
        const errorElement = await page("error").userNameRequired;
        const errorMessage = await errorElement.getText();
    
        expect(errorElement).toExist();
        expect(errorMessage).toContain(testData.uc1Check);
    });

    it("should test UC-2 task", async () => {
        // Type any credentials in username & Enter password.
        await page("login").setLoginInputs(testData.username, testData.password);

        // Clear the "Password" input.
        await page("login").setLoginInputs(testData.username, testData.empty);

        // Hit the "Login" button.
        const values = await page("login").getLoginInputs();
        expect(values.password).toBe(testData.empty);
        
        await browser.refresh();
        await page("login").setLoginInputs(testData.username, testData.empty);
        await page("login").submitBtn.click();

        // Check the error messages: "Password is required".
        const errorElement = await page("error").userNameRequired;
        const errorMessage = await errorElement.getText();
    
        expect(errorElement).toExist();
        expect(errorMessage).toContain(testData.uc2Check);
    });
 
    it("should test UC-3 task", async () => {
        // Type credentials in username which are under Accepted username are sections.
        const valid = await page("credential").validCredentials();

        const usernameList = valid.username.split("\n");
        const passwordList = valid.password.split("\n");

        // Enter password as secret_sauce.
        await page("login").setLoginInputs(
            usernameList[usernameList.length - 1],
            passwordList[passwordList.length - 1]
        );

        // Click on Login
        await page("login").submitBtn.click();

        // Validate the title "Swag Labs" in the dashboard.
        const title = await page("title").title;
        const titleText = await title.getText();

        expect(title).toExist();
        expect(titleText).toHaveText(testData.uc3Check);
    });
  
});