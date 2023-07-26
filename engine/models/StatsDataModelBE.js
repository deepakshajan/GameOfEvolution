class StatsDataModelBE {

    totalAliveCount = 0;
    totalDeadCount = 0;
    currentAliveCount = 0;
    evolutionCycleCount = 0;
    speciesAliveCount = 0;

    clone(_self) {
        let clone = new StatsDataModelBE();
        clone.totalAliveCount = _self.totalAliveCount;
        clone.totalDeadCount = _self.totalDeadCount;
        clone.currentAliveCount = _self.currentAliveCount;
        clone.evolutionCycleCount = _self.evolutionCycleCount;
        clone.speciesAliveCount = _self.speciesAliveCount;
        return clone;
    }

    get totalAliveCount() {
        return this.totalAliveCount;
    }
    set totalAliveCount(value) {
        this.totalAliveCount = value;
    }
    get totalDeadCount() {
        return this.totalDeadCount;
    }
    set totalDeadCount(value) {
        this.totalDeadCount = value;
    }
    get currentAliveCount() {
        return this.currentAliveCount;
    }
    set currentAliveCount(value) {
        this.currentAliveCount = value;
    }
    get evolutionCycleCount() {
        return this.evolutionCycleCount;
    }
    set evolutionCycleCount(value) {
        this.evolutionCycleCount = value;
    }
    get speciesAliveCount() {
        return this.speciesAliveCount;
    }
    set speciesAliveCount(value) {
        this.speciesAliveCount = value;
    }
}

module.exports = StatsDataModelBE;