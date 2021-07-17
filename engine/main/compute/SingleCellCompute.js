const { disposeEmitNodes } = require("typescript");
const ModelUtils = require("../util/ModelUtils");
const MovementUtils = require("../util/MovementUtils");
const SimulationUtils = require("../util/SimulationUtils");

class SingleCellCompute {

    static compute(data, fullCell, refreshCell) {
        if(SimulationUtils.getBooleanFromInverseProbablity(fullCell.geneData.lifeSpan)) {
            this.die(data, fullCell, refreshCell);
        } else if(SimulationUtils.getBooleanFromProbablity(fullCell.geneData.movement)) {
            // this.move(data, fullCell, refreshCell);
        } else if(SimulationUtils.getBooleanFromProbablity(fullCell.geneData.reproductivity)) {

        }
    }

    static die(data, fullCell, refreshCell) {
        ModelUtils.resetFullCellData(fullCell);
        ModelUtils.resetRefreshCellData(refreshCell);
        data.canvasRefreshData.statsData.currentAliveCount--;
        data.canvasRefreshData.statsData.totalDeadCount++;
    }

    static move(data, fullCell, refreshCell) {
        const newPosition = MovementUtils.computeNextPosition(fullCell);
        MovementUtils.moveCell(data, fullCell, refreshCell, newPosition);

    }

    static reproduce(data, fullCell, refreshCell) {

    }
}

module.exports = SingleCellCompute;