const GoeConfig = require("../../config/GoeConfig");
const CellDataModelBE = require("./CellDataModelBE");

class CanvasRefreshDataModelBE {

    step = 0;
    cellData = [];

    constructor() {
        for(let i=0;i<GoeConfig.noCellsVertical;i++) {
            let cellRow = [];
            for(let j=0;j<GoeConfig.noCellsHorizontal;j++) {
                cellRow.push(new CellDataModelBE(i,j));
            }
            this.cellData.push(cellRow);
        }
    }
}

module.exports = CanvasRefreshDataModelBE;