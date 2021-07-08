const LoadDataProvider = require("../engine/load/LoadDataProvider");

class LoadDataService {

    static load() {
        return LoadDataProvider.getDataForLoad();
    }

}

module.exports = LoadDataService;