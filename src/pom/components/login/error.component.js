const BaseComponent = require("../common/base.component");

class ErrorComponent extends BaseComponent {
    constructor() {
        super("//form");
    }

    get userNameRequired() {
        return this.rootElement.$('//h3[@data-test="error"]');
    }
}

module.exports = ErrorComponent;
