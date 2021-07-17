class GoeConfig {

    
    socketPingIntervalMs = 1000;
    
    noCellsHorizontal = 100;
    noCellsVertical = 100;
    cellSizePx = 15;
    cellColorDefault = "white";
    
    probInitialLife = 1/50;
    tempMaxAliveCount = -1;

    geneLifeSpanMaxValue = 70;

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


}

module.exports = GoeConfig;

    