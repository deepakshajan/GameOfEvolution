const CellDestructionUtils = require("../util/CellDestructionUtils");
const MovementUtils = require("../util/MovementUtils");
const ReproductionUtils = require("../util/ReproductionUtils");
const SimulationUtils = require("../util/SimulationUtils");

class SingleCellCompute {

    static compute(data, fullCell, refreshCell) {
        if(SimulationUtils.getBooleanFromProbablity(fullCell.geneData.reproductivity)) {
            ReproductionUtils.reproduce(data, fullCell, refreshCell);
        } else if(SimulationUtils.getBooleanFromProbablity(fullCell.geneData.movement)) {
            MovementUtils.move(data, fullCell, refreshCell);
        } else if(SimulationUtils.getBooleanFromInverseProbablity(fullCell.geneData.lifeSpan)) {
            CellDestructionUtils.die(data, fullCell, refreshCell);
        }
    }   

}

module.exports = SingleCellCompute;