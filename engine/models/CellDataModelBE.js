const GoeConfig = require("../../config/GoeConfig");


class CellDataModelBE {

    cellRowKey = 0;
    cellColumnKey = 0;
    isAlive = false;
    cellColor = GoeConfig.cellColorDefault;

    constructor(rowKey, columnKey) {
        this.cellRowKey = rowKey;
        this.cellColumnKey = columnKey;
    }

    setIsAlive(boolValue) {
        this.isAlive = boolValue;
    }

    setCellColor(stringValue) {
        this.cellColor = stringValue;
    }

}

module.exports = CellDataModelBE;