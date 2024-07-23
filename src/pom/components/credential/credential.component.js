const BaseComponent = require("../common/base.component");
const credentialData = require("./credential.data.json");

class CredentialComponent extends BaseComponent {
    constructor() {
        super(credentialData.root);
    }

    get validUserName() {
        return this.rootElement.$(credentialData.username);
    }

    get validPassword() {
        return this.rootElement.$(credentialData.password);
    }

    async validCredentials() {
        return {
            username: await this.validUserName.getText(),
            password: await this.validPassword.getText(),
        }
    }
}

module.exports = CredentialComponent;
