const DataCache = require("../../data/DataCache");

class LoadDataProvider {

    static getDataForLoad() {
        return DataCache.getData();
    }
}

module.exports = LoadDataProvider;