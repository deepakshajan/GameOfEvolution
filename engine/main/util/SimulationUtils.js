
class SimulationUtils {

    static getFullCellData(data, rowIndex, colIndex) {
      return data.canvasData.fullCellData[rowIndex][colIndex];
    }

    static getRefreshCellData(data, rowIndex, colIndex) {
      return data.canvasRefreshData.cellData[rowIndex][colIndex];
    }

    static getBooleanFromProbablity(probablity) {
        const highValue = 1/probablity;
        const randomNumber = Math.ceil(Math.random() * highValue);
        return randomNumber === Math.ceil(highValue/2);
    }
}

module.exports = SimulationUtils;