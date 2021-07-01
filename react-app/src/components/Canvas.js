const { Component } = require("react");
const { default: Cell } = require("./Cell");

class Canvas extends Component {

    cells =[];

    render() {
        this.cells = this.createCells(); 
        return (
            <div className="canvas-container">
                <div className="canvas-inner-container">
                    {this.cells}
                </div>
            </div>
        );
    }

    createCells() {
        let cellsTemp = [];
        let cellIndex = 0;
        let breakKey = 0;
        const noHorizontal = this.props.canvasUI.noCellsHorizontal;
        const noVertical = this.props.canvasUI.noCellsVertical;
        const cellSize = this.props.canvasUI.cellSizePx;
        const cellData = this.props.refreshData.cellData;
        const noVerticalLastIndex = noVertical-1;
        let cellStyle;
        for(let i=0;i<noHorizontal;i++) {
            for(let j=0;j<noVertical;j++) {
                cellStyle = {
                    minWidth: cellSize,
                    minHeight: cellSize,
                    backgroundColor: cellData[cellIndex].cellColor
                };
                cellsTemp.push(<Cell key={cellData[cellIndex].cellKey} cellStyle={cellStyle}
                    className={"canvas-cell "+cellData[cellIndex].cellKey} />);
                    if(j===noVerticalLastIndex) {
                        cellsTemp.push(<br key={"br_"+breakKey}></br>);
                        breakKey++;
                    }
                    cellIndex++;
            }
        }
        return cellsTemp;
    }

}

export default Canvas;