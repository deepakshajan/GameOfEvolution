const ConfigCache = require("../../../config/ConfigCache");
const ProbabilityUtils = require("./ProbabilityUtils");

class GeneUtils {

    static geneCommonMinValue = ConfigCache.getConfig().geneCommonMinValue;
    static maxLifespanValue = ConfigCache.getConfig().geneLifeSpanMaxValue;
    static maxMovementValue = ConfigCache.getConfig().geneMovementMaxValue;
    static maxReproductivityValue = ConfigCache.getConfig().geneReproductivityMaxValue;
    static minInclusiveDelta = ConfigCache.getConfig().minEvolutionDelta;
    static maxInclusiveDelta = ConfigCache.getConfig().maxEvolutionDelta+1;

    static getEvolvedLifespanValue(lifespan) {
        let delta = this.getApplicableDeltaValue();
        let newLifespan = lifespan + delta;
        while(newLifespan < this.geneCommonMinValue || newLifespan >= this.maxLifespanValue) {
            delta = this.getApplicableDeltaValue();
            newLifespan = newLifespan = lifespan + delta;
        }
        return newLifespan;
    }

    static getEvolvedMovementValue(movement) {
        let delta = this.getApplicableDeltaValue();
        let newMovement = movement + delta;
        while(newMovement < this.geneCommonMinValue || newMovement >= this.maxMovementValue) {
            delta = this.getApplicableDeltaValue();
            newMovement = movement + delta;
        }
        return newMovement;
    }

    static getEvolvedReproductivityValue(reproductivity) {
        let delta = this.getApplicableDeltaValue();
        let newReproductivity = reproductivity + delta;
        while(newReproductivity < this.geneCommonMinValue || newReproductivity >= this.maxReproductivityValue) {
            delta = this.getApplicableDeltaValue();
            newReproductivity = reproductivity + delta;
        }
        return newReproductivity;
    }

    static getEvolvedFitnessValue(fitness) {
        let delta = this.getApplicableDeltaValue();
        let newFitness = fitness + delta;
        while(newFitness < this.geneCommonMinValue) {
            delta = this.getApplicableDeltaValue();
            newFitness = fitness + delta;
        }
        return newFitness;
    }

    static getApplicableDeltaValue() {
        const isAddition = ProbabilityUtils.getRandomValueWithin(2) == 0 ? true : false;
        const delta = ProbabilityUtils.getRandomRangedValue(this.maxInclusiveDelta, this.minInclusiveDelta);
        return isAddition ? delta : (delta*-1);
    }

}

module.exports = GeneUtils;