const ConfigCache = require("../../../config/ConfigCache");
const SpeciesCache = require("../../data/SpeciesCache");
const ModelUtils = require("./ModelUtils");
const SimulationUtils = require("./SimulationUtils");

class CellCreationUtils {

    static computeFormationOfFirstCell(data, fullCell, refreshCell) {
        if(SimulationUtils.getBooleanFromProbablity(ConfigCache.getConfig().probInitialLife) 
            && (ConfigCache.getConfig().tempMaxAliveCount>data.canvasRefreshData.statsData.currentAliveCount || ConfigCache.getConfig().tempMaxAliveCount<0)) {
                this.createNewCell(data, fullCell, refreshCell);
        }
      }

    static createNewCellAtPosition(data, position) {
        let fullCell = ModelUtils.getFullCellAtPosition(data, position);
        let refreshCell = ModelUtils.getRefreshCellCellAtPosition(data, position);
        if(!ModelUtils.isCellAlive(data, position)) {
            this.createNewCell(data, fullCell, refreshCell);
        }
    }

    static createNewCell(data, fullCell, refreshCell) {
          fullCell.isAlive = true;
          this.computeGeneAttributesForCreatedCells(fullCell);
          data.canvasRefreshData.statsData.currentAliveCount++;
          data.canvasRefreshData.statsData.totalAliveCount++;
          let speciesId = this.generateNewSpeciesId();
          fullCell.speciesId = speciesId;
          refreshCell.cellColor = speciesId;
    }
    

    static computeGeneAttributesForCreatedCells(fullCell) {
        fullCell.geneData.lifeSpan = SimulationUtils.getRandomLimitedPercentageValue(ConfigCache.getConfig().geneLifeSpanMaxValue);
        fullCell.geneData.movement = SimulationUtils.getRandomLimitedPercentageValue(ConfigCache.getConfig().geneMovementMaxValue);
        fullCell.geneData.reproductivity = SimulationUtils.getRandomLimitedPercentageValue(ConfigCache.getConfig().geneReproductivityMaxValue);
        fullCell.geneData.fitness = SimulationUtils.getRandomLimitedPercentageValue(ConfigCache.getConfig().genefitnessStartMaxValue);
    }

    static generateNewSpeciesId() {
        let hexValue = this.getRandomHexValue();
        if(SpeciesCache.contains(hexValue)) {
            return this.generateNewSpeciesId();
        } else {
            SpeciesCache.addCount(hexValue);
            return hexValue;
        }
    }

    static getRandomHexValue() {
        const letters = '0123456789ABCDEF';
        let value = '#';
        for (let i=0; i<6; i++) {
            value += letters[Math.floor(Math.random() * 16)];
        }
        return value;
      }

}

module.exports = CellCreationUtils;