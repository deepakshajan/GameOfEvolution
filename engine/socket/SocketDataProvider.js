const io = require("socket.io-client");
const DataCache = require("../data/DataCache");

class SocketDataProvider {

    static getDataForLandingPageRefresh(pMessageSeq) {
        const data = DataCache.getData();
        data.canvasRefreshData.cellData.forEach((cell) => {
            cell.cellColor = "#"+Math.floor(Math.random()*16777215).toString(16);
        });
        return data.canvasRefreshData;
    }

}

module.exports = SocketDataProvider;