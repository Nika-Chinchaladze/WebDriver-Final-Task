const BaseComponent = require("../common/base.component");

class TitleComponent extends BaseComponent {
    constructor() {
        super('//div[@class="header_label"]');
    }

    get title() {
        return this.rootElement.$('//div[@class="app_logo"]');
    }
}

module.exports = TitleComponent;
