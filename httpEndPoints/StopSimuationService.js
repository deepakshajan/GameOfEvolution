const ConfigCache = require("../config/ConfigCache");
const DataCache = require("../engine/data/DataCache");

class StopSimulationService {

    static stop() {
        ConfigCache.getConfig().canRunSimulation = false;
        ConfigCache.getConfig().canPingClient = false;
        DataCache.resetData();
    }
}

module.exports = StopSimulationService;
