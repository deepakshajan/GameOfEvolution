const DataCache = require("../engine/data/DataCache");
const ModelUtils = require("../engine/main/util/ModelUtils");

class CellDataService {
    
    static getCellData(request) {
        return ModelUtils.getFullCellAtPosition(null, [request.query.rowno, request.query.colno]);
    }
}

module.exports = CellDataService;