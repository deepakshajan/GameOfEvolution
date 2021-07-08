const io = require("socket.io-client");
const DataCache = require("../data/DataCache");

class SocketDataProvider {

    static getDataForLandingPageRefresh() {
        const data = DataCache.getData();
        return data.canvasRefreshData;
    }

}

module.exports = SocketDataProvider;