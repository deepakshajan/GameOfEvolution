const GoeConfig = require("../../config/GoeConfig");
const SocketDataProvider = require("./SocketDataProvider");


class SocketEngine {

    static pushDataToClient(socket) {
        setInterval(() => {  
            if(GoeConfig.canPingClient) {
                const dataToClient = SocketDataProvider.getDataForLandingPageRefresh();
                socket.emit('dataFromServer', dataToClient);
                // console.log("GOELog: Data sent to client -> step : ", dataToClient.step);
            }    
        }, GoeConfig.socketPingIntervalMs);
    }
}

module.exports = SocketEngine;