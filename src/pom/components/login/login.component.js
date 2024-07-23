const BaseComponent = require("../common/base.component");
const loginData = require("./login.data.json");

class LoginComponent extends BaseComponent {
    constructor() {
        super(loginData.root);
    }

    get usernameInput() {
        return this.rootElement.$(loginData.username);
    }

    get passwordInput() {
        return this.rootElement.$(loginData.password);
    }

    get submitBtn() {
        return this.rootElement.$(loginData.submit);
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
