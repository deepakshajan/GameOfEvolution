class GoeConfig {

    
    socketPingIntervalMs = 500;
    
    noCellsHorizontal = 100;
    noCellsVertical = 55;
    cellSizePx = 15;
    cellColorDefault = "white";
    
    probInitialLife = 1/10_000;
    tempMaxAliveCount = 1;

    geneLifeSpanMaxValue = 75;
    geneMovementMaxValue = 75;
    geneReproductivityMaxValue = 75;

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

}

module.exports = GoeConfig;

    