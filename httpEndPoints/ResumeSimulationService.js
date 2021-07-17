const ConfigCache = require("../config/ConfigCache");
const SimulationWorker = require("../engine/main/SimulationWorker");


class ResumeSimulationService {
     
    static resume() {
        ConfigCache.getConfig().canRunSimulation = true;
        ConfigCache.getConfig().canPingClient = true;
        SimulationWorker.worker.postMessage({config: ConfigCache.getConfig()});
        console.log("GOELog: Simulation resumed.");
    }
}

module.exports = ResumeSimulationService;