const ConfigCache = require("../../config/ConfigCache");

class RefreshCellDataModelBE {

    rowKey = 0;
    colKey = 0;
    cellColor = ConfigCache.getConfig().cellColorDefault;

    constructor(rowKey, columnKey) {
        this.rowKey = rowKey;
        this.colKey = columnKey;
    }

    clone() {
        let clone = new RefreshCellDataModelBE();
        clone.rowKey = this.rowKey;
        clone.colKey = this.colKey;
        clone.cellColor = this.cellColor;
        return clone;
    }

    get cellColor() {
        return this.cellColor;
    }
    set cellColor(value) {
        this.cellColor = value;
    }

}

module.exports = RefreshCellDataModelBE;