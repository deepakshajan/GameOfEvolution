const GoeConfig = require("../../config/GoeConfig");
const FullCellDataModel = require("./FullCellDataModel");

class CanvasDataModelBE {

    fullCellData = [];

    totalAliveCount = 0;

    constructor() {
        for(let i=0;i<GoeConfig.noCellsVertical;i++) {
            let cellRow = [];
            for(let j=0;j<GoeConfig.noCellsHorizontal;j++) {
                cellRow.push(new FullCellDataModel(i,j));
            }
            this.fullCellData.push(cellRow);
        }
    }

    get totalAliveCount() {
        return this.totalAliveCount;
    }
    set totalAliveCount(value) {
        this.totalAliveCount = value;
    }

}

module.exports = CanvasDataModelBE;