const SpeciesCache = require("../../data/SpeciesCache");
const ModelUtils = require("./ModelUtils");

class CellDestructionUtils {

    static die(data, fullCell, refreshCell) {
        SpeciesCache.removeCount(fullCell.speciesId);
        ModelUtils.resetFullCellData(fullCell);
        ModelUtils.resetRefreshCellData(refreshCell);
        data.canvasRefreshData.statsData.currentAliveCount--;
        data.canvasRefreshData.statsData.totalDeadCount++;
        if(data.canvasRefreshData.statsData.currentAliveCount === 0) {
            data.canvasRefreshData.statsData.evolutionCycleCount++;
        }
    }
}

module.exports = CellDestructionUtils;