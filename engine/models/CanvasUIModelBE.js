const GoeConfig = require("../../config/GoeConfig");

class CanvasUIModelBE {

    noCellsHorizontal = GoeConfig.noCellsHorizontal;
    noCellsVertical   = GoeConfig.noCellsVertical;
    cellSizePx = GoeConfig.cellSizePx;
}

module.exports = CanvasUIModelBE;