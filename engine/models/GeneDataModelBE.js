const GeneUtils = require("../main/util/GeneUtils");
const ProbabilityUtils = require("../main/util/ProbabilityUtils");

class GeneDataModelBE {

    lifeSpan = 0;
    movement = 0;
    reproductivity = 0;
    fitness = 0;

    static clone(_self) {
        let clone = new GeneDataModelBE();
        clone.lifeSpan = _self.lifeSpan;
        clone.movement = _self.movement;
        clone.reproductivity = _self.reproductivity;
        clone.fitness = _self.fitness;
        return clone;
    }

    static cloneWithEvolution(_self) {
        let clone = GeneDataModelBE.clone(_self);
        const attributeToEvolve = ProbabilityUtils.getRandomValueWithin(4);

        if(attributeToEvolve == 0) {
            clone.lifeSpan = GeneUtils.getEvolvedLifespanValue(_self.lifeSpan);
        } else if(attributeToEvolve == 1) {
            clone.movement = GeneUtils.getEvolvedMovementValue(_self.movement);
        } else if(attributeToEvolve == 2) {
            clone.reproductivity = GeneUtils.getEvolvedReproductivityValue(_self.reproductivity);
        } else if(attributeToEvolve == 3) {
            clone.fitness = GeneUtils.getEvolvedFitnessValue(_self.fitness);
        }

        return clone;
    }

}

module.exports = GeneDataModelBE;