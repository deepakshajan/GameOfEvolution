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
        const randomValue = Math.floor(Math.random() * 7);
        const nextDirection = this.directionMap.get(randomValue);
        if(nextDirection === this.movementDirection.NORTH) {
            return [fullCell.rowKey-1, fullCell.colKey];
        } else if(nextDirection === this.movementDirection.NORTHEAST) {
            return [fullCell.rowKey-1, fullCell.colKey+1];
        } else if(nextDirection === this.movementDirection.EAST) {
            return [fullCell.rowKey, fullCell.colKey+1];
        } else if(nextDirection === this.movementDirection.SOUTHEAST) {
            return [fullCell.rowKey+1, fullCell.colKey+1];
        } else if(nextDirection === this.movementDirection.SOUTH) {
            return [fullCell.rowKey+1, fullCell.colKey];
        } else if(nextDirection === this.movementDirection.SOUTHWEST) {
            return [fullCell.rowKey+1, fullCell.colKey-1];
        } else if(nextDirection === this.movementDirection.WEST) {
            return [fullCell.rowKey, fullCell.colKey-1];
        } else if(nextDirection === this.movementDirection.NORTHWEST) {
            return [fullCell.rowKey-1, fullCell.colKey-1];
        }
    }

    static moveCell(data, fullCell, refreshCell, newPosition) {
        const newFullCell = data.canvasData.fullCellData[newPosition[0]][newPosition[1]];
        const newRefreshCell = data.canvasRefreshData.cellData[newPosition[0]][newPosition[1]];

        newRefreshCell.cellColor = refreshCell.cellColor;
        newFullCell.isAlive = true;
        newFullCell.geneData = fullCell.geneData;
        newFullCell.step = fullCell.step+1; 

        fullCell.reset();
        refreshCell.reset();
    }
}

MovementUtils.createDirectionMap();
module.exports = MovementUtils;