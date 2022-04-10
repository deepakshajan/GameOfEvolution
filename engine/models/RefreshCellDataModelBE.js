const ConfigCache = require("../../config/ConfigCache");

class RefreshCellDataModelBE {

    rowKey = 0;
    colKey = 0;
    cellColor = ConfigCache.getConfig().cellColorDefault;

    constructor(rowKey, columnKey) {
        this.rowKey = rowKey;
        this.colKey = columnKey;
    }

    clone(_self) {
        let clone = new RefreshCellDataModelBE();
        clone.rowKey = _self.rowKey;
        clone.colKey = _self.colKey;
        clone.cellColor = _self.cellColor;
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