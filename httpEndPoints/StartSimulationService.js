
const ConfigCache = require("../config/ConfigCache");
const DataCache = require("../engine/data/DataCache");
const SimulationWorker = require("../engine/main/SimulationWorker");

class StartSimulationService {

    static start() {
        DataCache.resetData();
        ConfigCache.getConfig().canRunSimulation= true;
        ConfigCache.getConfig().canPingClient = true;
        console.log("GOELog: Starting simulation.");
        console.log("GOELog: Starting worker thread.");
        SimulationWorker.start();
        SimulationWorker.worker.postMessage({config: ConfigCache.getConfig()});
    }
}

module.exports = StartSimulationService;