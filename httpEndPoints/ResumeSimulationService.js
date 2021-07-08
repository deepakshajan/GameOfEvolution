const GoeConfig = require("../config/GoeConfig");

class ResumeSimulationService {
     
    static resume() {
        GoeConfig.canRunSimulation = true;
        GoeConfig.canPingClient = true;
    }
}

module.exports = ResumeSimulationService;