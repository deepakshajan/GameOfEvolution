const ConfigCache = require("../config/ConfigCache");


class ResumeSimulationService {
     
    static resume() {
        ConfigCache.getConfig().canRunSimulation = true;
        ConfigCache.getConfig().canPingClient = true;
    }
}

module.exports = ResumeSimulationService;