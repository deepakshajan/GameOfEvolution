const ConfigCache = require("../../config/ConfigCache");

class CanvasUIModelBE {

    noCellsHorizontal = ConfigCache.getConfig().noCellsHorizontal;
    noCellsVertical   = ConfigCache.getConfig().noCellsVertical;
    cellSizePx = ConfigCache.getConfig().cellSizePx;

    clone(_self) {
        let clone = new CanvasUIModelBE();
        clone.noCellsHorizontal = _self.noCellsHorizontal;
        clone.noCellsVertical = _self.noCellsVertical;
        clone.cellSizePx = _self.cellSizePx;
        return clone;
    }
}

module.exports = CanvasUIModelBE;