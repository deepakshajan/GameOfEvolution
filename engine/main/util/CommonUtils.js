const SpeciesCache = require("../../data/SpeciesCache");

class CommonUtils {

    static generateNewSpeciesId() {
        let hexValue = this.getRandomHexValue();
        if(SpeciesCache.contains(hexValue)) {
            return this.generateNewSpeciesId();
        } else {
            SpeciesCache.addCount(hexValue);
            return hexValue;
        }
    }

    static getRandomHexValue() {
        const letters = '0123456789ABCDEF';
        let value = '#';
        for (let i=0; i<6; i++) {
            value += letters[Math.floor(Math.random() * 16)];
        }
        return value;
      }

}

module.exports = CommonUtils;