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

}

module.exports = GeneDataModelBE;