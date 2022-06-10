class GoeConfig {
    
    socketPingIntervalMs = 500;
    
    noCellsHorizontal = 100;
    noCellsVertical = 50;
    cellSizePx = 12;
    cellColorDefault = "white";
    
    probInitialLife = 1/100000;
    probEvolution = 1 / 10000;
    tempMaxAliveCount = 1;
    minEvolutionDelta = 1;
    maxEvolutionDelta = 5;

    geneCommonMinValue = 1;
    geneLifeSpanMaxValue = 50;
    geneMovementMaxValue = 6;
    geneReproductivityMaxValue = 50;
    genefitnessStartMaxValue = this.geneCommonMinValue+1;

    canRunSimulation = false;
    canPingClient = false;


    get canPingClient() {
        return this.canPingClient;
    }
    set canPingClient(value) {
     this.canPingClient = value;
    }
    get socketPingIntervalMs() {
        return this.socketPingIntervalMs;
    }
    set socketPingIntervalMs(value) {
     this.socketPingIntervalMs = value;
    }
    get simulationStepIntervalMs() {
        return this.simulationStepIntervalMs;
    }
    set simulationStepIntervalMs(value) {
     this.simulationStepIntervalMs = value;
    }
    get noCellsHorizontal() {
        return this.noCellsHorizontal;
    }
    set noCellsHorizontal(value) {
     this.noCellsHorizontal = value;
    }
    get noCellsVertical() {
        return this.noCellsVertical;
    }
    set noCellsVertical(value) {
     this.noCellsVertical = value;
    }
    get cellSizePx() {
        return this.cellSizePx;
    }
    set cellSizePx(value) {
     this.cellSizePx = value;
    }
    get cellColorDefault() {
        return this.cellColorDefault;
    }
    set cellColorDefault(value) {
     this.cellColorDefault = value;
    }
    get probInitialLife() {
        return this.probInitialLife;
    }
    set probInitialLife(value) {
     this.probInitialLife = value;
    }
    get probInitialLife() {
        return this.probInitialLife;
    }
    set probInitialLife(value) {
     this.probInitialLife = value;
    }
    get canRunSimulation() {
        return this.canRunSimulation;
    }
    set canRunSimulation(value) {
     this.canRunSimulation = value;
    }
    get minEvolutionDelta() {
        return this.minEvolutionDelta;
    }
    set minEvolutionDelta(value) {
        this.minEvolutionDelta = value;
    }
    get maxEvolutionDelta() {
        return this.maxEvolutionDelta;
    }
    set maxEvolutionDelta(value) {
        this.maxEvolutionDelta = value;
    }
    get geneCommonMinValue() {
        return this.geneCommonMinValue;
    }
    set geneCommonMinValue(value) {
        this.geneCommonMinValue = value;
    }
    get geneLifeSpanMaxValue() {
        return this.geneLifeSpanMaxValue;
    }
    set geneLifeSpanMaxValue(value) {
        this.geneLifeSpanMaxValue = value;
    }
    get geneReproductivityMaxValue() {
        return this.geneReproductivityMaxValue;
    }
    set geneReproductivityMaxValue(value) {
        this.geneReproductivityMaxValue = value;
    }
    get geneMovementMaxValue() {
        return this.geneMovementMaxValue;
    }
    set geneMovementMaxValue(value) {
        this.geneMovementMaxValue = value;
    }
    get genefitnessStartMaxValue() {
        return this.genefitnessStartMaxValue;
    }
    set genefitnessStartMaxValue(value) {
        this.genefitnessStartMaxValue = value;
    }
    get probEvolution() {
        return this.probEvolution;
    }
    set probEvolution(value) {
        this.probEvolution = value;
    }


}

module.exports = GoeConfig;

    