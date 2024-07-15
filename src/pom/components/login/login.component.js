const BaseComponent = require("../common/base.component");

class LoginComponent extends BaseComponent {
    constructor() {
        super("//form")
    }

    get usernameInput() {
        return this.rootElement.$('//input[@data-test="username"]');
    }

    get passwordInput() {}

    get submitBtn() {}
}

module.exports = LoginComponent;
