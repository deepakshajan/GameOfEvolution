const LandingPageModelBE = require("../models/LandingPageModelBE");

class DataCache {

    static data;

    static getData() {
        if(!DataCache.data) {
            DataCache.data = new LandingPageModelBE();
        }
        return DataCache.data;
    }
    
    static setData(data) {
        DataCache.data = data;
    }

    static resetData() {
        DataCache.data = new LandingPageModelBE();
    }

}

module.exports = DataCache;