class SimulationUtils {

    static getFullCellData(data, rowIndex, colIndex) {
      return data.canvasData.fullCellData[rowIndex][colIndex];
    }

    static getRefreshCellData(data, rowIndex, colIndex) {
      return data.canvasRefreshData.cellData[rowIndex][colIndex];
    }


}

module.exports = SimulationUtils;