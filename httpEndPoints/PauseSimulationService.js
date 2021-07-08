const GoeConfig = require("../config/GoeConfig");

class PauseSimulationService {

    static pause() {
        GoeConfig.canRunSimulation = false;
        GoeConfig.canPingClient = false;
    }
}

module.exports = PauseSimulationService;