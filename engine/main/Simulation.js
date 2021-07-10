const GoeConfig = require("../../config/GoeConfig");
const DataCache = require("../data/DataCache");
const ComputeNextStepData = require("./ComputeNextStepData");

class Simulation {

    static start() {
        setInterval(()=>{
            if(GoeConfig.canRunSimulation) {
                const currentData = JSON.parse(JSON.stringify(DataCache.getData()));
                let nextData = ComputeNextStepData.compute(DataCache.getData());
                this.postComputeOperations(nextData,currentData);
                DataCache.setData(nextData);
            }
        }, GoeConfig.simulationStepIntervalMs);     
    }

    static postComputeOperations(nextData, currentData) {
        const nextCurrentAliveCount = nextData.canvasRefreshData.statsData.currentAliveCount;
        const currentCurrentAliveCount = currentData.canvasRefreshData.statsData.currentAliveCount;
        nextData.canvasRefreshData.statsData.evolutionCycleCount += (nextCurrentAliveCount===1 && currentCurrentAliveCount==0) ? 1 : 0;
    }
}

module.exports = Simulation;