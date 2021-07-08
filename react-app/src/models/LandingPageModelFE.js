const { default: CanvasDataModelFE } = require("./CanvasDataModelFE");
const { default: CanvasRefreshDataModelFE } = require("./CanvasRefreshDataModelFE");
const { default: CanvasUIModelFE } = require("./CanvasUIModelFE");

class LandingPageModelFE {

    canvasUI = new CanvasUIModelFE();
    canvasData = new CanvasDataModelFE();
    canvasRefreshData = new CanvasRefreshDataModelFE();

}

module.exports = LandingPageModelFE;