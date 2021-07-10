const GoeConfig = require("../../config/GoeConfig");
const RefreshCellDataModelBE = require("./RefreshCellDataModelBE");
const StatsDataModelBE = require("./StatsDataModelBE");

class CanvasRefreshDataModelBE {

    step = 0;
    cellData = [];
    statsData = new StatsDataModelBE();

    constructor() {
        for(let i=0;i<GoeConfig.noCellsVertical;i++) {
            let cellRow = [];
            for(let j=0;j<GoeConfig.noCellsHorizontal;j++) {
                cellRow.push(new RefreshCellDataModelBE(i,j));
            }
            this.cellData.push(cellRow);
        }
    }
}

module.exports = CanvasRefreshDataModelBE;