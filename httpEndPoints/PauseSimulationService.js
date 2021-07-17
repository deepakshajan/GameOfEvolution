const ConfigCache = require("../config/ConfigCache");
const SimulationWorker = require("../engine/main/SimulationWorker");

class PauseSimulationService {

    static pause() {
        ConfigCache.getConfig().canRunSimulation = false;
        ConfigCache.getConfig().canPingClient = false;
        SimulationWorker.worker.postMessage({config: ConfigCache.getConfig()});
        console.log("GOELog: Simulation paused.");
    }
}

module.exports = PauseSimulationService;