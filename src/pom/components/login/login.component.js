const BaseComponent = require("../common/base.component");

class LoginComponent extends BaseComponent {
    constructor() {
        super("//form");
    }

    get usernameInput() {
        return this.rootElement.$('//input[@data-test="username"]');
    }

    get passwordInput() {
        return this.rootElement.$('//input[@data-test="password"]');
    }

    get submitBtn() {
        return this.rootElement.$('//input[@data-test="login-button"]');
    }

    async setLoginInputs(userName="", password="") {
        await this.usernameInput.setValue(userName);
        await this.passwordInput.setValue(password);
        return;
    }

    async getLoginInputs() {
        return {
            username: await this.usernameInput.getValue(),
            password: await this.passwordInput.getValue(),
        }
    }
}

module.exports = LoginComponent;
