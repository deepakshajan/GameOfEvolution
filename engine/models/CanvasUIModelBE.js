const ConfigCache = require("../../config/ConfigCache");

class CanvasUIModelBE {

    noCellsHorizontal = ConfigCache.getConfig().noCellsHorizontal;
    noCellsVertical   = ConfigCache.getConfig().noCellsVertical;
    cellSizePx = ConfigCache.getConfig().cellSizePx;

    clone() {
        let clone = new CanvasUIModelBE();
        clone.noCellsHorizontal = this.noCellsHorizontal;
        clone.noCellsVertical = this.noCellsVertical;
        clone.cellSizePx = this.cellSizePx;
        return clone;
    }
}

module.exports = CanvasUIModelBE;