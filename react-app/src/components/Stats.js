const { Component } = require("react");


class Stats extends Component {

    render() {
        return (
            <div className="stats-section">
                <span className="stats-section-info">Cycle # {this.props.messageSeq}</span>
            </div>
        );

    }

}

export default Stats;