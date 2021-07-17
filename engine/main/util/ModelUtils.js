const ConfigCache = require("../../../config/ConfigCache");
const GeneDataModelBE = require("../../models/GeneDataModelBE");

class ModelUtils {

    static resetFullCellData(fullCellData) {
        fullCellData.isAlive = false;
        fullCellData.isMultiCell = false;
        fullCellData.geneData = new GeneDataModelBE();
    }

    static resetRefreshCellData(refreshCellData) {
        refreshCellData.cellColor = ConfigCache.getConfig().cellColorDefault;
    }
}

module.exports = ModelUtils;