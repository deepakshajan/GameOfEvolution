class FullCellDataModel {
    
    rowKey;
    colKey;

    _isAlive = false;


    constructor(rowIndex, colIndex) {
        this.rowKey = rowIndex;
        this.colKey = colIndex;
    }

    get isAlive() {
        return this._isAlive;
    }
    set isAlive(value) {
        this._isAlive = value;
    }

}

module.exports = FullCellDataModel;