const DataProvider = require("./DataProvider");

class SocketEngine {

    static pushDataToClient(socket) {
        let messageSeq = 0;
        setInterval(() => {
            socket.emit('dataFromServer', DataProvider.getDataForLandingPageLoad(++messageSeq));
        }, 1);
    }
}

module.exports = SocketEngine;