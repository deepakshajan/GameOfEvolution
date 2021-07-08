const GoeConfig = require("../config/GoeConfig");
const DataCache = require("../engine/data/DataCache");

class StopSimulationService {

    static stop() {
        GoeConfig.canRunSimulation = false;
        GoeConfig.canPingClient = false;
        DataCache.resetData();
    }
}

module.exports = StopSimulationService;
