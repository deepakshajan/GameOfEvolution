const ConfigCache = require("../../../config/ConfigCache");
const GeneDataModelBE = require("../../models/GeneDataModelBE");
const ModelUtils = require("./ModelUtils");
const SimulationUtils = require("./SimulationUtils");

class CellCreationUtils {

    static computeFormationOfFirstCell(data, fullCell, refreshCell) {
        if(SimulationUtils.getBooleanFromProbablity(ConfigCache.getConfig().probInitialLife) 
            && (ConfigCache.getConfig().tempMaxAliveCount>data.canvasRefreshData.statsData.currentAliveCount || ConfigCache.getConfig().tempMaxAliveCount<0)) {
                this.createNewCell(data, fullCell, refreshCell);
        }
      }

    static createNewCellAtPosition(data, position) {
        let fullCell = ModelUtils.getFullCellAtPosition(data, position);
        let refreshCell = ModelUtils.getRefreshCellCellAtPosition(data, position);
        if(!ModelUtils.isCellAlive(data, position)) {
            this.createNewCell(data, fullCell, refreshCell);
        } else {
            this.handleCreationCollision();
        }
        
    }

    static createNewCellFromAnotherAtPosition(data, fullCell, refreshCell, position) {
        let newFullCell = ModelUtils.getFullCellAtPosition(data, position);
        let newRefreshCell = ModelUtils.getRefreshCellCellAtPosition(data, position);
        if(!ModelUtils.isCellAlive(data, position)) {
            newRefreshCell.cellColor = refreshCell.cellColor;
            newFullCell.isAlive = true;
            newFullCell.geneData = GeneDataModelBE.clone(fullCell.geneData);
            newFullCell.step = fullCell.step+1; 
            data.canvasRefreshData.statsData.currentAliveCount++;
            data.canvasRefreshData.statsData.totalAliveCount++;
        } else {
            this.handleCreationCollision();
        }
        
    }

    static createNewCell(data, fullCell, refreshCell) {
          fullCell.isAlive = true;
          this.computeGeneAttributesForCreatedCells(fullCell);
          data.canvasRefreshData.statsData.currentAliveCount++;
          data.canvasRefreshData.statsData.totalAliveCount++;
          refreshCell.cellColor = "black";
    }

    static handleCreationCollision() {
        //TODO-dshajan case where new positin to be created is already occupied by another alive cell
    }
    

    static computeGeneAttributesForCreatedCells(fullCell) {
        fullCell.geneData.lifeSpan = SimulationUtils.getRandomLimitedPercentageValue(ConfigCache.getConfig().geneLifeSpanMaxValue);
        fullCell.geneData.movement = SimulationUtils.getRandomLimitedPercentageValue(ConfigCache.getConfig().geneMovementMaxValue);
        fullCell.geneData.reproductivity = SimulationUtils.getRandomLimitedPercentageValue(ConfigCache.getConfig().geneReproductivityMaxValue);
    }
}

module.exports = CellCreationUtils;