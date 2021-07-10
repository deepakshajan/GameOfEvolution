const GoeConfig = require("../../config/GoeConfig");
const FullCellDataModel = require("./FullCellDataModel");

class CanvasDataModelBE {

    fullCellData = [];

    constructor() {
        for(let i=0;i<GoeConfig.noCellsVertical;i++) {
            let cellRow = [];
            for(let j=0;j<GoeConfig.noCellsHorizontal;j++) {
                cellRow.push(new FullCellDataModel(i,j));
            }
            this.fullCellData.push(cellRow);
        }
    }

}

module.exports = CanvasDataModelBE;