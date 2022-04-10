const GeneDataModelBE = require("./GeneDataModelBE");

class FullCellDataModelBE {
    
    rowKey;    
    colKey;

    step = 0;
    isAlive = false;
    isMultiCell = false;
    
    geneData = new GeneDataModelBE();

    constructor(rowIndex, colIndex) {
        this.rowKey = rowIndex;
        this.colKey = colIndex;
    }

    clone(_self) {
        let clone = new FullCellDataModelBE();
        clone.rowKey = _self.rowKey;
        clone.colKey = _self.colKey;
        clone.step = _self.step;
        clone.isAlive = _self.isAlive;
        clone.isMultiCell = _self.isMultiCell;
        clone.geneData = _self.geneData.clone();
        return clone;
    }

    get rowKey() {
        return this.rowKey;
    }
    set rowKey(value) {
        this.rowKey = value;
    }
    get colKey() {
        return this.colKey;
    }
    set colKey(value) {
        this.colKey = value;
    }
    get step() {
        return this.step;
    }
    set step(value) {
        this.step = value;
    }
    get isAlive() {
        return this.isAlive;
    }
    set isAlive(value) {
        this.isAlive = value;
    }
    get geneData() {
        return this.geneData;
    }
    set geneData(value) {
        this.geneData = value;
    }
    get isMultiCell() {
        return this.isMultiCell;
    }
    set isMultiCell(value) {
        this.isMultiCell = value;
    }

}

module.exports = FullCellDataModelBE;