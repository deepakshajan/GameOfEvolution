const { disposeEmitNodes } = require("typescript");
const CellCreationUtils = require("../util/CellCreationUtils");
const ModelUtils = require("../util/ModelUtils");
const MovementUtils = require("../util/MovementUtils");
const SimulationUtils = require("../util/SimulationUtils");

class SingleCellCompute {

    static compute(data, fullCell, refreshCell) {
        if(SimulationUtils.getBooleanFromInverseProbablity(fullCell.geneData.lifeSpan)) {
            this.die(data, fullCell, refreshCell);
        } else if(SimulationUtils.getBooleanFromProbablity(fullCell.geneData.movement)) {
            this.move(data, fullCell, refreshCell);
        } else if(SimulationUtils.getBooleanFromProbablity(fullCell.geneData.reproductivity)) {
            this.reproduce(data, fullCell, refreshCell);
        }
    }

    static die(data, fullCell, refreshCell) {
        ModelUtils.resetFullCellData(fullCell);
        ModelUtils.resetRefreshCellData(refreshCell);
        data.canvasRefreshData.statsData.currentAliveCount--;
        data.canvasRefreshData.statsData.totalDeadCount++;
        if(data.canvasRefreshData.statsData.currentAliveCount === 0) {
            data.canvasRefreshData.statsData.evolutionCycleCount++;
        }
    }

    static move(data, fullCell, refreshCell) {
        const newPosition = MovementUtils.computeAdjacentPosition(fullCell);
        if(!ModelUtils.isCellAlive(data, newPosition)) {
            MovementUtils.moveCell(data, fullCell, refreshCell, newPosition);
        } else {
            MovementUtils.handleMovementCollision();
        }
        

    }

    static reproduce(data, fullCell, refreshCell) {
        const newPosition = MovementUtils.computeAdjacentPosition(fullCell);
        CellCreationUtils.createNewCellFromAnotherAtPosition(data, fullCell, refreshCell, newPosition);
    }
}

module.exports = SingleCellCompute;