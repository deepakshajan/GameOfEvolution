import { FixedSizeGrid as Grid, areEqual } from 'react-window';
import React, { Fragment, memo, useCallback, useState } from "react";
const { PureComponent } = require("react");

class Canvas extends PureComponent {

    cells =[];
    cell = memo(({ data, columnIndex, rowIndex, style }) => (
        <div style={{...style,backgroundColor: data[rowIndex][columnIndex].cellColor}} className="canvas-cell"></div>
    ),areEqual);
    viewPortSize = this.getViewportSize();


    constructor(props) {
        super(props);
        this.itemsAray = props.refreshData.cellData;
    }

    render() {
        return (
            <Fragment>
                <div className="canvas-container">
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
            </Fragment>
        );
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