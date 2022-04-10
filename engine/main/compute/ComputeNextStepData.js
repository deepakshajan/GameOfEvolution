const ConfigCache = require("../../../config/ConfigCache");
const CellCreationUtils = require("../util/CellCreationUtils");
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
              fullCell.isAlive? this.computeNextActionForAliveCells(currentData,fullCell,refreshCell) : CellCreationUtils.computeFormationOfFirstCell(currentData,fullCell,refreshCell);
              this.postComputeOperationsOnCellLevel(fullCell);
            }
          }  
        }
        currentData.canvasRefreshData.step = this.step;

        return currentData;
    }

    static computeNextActionForAliveCells(data, fullCell, refreshCell) {
        fullCell.isMultiCell ? MultiCellCompute.compute(data, fullCell, refreshCell) : SingleCellCompute.compute(data, fullCell, refreshCell); 
    }

    static postComputeOperationsOnCellLevel(fullCell) {
      fullCell.step = this.step;
    }


}

module.exports = ComputeNextStepData;