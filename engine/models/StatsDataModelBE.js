class StatsDataModelBE {

    totalAliveCount = 0;
    totalDeadCount = 0;
    currentAliveCount = 0;
    evolutionCycleCount = 0;

    clone() {
        let clone = new StatsDataModelBE();
        clone.totalAliveCount = this.totalAliveCount;
        clone.totalDeadCount = this.totalDeadCount;
        clone.currentAliveCount = this.currentAliveCount;
        clone.evolutionCycleCount = this.evolutionCycleCount;
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
}

module.exports = StatsDataModelBE;