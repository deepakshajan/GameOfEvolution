const io = require("socket.io-client");
const CanvasDataModelBE = require("./model/CanvasDataModelBE");

class DataProvider {

    constructor() {
    }

    static getDataForLandingPageLoad(pMessageSeq) {
        let data = new CanvasDataModelBE();
        data.messageSeq = pMessageSeq;
        data.dataForInitialLoad = {};
        data.canvasData = {};
        return data;
    }

}

module.exports = DataProvider;