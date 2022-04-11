const SpeciesCache = require("../../data/SpeciesCache");
const GeneDataModelBE = require("../../models/GeneDataModelBE");
const ModelUtils = require("./ModelUtils");
const MovementUtils = require("./MovementUtils");

class ReproductionUtils {

    static reproduce(data, fullCell, refreshCell) {
        const newPosition = MovementUtils.computeAdjacentPosition(fullCell);
        this.createChildCellAtPosition(data, fullCell, refreshCell, newPosition);
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
        const newFullCell = ModelUtils.getFullCellAtPosition(data, position);
        if(newFullCell.geneData.fitness > fullCell.geneData.fitness) {
            let newRefreshCell = ModelUtils.getRefreshCellCellAtPosition(data, position);
            newRefreshCell.cellColor = refreshCell.cellColor;
            newFullCell.speciesId = fullCell.speciesId;
            newFullCell.geneData = GeneDataModelBE.clone(fullCell.geneData);
            newFullCell.step = fullCell.step+1; 
            SpeciesCache.removeCount(fullCell.speciesId);
            SpeciesCache.addCount(newFullCell.speciesId);
        }
    }

}

module.exports = ReproductionUtils;