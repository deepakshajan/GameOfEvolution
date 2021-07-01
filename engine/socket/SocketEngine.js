const GoeConfig = require("../../config/GoeConfig");
const SocketDataProvider = require("./SocketDataProvider");


class SocketEngine {

    static pushDataToClient(socket) {
        let messageSeq = 0;
        setInterval(() => {
            const dataToClient = SocketDataProvider.getDataForLandingPageRefresh(++messageSeq);
            socket.emit('dataFromServer', dataToClient);
            console.log("GOELog:Data sent to client -> messageSeq : ", dataToClient.messageSeq);
        }, GoeConfig.socketPingIntervalMs);
    }
}

module.exports = SocketEngine;