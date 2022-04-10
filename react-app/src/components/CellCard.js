
const { Component } = require("react");

class CellCard extends Component {


    render() {
        return (
            <div className="cell-card">
                <span className="cell-card-row">Position : [ {this.props.cellData.rowKey} , {this.props.cellData.colKey} ]</span>
                <span className="cell-card-row">Alive : {this.props.cellData.isAlive ? 'Yes': 'No'}</span>
                <span className="cell-card-row">Multicell : {this.props.cellData.isMultiCell ? 'Yes' : 'No'}</span>
                <span className="cell-card-row">Lifespan : {this.props.cellData.geneData.lifeSpan}</span>
                <span className="cell-card-row">Movement : {this.props.cellData.geneData.movement}</span>
                <span className="cell-card-row">Reproductivity : {this.props.cellData.geneData.reproductivity}</span>
            </div>
        );
      }

    
}

export default CellCard;