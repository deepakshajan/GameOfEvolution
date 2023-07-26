const { Component } = require("react");

class StatsCard extends Component {

    render() {
        return (
            <div className="stats-popup">
                <span className="stats-popup-row">Evolution Cycle : {this.props.evolutionCycleCount}</span>
                <span className="stats-popup-row">Total alive : {this.props.totalAliveCount}</span>
                <span className="stats-popup-row">Total dead : {this.props.totalDeadCount}</span>
                <span className="stats-popup-row">Species count : {this.props.speciesAliveCount}</span>
                <span className="stats-popup-row">Now alive : {this.props.currentAliveCount}</span> 
            </div>
        );
      }
}

export default StatsCard;