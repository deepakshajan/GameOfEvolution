const CanvasDataModelBE = require("./CanvasDataModelBE");
const CanvasRefreshDataModelBE = require("./CanvasRefreshDataModelBE");
const CanvasUIModelBE = require("./CanvasUIModelBE");

class LandingPageModelBE {

    messageSeq = 0;
    canvasUI = new CanvasUIModelBE();
    canvasData =  new CanvasDataModelBE();
    canvasRefreshData = new CanvasRefreshDataModelBE();
}

module.exports = LandingPageModelBE;