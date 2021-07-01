const GoeConfig = require("../../config/GoeConfig");

class CellDataModelBE {

    cellKey = 0;
    cellColor = GoeConfig.cellColorDefault;

    constructor(key) {
        this.cellKey = key;
    }

}

module.exports = CellDataModelBE;