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

    static getFullCellAtPosition(data, position) {
        return data.canvasData.fullCellData[position[0]][position[1]];
    }

    static getRefreshCellCellAtPosition(data, position) {
        return data.canvasRefreshData.cellData[position[0]][position[1]];
    }

    static isCellAlive(data, position) {
        return this.getFullCellAtPosition(data, position).isAlive;
    }

}

module.exports = ModelUtils;