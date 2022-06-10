const ConfigCache = require("../../../config/ConfigCache");
const CommonUtils = require("./CommonUtils");
const ModelUtils = require("./ModelUtils");
const ProbabilityUtils = require("./ProbabilityUtils");

class CellCreationUtils {

    static computeFormationOfFirstCell(data, fullCell, refreshCell) {
        if(ProbabilityUtils.getBooleanForInitialLifeByChance()
            && (ConfigCache.getConfig().tempMaxAliveCount>data.canvasRefreshData.statsData.currentAliveCount || ConfigCache.getConfig().tempMaxAliveCount<0)) {
                this.createNewCell(data, fullCell, refreshCell);
        }
      }

    static createNewCellAtPosition(data, position) {
        let fullCell = ModelUtils.getFullCellAtPosition(data, position);
        let refreshCell = ModelUtils.getRefreshCellCellAtPosition(data, position);
        if(!ModelUtils.isCellAlive(data, position)) {
            this.createNewCell(data, fullCell, refreshCell);
        }
    }

    static createNewCell(data, fullCell, refreshCell) {
          fullCell.isAlive = true;
          this.computeGeneAttributesForCreatedCells(fullCell);
          data.canvasRefreshData.statsData.currentAliveCount++;
          data.canvasRefreshData.statsData.totalAliveCount++;
          let speciesId = CommonUtils.generateNewSpeciesId();
          fullCell.speciesId = speciesId;
          refreshCell.cellColor = speciesId;
    }
    

    static computeGeneAttributesForCreatedCells(fullCell) {
        fullCell.geneData.lifeSpan = ProbabilityUtils.getRandomLimitedValueWithin(ConfigCache.getConfig().geneLifeSpanMaxValue);
        fullCell.geneData.movement = ProbabilityUtils.getRandomLimitedValueWithin(ConfigCache.getConfig().geneMovementMaxValue);
        fullCell.geneData.reproductivity = ProbabilityUtils.getRandomLimitedValueWithin(ConfigCache.getConfig().geneReproductivityMaxValue);
        fullCell.geneData.fitness = ProbabilityUtils.getRandomLimitedValueWithin(ConfigCache.getConfig().genefitnessStartMaxValue);;
    }

}

module.exports = CellCreationUtils;