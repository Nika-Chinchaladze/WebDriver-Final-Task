const BasePage = require("./pages/base.page");
const LoginComponent = require("./components/login/login.component");
const ErrorComponent = require("./components/login/error.component");

/**
 * @param name { 'base' | 'login' } 
 * @returns 
 */

function page(name) {
    const items = {
        base: new BasePage(),
        login: new LoginComponent(),
        error: new ErrorComponent(),
    };
    return items[name.toLowerCase()];
}

module.exports = { page };
