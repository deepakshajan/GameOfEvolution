const DataCache = require("../engine/data/DataCache");
const StatsDataModelBE = require("../engine/models/StatsDataModelBE");

class LoadStatsDataService {

    static load() {
        const canvasData = DataCache.getData().canvasData;
        return this.setStatsData(new StatsDataModelBE(), canvasData);
    }

    static setStatsData(statsData, canvasData) {
        statsData.totalAliveCount = canvasData.totalAliveCount;

        return statsData;
    }

}

module.exports = LoadStatsDataService;