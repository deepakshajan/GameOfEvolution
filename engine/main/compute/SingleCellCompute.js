const CellDestructionUtils = require("../util/CellDestructionUtils");
const MovementUtils = require("../util/MovementUtils");
const ProbabilityUtils = require("../util/ProbabilityUtils");
const ReproductionUtils = require("../util/ReproductionUtils");

class SingleCellCompute {

    static compute(data, fullCell, refreshCell) {
        if(ProbabilityUtils.getBooleanFromProbablity(fullCell.geneData.reproductivity)) {
            ReproductionUtils.reproduce(data, fullCell, refreshCell);
        } else if(ProbabilityUtils.getBooleanFromProbablity(fullCell.geneData.movement)) {
            MovementUtils.move(data, fullCell, refreshCell);
        } else if(ProbabilityUtils.getBooleanFromInverseProbablity(fullCell.geneData.lifeSpan)) {
            CellDestructionUtils.die(data, fullCell, refreshCell);
        }
    }   

}

module.exports = SingleCellCompute;