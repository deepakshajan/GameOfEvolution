const GoeConfig = require("../../config/GoeConfig");
const SimulationUtils = require("./util/SimulationUtils");

class ComputeNextStepData {

    static compute(currentData) {
        let nextData = {...currentData};

        for(let i=0; i<GoeConfig.noCellsVertical;i++) {
          for(let j=0;j<GoeConfig.noCellsHorizontal;j++) {
            let fullCell = SimulationUtils.getFullCellData(nextData, i, j);
            let refreshCell = SimulationUtils.getRefreshCellData(nextData, i, j);
            fullCell.isAlive? this.computeNextActionForAliveCells(nextData,fullCell,refreshCell) : this.computeFormationOfFirstCell(nextData,fullCell,refreshCell);
          }  
        }
        
        nextData.canvasRefreshData.step+=1;
        return nextData;
    }

    static computeFormationOfFirstCell(data, fullCell, refreshCell) {
      if(SimulationUtils.getBooleanFromProbablity(GoeConfig.probInitialLife)) {
        fullCell.isAlive = true;
        fullCell.geneData.lifeSpan = SimulationUtils.getRandomLimitedPercentageValue(GoeConfig.geneLifeSpanMaxValue);
        data.canvasRefreshData.statsData.currentAliveCount++;
        data.canvasRefreshData.statsData.totalAliveCount++;
        refreshCell.cellColor = "black";
      }
    }

    static computeNextActionForAliveCells(data, fullCell, refreshCell) {
      if(SimulationUtils.getBooleanFromInverseProbablity(fullCell.geneData.lifeSpan)) { 
        fullCell.isAlive = false;
        data.canvasRefreshData.statsData.currentAliveCount--;
        data.canvasRefreshData.statsData.totalDeadCount++;
        refreshCell.cellColor = GoeConfig.cellColorDefault;
      }
      
    }

}

module.exports = ComputeNextStepData;