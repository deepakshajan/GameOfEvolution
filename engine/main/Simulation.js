const ComputeNextStepData = require("./compute/ComputeNextStepData");
const { isMainThread, parentPort, workerData } = require('worker_threads');
const ConfigCache = require("../../config/ConfigCache");

class Simulation {

    static currentData;

    static start() {
        if(ConfigCache.getConfig().canRunSimulation) {
            let nextData = JSON.parse(JSON.stringify(Simulation.currentData));
            ComputeNextStepData.compute(nextData);
            this._postComputeOperations(nextData, Simulation.currentData);
            Simulation.currentData = nextData;
            parentPort.postMessage(nextData);
        }
    }

    static _postComputeOperations(nextData, currentData) {
        const nextCurrentAliveCount = nextData.canvasRefreshData.statsData.currentAliveCount;
        const currentCurrentAliveCount = currentData.canvasRefreshData.statsData.currentAliveCount;
        nextData.canvasRefreshData.statsData.evolutionCycleCount += (nextCurrentAliveCount===1 && currentCurrentAliveCount==0) ? 1 : 0;
    }
}

if (!isMainThread) {
    parentPort.on("message", data => {
        // console.log("Data received into worker -> ", data);
        if(data.config) {
            ConfigCache.setConfig(data.config);
        }
        Simulation.start();
    });
    Simulation.currentData = workerData;
    Simulation.start();
}

module.exports = Simulation;