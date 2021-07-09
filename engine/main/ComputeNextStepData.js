const GoeConfig = require("../../config/GoeConfig");
const SimulationUtils = require("./util/SimulationUtils");

class ComputeNextStepData {

    static compute(currentData) {
        let nextData = currentData;

        for(let i=0; i<GoeConfig.noCellsVertical;i++) {
          for(let j=0;j<GoeConfig.noCellsHorizontal;j++) {
            this.computeFormationOfFirstCell(nextData,i,j);
          }  
        }
        
        nextData.canvasRefreshData.step+=1;
        return nextData;
    }

    static computeFormationOfFirstCell(data, rowIndex, colIndex) {
        let fullCell = SimulationUtils.getFullCellData(data, rowIndex, colIndex);
        let refreshCell = SimulationUtils.getRefreshCellData(data, rowIndex, colIndex);
        if(SimulationUtils.getBooleanFromProbablity(GoeConfig.probInitialLife) && !fullCell.isAlive) {
          fullCell.isAlive = true;
          data.canvasData.totalAliveCount++;
          refreshCell.cellColor = "black";
        }
    }

}

module.exports = ComputeNextStepData;