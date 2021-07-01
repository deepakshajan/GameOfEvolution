const { Component } = require("react");

class Cell extends Component {

    render() {
        return (
            <div style={this.props.cellStyle} className={this.props.className}>
            </div>
        );
    }

}

export default Cell;