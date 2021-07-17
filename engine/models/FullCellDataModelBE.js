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

    clone() {
        let clone = new FullCellDataModelBE();
        clone.rowKey = this.rowKey;
        clone.colKey = this.colKey;
        clone.step = this.step;
        clone.isAlive = this.isAlive;
        clone.isMultiCell = this.isMultiCell;
        clone.geneData = this.geneData.clone();
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