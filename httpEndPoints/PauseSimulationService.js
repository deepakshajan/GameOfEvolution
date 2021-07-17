const ConfigCache = require("../config/ConfigCache");

class PauseSimulationService {

    static pause() {
        ConfigCache.getConfig().canRunSimulation = false;
        ConfigCache.getConfig().canPingClient = false;
    }
}

module.exports = PauseSimulationService;