const ConfigCache = require("../config/ConfigCache");
const DataCache = require("../engine/data/DataCache");
const SimulationWorker = require("../engine/main/SimulationWorker");

class StopSimulationService {

    static stop() {
        SimulationWorker.worker.terminate();
        ConfigCache.getConfig().canRunSimulation = false;
        ConfigCache.getConfig().canPingClient = false;
        DataCache.resetData();
        console.log("GOELog: Stopped simulation.");
    }
}

module.exports = StopSimulationService;
