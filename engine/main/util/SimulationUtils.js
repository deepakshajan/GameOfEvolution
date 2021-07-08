
class SimulationUtils {

    static getItemFromArrayIndex(array, rowIndex, colIndex) {
      return array[rowIndex][colIndex];     
    }

    static getBooleanFromProbablity(probablity) {
        const highValue = 1/probablity;
        const randomNumber = Math.floor(Math.random() * highValue);
        return randomNumber === Math.floor(highValue/2);
    }
}

module.exports = SimulationUtils;