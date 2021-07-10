const GeneDataModelBE = require("./GeneDataModelBE");

class FullCellDataModel {
    
    _rowKey;
    _colKey;

    _isAlive = false;
    
    _geneData = new GeneDataModelBE();

    constructor(rowIndex, colIndex) {
        this._rowKey = rowIndex;
        this._colKey = colIndex;
    }

    get isAlive() {
        return this._isAlive;
    }
    set isAlive(value) {
        this._isAlive = value;
    }
    get geneData() {
        return this._geneData;
    }
    set geneData(value) {
        this._geneData = value;
    }

}

module.exports = FullCellDataModel;