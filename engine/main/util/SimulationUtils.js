

class SimulationUtils {

    static getFullCellData(data, rowIndex, colIndex) {
      return data.canvasData.fullCellData[rowIndex][colIndex];
    }

    static getRefreshCellData(data, rowIndex, colIndex) {
      return data.canvasRefreshData.cellData[rowIndex][colIndex];
    }

    static getBooleanFromProbablity(probablityInPercentage) {
        return this.getRandomPercentageValue() <= probablityInPercentage;
    }

    static getBooleanFromInverseProbablity(probablityInPercentage) {
      return this.getRandomPercentageValue() <= 100-probablityInPercentage;
  }

    static getRandomPercentageValue() {
      return Math.random() * 100;
    }

    static getRandomLimitedPercentageValue(limit) {
      return Math.random() * limit;
    }

}

module.exports = SimulationUtils;