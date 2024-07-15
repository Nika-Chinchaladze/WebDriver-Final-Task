const BasePage = require("./pages/base.page");
const LoginComponent = require("./components/login/login.component");
const ErrorComponent = require("./components/login/error.component");
const CredentialComponent = require("./components/credential/credential.component");
const TitleComponent = require("./components/title/title.component")

/**
 * @param name { 'base' | 'login' | 'error' | 'credential' | 'title' } 
 * @returns 
 */

function page(name) {
    const items = {
        base: new BasePage(),
        login: new LoginComponent(),
        error: new ErrorComponent(),
        credential: new CredentialComponent(),
        title: new TitleComponent(),
    };
    return items[name.toLowerCase()];
}

module.exports = { page };
