const GoeConfig = require("../../config/GoeConfig");
const DataCache = require("../data/DataCache");

class Simulation {

    static start() {
            setInterval(()=>{
                let dataTemp = DataCache.getData();
                dataTemp.canvasRefreshData.step+=1;
                DataCache.setData(dataTemp);
            },GoeConfig.simulationStepIntervalMs);     
    }
}

module.exports = Simulation;