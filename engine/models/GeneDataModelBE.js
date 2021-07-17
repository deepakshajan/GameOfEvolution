class GeneDataModelBE {

    lifeSpan = 0;
    movement = 0;
    reproductivity = 0;

    clone() {
        let clone = new GeneDataModelBE();
        clone.lifeSpan = this.lifeSpan;
        clone.movement = this.movement;
        clone.reproductivity = this.reproductivity;
        return clone;
    }

}

module.exports = GeneDataModelBE;