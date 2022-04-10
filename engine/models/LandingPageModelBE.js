const CanvasDataModelBE = require("./CanvasDataModelBE");
const CanvasRefreshDataModelBE = require("./CanvasRefreshDataModelBE");
const CanvasUIModelBE = require("./CanvasUIModelBE");

class LandingPageModelBE {

    canvasUI = new CanvasUIModelBE();
    canvasData = new CanvasDataModelBE();
    canvasRefreshData = new CanvasRefreshDataModelBE();

    clone(_self) {
        let clone = new LandingPageModelBE();
        clone.canvasUI = _self.canvasUI.clone();
        clone.canvasData = _self.canvasData.clone();
        clone.canvasRefreshData = _self.canvasRefreshData.clone();
        return clone;
    }
}

module.exports = LandingPageModelBE;