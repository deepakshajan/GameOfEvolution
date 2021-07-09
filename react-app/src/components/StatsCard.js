const { Component } = require("react");

class StatsCard extends Component {

    render() {
        return (
            <div className="stats-popup">Total alive : {this.props.totalAliveCount}</div>
        );
      }
}

export default StatsCard;