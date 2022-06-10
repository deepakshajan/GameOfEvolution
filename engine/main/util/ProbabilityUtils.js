const ConfigCache = require("../../../config/ConfigCache");

class ProbabilityUtils {

    static probInitialLifeInverse = Math.ceil(1/ConfigCache.getConfig().probInitialLife);
    static probEvolutionInverse = Math.ceil(1/ConfigCache.getConfig().probEvolution);
    static geneCommonMinValue = ConfigCache.getConfig().geneCommonMinValue;

    static probInitialLifeHitValue = Math.ceil(this.probInitialLifeInverse/2);
    static probEvolutionHitValue = Math.ceil(this.probEvolutionInverse/2);

    static getBooleanFromProbablity(probablityInPercentage) {
        return this.getRandomPercentageValue() < probablityInPercentage;
    }

    static getBooleanFromInverseProbablity(probablityInPercentage) {
      return this.getRandomPercentageValue() < 100-probablityInPercentage;
    }

  static getBooleanForInitialLifeByChance() {
    let randomValue = this.getRandomLimitedValueWithin(this.probInitialLifeInverse);
    return randomValue === this.probInitialLifeHitValue;
    }

    static getBooleanForEvolutionByChance() {
        let randomValue = this.getRandomLimitedValueWithin(this.probEvolutionInverse);
        return randomValue === this.probEvolutionHitValue;
    }

    static getRandomPercentageValue() {
      return Math.floor(Math.random() * 100);
    }

    static getRandomValueWithin(limit) {
      //Can also be used as a random number generator within the limit(exclusive) passed
      return Math.floor(Math.random() * limit);
    }

    static getRandomLimitedValueWithin(max) {
      //Generates a number between the set geneCommonMonValue(inclusive) and max(exclusive)
      return Math.floor(Math.random() * (max-this.geneCommonMinValue) + this.geneCommonMinValue);
    }

    static getRandomRangedValue(max, min) {
        //The maximum is exclusive and the minimum is inclusive
        return Math.floor(Math.random() * (max - min) + min);
    }

    


}

module.exports = ProbabilityUtils;