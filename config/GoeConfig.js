class GoeConfig {

    
    _socketPingIntervalMs = 1000;
    _simulationStepIntervalMs = 50;
    
    _noCellsHorizontal = 100;
    _noCellsVertical = 100;
    _cellSizePx = 15;
    _cellColorDefault = "white";
    
    _probInitialLife = 1/1_000;

    _geneLifeSpanMaxValue = 30;

    _canRunSimulation = false;
    _canPingClient = false;

    _config;

    constructor() {
        if(!GoeConfig.instance) {
            GoeConfig.instance = this;
        }
        return GoeConfig.instance;
    }

    getConfig() {
        return GoeConfig.instance._config;
    }
    
    setConfig(config) {
        GoeConfig.instance._config = config;
    }

    get canPingClient() {
        return GoeConfig.instance._canPingClient;
    }
    set canPingClient(value) {
     GoeConfig.instance._canPingClient = value;
    }
    get socketPingIntervalMs() {
        return GoeConfig.instance._socketPingIntervalMs;
    }
    set socketPingIntervalMs(value) {
     GoeConfig.instance._socketPingIntervalMs = value;
    }
    get simulationStepIntervalMs() {
        return GoeConfig.instance._simulationStepIntervalMs;
    }
    set simulationStepIntervalMs(value) {
     GoeConfig.instance._simulationStepIntervalMs = value;
    }
    get noCellsHorizontal() {
        return GoeConfig.instance._noCellsHorizontal;
    }
    set noCellsHorizontal(value) {
     GoeConfig.instance._noCellsHorizontal = value;
    }
    get noCellsVertical() {
        return GoeConfig.instance._noCellsVertical;
    }
    set noCellsVertical(value) {
     GoeConfig.instance._noCellsVertical = value;
    }
    get cellSizePx() {
        return GoeConfig.instance._cellSizePx;
    }
    set cellSizePx(value) {
     GoeConfig.instance._cellSizePx = value;
    }
    get cellColorDefault() {
        return GoeConfig.instance._cellColorDefault;
    }
    set cellColorDefault(value) {
     GoeConfig.instance._cellColorDefault = value;
    }
    get probInitialLife() {
        return GoeConfig.instance._probInitialLife;
    }
    set probInitialLife(value) {
     GoeConfig.instance._probInitialLife = value;
    }
    get probInitialLife() {
        return GoeConfig.instance._probInitialLife;
    }
    set probInitialLife(value) {
     GoeConfig.instance._probInitialLife = value;
    }
    get canRunSimulation() {
        return GoeConfig.instance._canRunSimulation;
    }
    set canRunSimulation(value) {
     GoeConfig.instance._canRunSimulation = value;
    }
    get geneLifeSpanMaxValue() {
        return this._geneLifeSpanMaxValue;
    }
    set geneLifeSpanMaxValue(value) {
        this._geneLifeSpanMaxValue = value;
    }


}

module.exports = new GoeConfig();

    