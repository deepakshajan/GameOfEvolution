
const ConfigCache = require("../../config/ConfigCache");
const RefreshCellDataModelBE = require("./RefreshCellDataModelBE");
const StatsDataModelBE = require("./StatsDataModelBE");

class CanvasRefreshDataModelBE {

    step = 0;
    cellData = [];
    statsData = new StatsDataModelBE();

    constructor() {
        for(let i=0;i<ConfigCache.getConfig().noCellsVertical;i++) {
            let cellRow = [];
            for(let j=0;j<ConfigCache.getConfig().noCellsHorizontal;j++) {
                cellRow.push(new RefreshCellDataModelBE(i,j));
            }
            this.cellData.push(cellRow);
        }
    }

    clone() {
        let clone = new CanvasRefreshDataModelBE();
        clone.step = this.step;
        for(let i=0;i<ConfigCache.getConfig().noCellsVertical;i++) {
            for(let j=0;j<ConfigCache.getConfig().noCellsHorizontal;j++) {
                clone.cellData[i][j] = this.cellData[i][j].clone();
            }
        }
        clone.statsData = this.statsData.clone();
        return clone;   
    }
}

module.exports = CanvasRefreshDataModelBE;