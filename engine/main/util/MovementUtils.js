const ConfigCache = require("../../../config/ConfigCache");
const ModelUtils = require("./ModelUtils");

class MovementUtils {

    static movementDirection = Object.freeze({
        NORTH: 0,
        NORTHEAST: 1,
        EAST: 2,
        SOUTHEAST: 3,
        SOUTH: 4,
        SOUTHWEST: 5,
        WEST: 6,
        NORTHWEST: 7
    });
    static directionMap = new Map();

    static createDirectionMap() {
        this.directionMap.set(this.movementDirection.NORTH,this.movementDirection.NORTH);
        this.directionMap.set(this.movementDirection.NORTHEAST,this.movementDirection.NORTHEAST);
        this.directionMap.set(this.movementDirection.EAST,this.movementDirection.EAST);
        this.directionMap.set(this.movementDirection.SOUTHEAST,this.movementDirection.SOUTHEAST);
        this.directionMap.set(this.movementDirection.SOUTH,this.movementDirection.SOUTH);
        this.directionMap.set(this.movementDirection.SOUTHWEST,this.movementDirection.SOUTHWEST);
        this.directionMap.set(this.movementDirection.WEST,this.movementDirection.WEST);
        this.directionMap.set(this.movementDirection.NORTHWEST,this.movementDirection.NORTHWEST);
    }

    static computeNextPosition(fullCell) {
        let returnValue;
        do {
            const nextDirection = this.directionMap.get(Math.floor(Math.random() * 7));
            if(nextDirection === this.movementDirection.NORTH) {
                returnValue = [fullCell.rowKey-1, fullCell.colKey];
            } else if(nextDirection === this.movementDirection.NORTHEAST) {
                returnValue =  [fullCell.rowKey-1, fullCell.colKey+1];
            } else if(nextDirection === this.movementDirection.EAST) {
                returnValue =  [fullCell.rowKey, fullCell.colKey+1];
            } else if(nextDirection === this.movementDirection.SOUTHEAST) {
                returnValue =  [fullCell.rowKey+1, fullCell.colKey+1];
            } else if(nextDirection === this.movementDirection.SOUTH) {
                returnValue =  [fullCell.rowKey+1, fullCell.colKey];
            } else if(nextDirection === this.movementDirection.SOUTHWEST) {
                returnValue =  [fullCell.rowKey+1, fullCell.colKey-1];
            } else if(nextDirection === this.movementDirection.WEST) {
                returnValue =  [fullCell.rowKey, fullCell.colKey-1];
            } else if(nextDirection === this.movementDirection.NORTHWEST) {
                returnValue =  [fullCell.rowKey-1, fullCell.colKey-1];
            }
        } while(!this.isPositionInRange(returnValue));
        
        return returnValue;
    }

    static moveCell(data, fullCell, refreshCell, newPosition) {
        const newFullCell = data.canvasData.fullCellData[newPosition[0]][newPosition[1]];
        const newRefreshCell = data.canvasRefreshData.cellData[newPosition[0]][newPosition[1]];

        newRefreshCell.cellColor = refreshCell.cellColor;
        newFullCell.isAlive = true;
        newFullCell.geneData = fullCell.geneData;
        newFullCell.step = fullCell.step+1; 

        ModelUtils.resetFullCellData(fullCell);
        ModelUtils.resetRefreshCellData(refreshCell);
    }

    static isPositionInRange(position) {
        const config = ConfigCache.getConfig();
        return position[0]>=0 && position[0]<config.noCellsVertical && position[1]>=0 && position[1]<config.noCellsHorizontal;
    }
}

MovementUtils.createDirectionMap();
module.exports = MovementUtils;