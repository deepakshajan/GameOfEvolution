import { FixedSizeGrid as Grid, areEqual } from 'react-window';
import React, { Fragment, memo } from "react";
import CellCard from './CellCard';
import axios from 'axios';
const { PureComponent } = require("react");

class Canvas extends PureComponent {

    cells =[];
    cell = memo(({ data, columnIndex, rowIndex, style }) => (
        <div style={{...style,backgroundColor: data[rowIndex][columnIndex].cellColor}} className="canvas-cell" onClick={this.handleCellClick.bind(this, rowIndex, columnIndex)}></div>
    ),areEqual);
    viewPortSize = this.getViewportSize();


    constructor(props) {
        super(props);
        this.itemsAray = props.refreshData.cellData;
        this.state = {cellCardDisplayed: false, cellData: {}};

        this.handleCellClick = this.handleCellClick.bind(this);
        this.closeCellCard = this.closeCellCard.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div className="canvas-container" onClick={this.closeCellCard}>
                    <div className="canvas-inner-container">
                        <Grid
                            itemData = {this.props.refreshData.cellData}
                            columnCount={this.props.canvasUI.noCellsHorizontal}
                            columnWidth={this.props.canvasUI.cellSizePx}
                            rowCount={this.props.canvasUI.noCellsVertical}
                            rowHeight={this.props.canvasUI.cellSizePx}
                            height={this.viewPortSize.height-30}
                            width={this.viewPortSize.width-5}>
                            {this.cell}
                        </Grid>
                    </div>
                </div>
                {this.state.cellCardDisplayed ? <CellCard cellData={this.state.cellData}></CellCard> : null}
            </Fragment>
            
        );
    }

    handleCellClick(rowIndex, columnIndex) {
        if(!this.state.cellCardDisplayed) {
            this.fetchCellDataFromServer(rowIndex, columnIndex);
        } else {
            this.closeCellCard();
        }
    }

    closeCellCard() {
        let newState = {...this.state};
        if(this.state.cellCardDisplayed) {
            newState.cellCardDisplayed = false;
        }
        this.setState(newState);
    }

    fetchCellDataFromServer(rowIndex, columnIndex) {
        axios.get ('http://localhost:8082/cellData', {params:{rowno: rowIndex, colno:columnIndex}}).then(res => {
            let newState = {...this.state};
            newState.cellCardDisplayed = true;
            newState.cellData = res.data;
            this.setState(newState);
        });
    }

    getViewportSize(){
        var e = window;
        var a = 'inner';
        if (!('innerWidth' in window)){
            a = 'client';
            e = document.documentElement || document.body;
        }
        return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
    }

}

export default Canvas;