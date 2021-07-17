const ConfigCache = require("../../../config/ConfigCache");
const SimulationUtils = require("../util/SimulationUtils");
const MultiCellCompute = require("./MultiCellCompute");
const SingleCellCompute = require("./SingleCellCompute");

class ComputeNextStepData {

  static step = 0;

    static compute(currentData) {
        this.step++;

        for(let i=0; i<ConfigCache.getConfig().noCellsVertical;i++) {
          for(let j=0;j<ConfigCache.getConfig().noCellsHorizontal;j++) {
            let fullCell = SimulationUtils.getFullCellData(currentData, i, j);
            if(fullCell.step === this.step-1) { //If this condition fails means that the cell was modified by action from some other cell or is already complete
              let refreshCell = SimulationUtils.getRefreshCellData(currentData, i, j);
              fullCell.isAlive? this.computeNextActionForAliveCells(currentData,fullCell,refreshCell) : this.computeFormationOfFirstCell(currentData,fullCell,refreshCell);
              this.postComputeOperationsOnCellLevel(fullCell);
            }
          }  
        }
        currentData.canvasRefreshData.step = this.step;

        return currentData;
    }

    static computeFormationOfFirstCell(data, fullCell, refreshCell) {
      if(SimulationUtils.getBooleanFromProbablity(ConfigCache.getConfig().probInitialLife) 
          && (ConfigCache.getConfig().tempMaxAliveCount>data.canvasRefreshData.statsData.currentAliveCount || ConfigCache.getConfig().tempMaxAliveCount<0)) {
        fullCell.isAlive = true;
        this.computeGeneAttributesForCreatedCells(fullCell);
        data.canvasRefreshData.statsData.currentAliveCount++;
        data.canvasRefreshData.statsData.totalAliveCount++;
        refreshCell.cellColor = "black";
      }
    }

    static computeNextActionForAliveCells(data, fullCell, refreshCell) {
        fullCell.isMultiCell ? MultiCellCompute.compute(data, fullCell, refreshCell) : SingleCellCompute.compute(data, fullCell, refreshCell); 
    }

    static postComputeOperationsOnCellLevel(fullCell) {
      fullCell.step = this.step;
    }

    static computeGeneAttributesForCreatedCells(fullCell) {
      fullCell.geneData.lifeSpan = SimulationUtils.getRandomLimitedPercentageValue(ConfigCache.getConfig().geneLifeSpanMaxValue);
      fullCell.geneData.movement = SimulationUtils.getRandomPercentageValue();
    }

}

module.exports = ComputeNextStepData;