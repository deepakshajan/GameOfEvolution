const CanvasDataModelBE = require("./CanvasDataModelBE");
const CanvasRefreshDataModelBE = require("./CanvasRefreshDataModelBE");
const CanvasUIModelBE = require("./CanvasUIModelBE");

class LandingPageModelBE {

    canvasUI = new CanvasUIModelBE();
    canvasData =  new CanvasDataModelBE();
    canvasRefreshData = new CanvasRefreshDataModelBE();
}

module.exports = LandingPageModelBE;