const ConfigCache = require("../../config/ConfigCache");
const SocketDataProvider = require("./SocketDataProvider");


class SocketEngine {

    static pushDataToClient(socket) {
        setInterval(() => {  
            if(ConfigCache.getConfig().canPingClient) {
                const dataToClient = SocketDataProvider.getDataForLandingPageRefresh();
                socket.emit('dataFromServer', dataToClient);
                // console.log("GOELog: Data sent to client -> step : ", dataToClient.step);
            }    
        }, ConfigCache.getConfig().socketPingIntervalMs);
    }
}

module.exports = SocketEngine;