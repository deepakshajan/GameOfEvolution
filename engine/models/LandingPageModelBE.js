const CanvasDataModelBE = require("./CanvasDataModelBE");
const CanvasRefreshDataModelBE = require("./CanvasRefreshDataModelBE");
const CanvasUIModelBE = require("./CanvasUIModelBE");

class LandingPageModelBE {

    canvasUI = new CanvasUIModelBE();
    canvasData = new CanvasDataModelBE();
    canvasRefreshData = new CanvasRefreshDataModelBE();

    clone() {
        let clone = new LandingPageModelBE();
        clone.canvasUI = this.canvasUI.clone();
        clone.canvasData = this.canvasData.clone();
        clone.canvasRefreshData = this.canvasRefreshData.clone();
        return clone;
    }
}

module.exports = LandingPageModelBE;