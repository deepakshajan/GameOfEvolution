const ConfigCache = require("../../config/ConfigCache");
const FullCellDataModelBE = require("./FullCellDataModelBE");

class CanvasDataModelBE {

    fullCellData = [];

    constructor() {
        for(let i=0;i<ConfigCache.getConfig().noCellsVertical;i++) {
            let cellRow = [];
            for(let j=0;j<ConfigCache.getConfig().noCellsHorizontal;j++) {
                cellRow.push(new FullCellDataModelBE(i,j));
            }
            this.fullCellData.push(cellRow);
        }
    }

    clone(_self) {
        let clone = new CanvasDataModelBE();
        for(let i=0;i<ConfigCache.getConfig().noCellsVertical;i++) {
            for(let j=0;j<ConfigCache.getConfig().noCellsHorizontal;j++) {
                clone.fullCellData[i][j] = _self.fullCellData[i][j].clone();
            }
        }
        return clone;
    }

}

module.exports = CanvasDataModelBE;