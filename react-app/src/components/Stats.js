const { Component } = require("react");


class Stats extends Component {

    render() {
        return (
            <div className="stats-section">
                <span className="stats-section-info">Step # {this.props.step}</span>
            </div>
        );

    }

}

export default Stats;