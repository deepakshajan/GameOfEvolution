const GoeConfig = require("../../config/GoeConfig");

class CellDataModelBE {

    cellRowKey = 0;
    cellColumnKey = 0;
    cellColor = GoeConfig.cellColorDefault;

    constructor(rowKey, columnKey) {
        this.cellRowKey = rowKey;
        this.cellColumnKey = columnKey;
    }

}

module.exports = CellDataModelBE;