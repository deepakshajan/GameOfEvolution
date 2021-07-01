const GoeConfig = require("../../config/GoeConfig");
const CellDataModelBE = require("./CellDataModelBE");

class CanvasRefreshDataModelBE {

    messageSeq = 0;
    cellData = [];

    constructor() {
        const lastIndexOfCell = (GoeConfig.noCellsHorizontal * GoeConfig.noCellsVertical) - 1;
        for(let i=0;i<=lastIndexOfCell;i++) {
            this.cellData.push(new CellDataModelBE("cell_"+i));
        }
    }
}

module.exports = CanvasRefreshDataModelBE;