const GoeConfig = require("../../config/GoeConfig");
const DataCache = require("../data/DataCache");
const ComputeNextStepData = require("./ComputeNextStepData");

class Simulation {

    static start() {
            setInterval(()=>{
                if(GoeConfig.canRunSimulation) {
                    let nextData = ComputeNextStepData.compute(DataCache.getData());
                    DataCache.setData(nextData);
                }
            }, GoeConfig.simulationStepIntervalMs);     
    }
}

module.exports = Simulation;