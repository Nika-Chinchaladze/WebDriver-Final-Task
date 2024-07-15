const BasePage = require("./pages/base.page");
const LoginComponent = require("./components/login/login.component");

/**
 * @param name { 'base' | 'login' } 
 * @returns 
 */

function page(name) {
    const items = {
        base: new BasePage(),
        login: new LoginComponent(),
    };
    return items[name.toLowerCase()];
}

module.exports = { page };
