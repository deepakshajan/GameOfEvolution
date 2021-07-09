const GoeConfig = require("../../config/GoeConfig");


class CellDataModelBE {

    rowKey = 0;
    colKey = 0;
    cellColor = GoeConfig.cellColorDefault;

    constructor(rowKey, columnKey) {
        this.rowKey = rowKey;
        this.colKey = columnKey;
    }

    get cellColor() {
        return this.cellColor;
    }
    set cellColor(value) {
        this.cellColor = value;
    }

}

module.exports = CellDataModelBE;