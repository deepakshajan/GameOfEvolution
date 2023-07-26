const SpeciesCache = require("../../data/SpeciesCache");
const GeneDataModelBE = require("../../models/GeneDataModelBE");
const EvolutionUtils = require("./EvolutionUtils");
const ModelUtils = require("./ModelUtils");
const MovementUtils = require("./MovementUtils");
const ProbabilityUtils = require("./ProbabilityUtils");

class ReproductionUtils {

    static reproduce(data, fullCell, refreshCell) {
        const newPosition = MovementUtils.computeAdjacentPosition(fullCell);
        if(ProbabilityUtils.getBooleanForEvolutionByChance()) {
            EvolutionUtils.evolveChildCellAtPosition(data, fullCell, refreshCell, newPosition);
        } else {
            this.createChildCellAtPosition(data, fullCell, refreshCell, newPosition);
        }
    }

    static createChildCellAtPosition(data, fullCell, refreshCell, position) {
        let newFullCell = ModelUtils.getFullCellAtPosition(data, position);
        let newRefreshCell = ModelUtils.getRefreshCellCellAtPosition(data, position);
        if(!ModelUtils.isCellAlive(data, position)) {
            newRefreshCell.cellColor = refreshCell.cellColor;
            newFullCell.isAlive = true;
            newFullCell.speciesId = fullCell.speciesId;
            newFullCell.geneData = GeneDataModelBE.clone(fullCell.geneData);
            newFullCell.step = fullCell.step+1; 
            data.canvasRefreshData.statsData.currentAliveCount++;
            data.canvasRefreshData.statsData.totalAliveCount++;
            SpeciesCache.addCount(newFullCell.speciesId);
        } else {
            this.handleCollision(data, fullCell, refreshCell, position);
        }   
    }

    static handleCollision(data, fullCell, refreshCell, position) {
        const existingFullCell = ModelUtils.getFullCellAtPosition(data, position);
        if(existingFullCell.geneData.fitness < fullCell.geneData.fitness) {
            SpeciesCache.removeCount(existingFullCell.speciesId);
            let existingRefreshCell = ModelUtils.getRefreshCellCellAtPosition(data, position);
            existingRefreshCell.cellColor = refreshCell.cellColor;
            existingFullCell.speciesId = fullCell.speciesId;
            existingFullCell.geneData = GeneDataModelBE.clone(fullCell.geneData);
            existingFullCell.step = fullCell.step+1; 
            SpeciesCache.addCount(fullCell.speciesId);
        }
    }

}

module.exports = ReproductionUtils;