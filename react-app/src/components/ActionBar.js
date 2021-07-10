import axios from 'axios';
import StatsDataModelFE from '../models/StatsDataModelFE';
import StatsCard from './StatsCard';
const { Component } = require("react");


class ActionBar extends Component {

    constructor(props) {
        super(props);
        this.state = {startDisplayed: true, resumeDisplayed: false, statsCardDisplayed: false, statsData: new StatsDataModelFE()};
    }

    render() {
        return (
            <div className="action-bar">
                <span className="action-bar-stepCount">Step # {this.props.step}</span>
                <button onMouseEnter={this.showStatspopup.bind(this)} onMouseLeave={this.hideStatsPopup.bind(this)} className="action-button-stats">Stats</button>
                {this.state.statsCardDisplayed ? <StatsCard totalAliveCount={this.props.statsData.totalAliveCount} totalDeadCount={this.props.statsData.totalDeadCount}
                    currentAliveCount={this.props.statsData.currentAliveCount} evolutionCycleCount={this.props.statsData.evolutionCycleCount} ></StatsCard> : null}
                <div className="action-bar-buttonsDiv">
                    {this.state.startDisplayed ? <button onClick={this.startSimulation.bind(this)} className="action-button action-button-start">Start</button> : null}
                    {!this.state.startDisplayed && !this.state.resumeDisplayed ? <button onClick={this.pauseSimulation.bind(this)} className="action-button action-button-pauseResume">Pause</button> : null}
                    {!this.state.startDisplayed && this.state.resumeDisplayed ? <button onClick={this.resumeSimulation.bind(this)} className="action-button action-button-pauseResume">Resume</button> : null}
                    {!this.state.startDisplayed ? <button onClick={this.stopSimulation.bind(this)} className="action-button action-button-stop">Stop</button> : null}
                </div>
            </div>
        );

    }

    startSimulation() {
        axios.get ('http://localhost:8082/start');
        let newState = {...this.state};
        newState.startDisplayed = false;
        this.setState(newState);
    }

    stopSimulation() {
        axios.get ('http://localhost:8082/stop');
        let newState = {...this.state};
        newState.startDisplayed = true;
        this.setState(newState);
    }

    pauseSimulation() {
        axios.get ('http://localhost:8082/pause');
        let newState = {...this.state};
        newState.resumeDisplayed = true;
        this.setState(newState);
    }

    resumeSimulation() {
        axios.get ('http://localhost:8082/resume');
        let newState = {...this.state};
        newState.resumeDisplayed = false;
        this.setState(newState);
    }

    showStatspopup() {
        let newState = { ...this.state };
        newState.statsCardDisplayed = true;
        this.setState(newState);
    }


    hideStatsPopup() {
        let newState = {...this.state};
        newState.statsCardDisplayed = false;
        this.setState(newState);
    }
    

}

export default ActionBar;