const BaseComponent = require("../common/base.component");
const errorData = require("./error.data.json");

class ErrorComponent extends BaseComponent {
    constructor() {
        super(errorData.root);
    }

    get userNameRequired() {
        return this.rootElement.$(errorData.username);
    }
}

module.exports = ErrorComponent;
