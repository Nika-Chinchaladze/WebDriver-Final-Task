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
}

module.exports = LoginComponent;
