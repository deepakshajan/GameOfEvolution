const SpeciesCache = require("../../data/SpeciesCache");
const GeneDataModelBE = require("../../models/GeneDataModelBE");
const CommonUtils = require("./CommonUtils");
const ModelUtils = require("./ModelUtils");

class EvolutionUtils {

    static evolveChildCellAtPosition(data, fullCell, refreshCell, position) {
        let newFullCell = ModelUtils.getFullCellAtPosition(data, position);
        let newRefreshCell = ModelUtils.getRefreshCellCellAtPosition(data, position);
        if(!ModelUtils.isCellAlive(data, position)) {
            const newSpeciesId = CommonUtils.generateNewSpeciesId();
            newRefreshCell.cellColor = newSpeciesId;
            newFullCell.isAlive = true;
            newFullCell.speciesId = newSpeciesId;
            newFullCell.geneData = GeneDataModelBE.cloneWithEvolution(fullCell.geneData);
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

module.exports = EvolutionUtils;