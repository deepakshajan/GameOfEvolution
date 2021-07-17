
class MultiCellCompute {
    
    static compute(data, fullCell, refreshCell) {
        if(SimulationUtils.getBooleanFromInverseProbablity(fullCell.geneData.lifeSpan)) {
            this.die(data, fullCell, refreshCell);
        } 
        return data;
    }

    static die(data, fullCell, refreshCell) {
        fullCell.isAlive = false;
        data.canvasRefreshData.statsData.currentAliveCount--;
        data.canvasRefreshData.statsData.totalDeadCount++;
        refreshCell.cellColor = GoeConfig.cellColorDefault;
    }
}

module.exports = MultiCellCompute;