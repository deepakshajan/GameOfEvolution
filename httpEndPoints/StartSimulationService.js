const GoeConfig = require("../config/GoeConfig");
const DataCache = require("../engine/data/DataCache");

class StartSimulationService {

    static start() {
        DataCache.resetData();
        GoeConfig.canRunSimulation= true;
        GoeConfig.canPingClient = true;
    }
}

module.exports = StartSimulationService;