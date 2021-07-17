const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const DataCache = require('../data/DataCache');

class SimulationWorker {

    static worker;

    static start() {
        if (isMainThread) {
            this.worker = new Worker("./engine/main/Simulation.js", {workerData: DataCache.getData()});
            this.worker.on("message", data => {
                // console.log("Data received from worker -> ", data);
                DataCache.setData(data);
                this.worker.postMessage("");
            });
            this.worker.on("error", error => {
                console.log(error);
              });
              this.worker.on("exit", error => {
                console.log("GOELog: Exiting from worker thread.");
              });
          }
    }

}

module.exports = SimulationWorker;