const LandingPageModelBE = require("../models/LandingPageModelBE");

class DataCache {

    data = new LandingPageModelBE();

    constructor() {
        if(!DataCache.instance) {
            DataCache.instance = this;
        }
        return DataCache.instance;
    }


    getData() {
        return DataCache.instance.data;
    }
    
    setData(data) {
        DataCache.instance.data = data;
    }

    resetData() {
        DataCache.instance.data = new LandingPageModelBE();
    }

}

module.exports = new DataCache();