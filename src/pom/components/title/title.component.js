const BaseComponent = require("../common/base.component");
const titleData = require("./title.data.json");

class TitleComponent extends BaseComponent {
    constructor() {
        super(titleData.root);
    }

    get title() {
        return this.rootElement.$(titleData.title);
    }
}

module.exports = TitleComponent;
