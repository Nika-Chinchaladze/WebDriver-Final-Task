const BaseComponent = require("../common/base.component");

class CredentialComponent extends BaseComponent {
    constructor() {
        super('//div[@class="login_credentials_wrap-inner"]');
    }

    get validUserName() {
        return this.rootElement.$('//div[@id="login_credentials"]')
    }

    get validPassword() {
        return this.rootElement.$('//div[@data-test="login-password"]')
    }

    async validCredentials() {
        return {
            username: await this.validUserName.getText(),
            password: await this.validPassword.getText(),
        }
    }
}

module.exports = CredentialComponent;
