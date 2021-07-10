import axios from 'axios';
import LandingPageModelFE from '../models/LandingPageModelFE';
import Canvas from './Canvas';
import ActionBar from './ActionBar';
const { Component } = require("react");
const io = require('socket.io-client');


class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {data:new LandingPageModelFE(),canRender:false};
  }

  render() {
    return (this.state.canRender===true &&
      <div className="landing-page-container">
        <ActionBar step={this.state.data.canvasRefreshData.step} statsData={this.state.data.canvasRefreshData.statsData} />
        <Canvas refreshData={this.state.data.canvasRefreshData} canvasUI={this.state.data.canvasUI} canvasData={this.state.data.canvasData} />
      </div>
    );
  }

  componentDidMount() {
    this.getInitialDataForLoad();
    this.initializeSocketClient();
  }

  getInitialDataForLoad() {
    axios.get ('http://localhost:8082/load/dataForLoad').then(res => {
      let newState = { ...this.state };
      newState.data = res.data;
      newState.canRender = true;
      this.setState(newState);
    }).catch(err => {
      console.log('GOELog: Error loading data for landing page initial load');
    });
  }

  initializeSocketClient() {
    const socket = io("http://localhost:8082", { transports: ['websocket'] });
    socket.connect();
    let self = this;
    socket.on('dataFromServer', function (data) {
      // console.log('GOELog: Data recieved from server: ', data);
      self.syncClientSideDataWithServer(data);
    });
  }

  syncClientSideDataWithServer(refreshDataFromServer) {
    let newState = { ...this.state };
    newState.data.canvasRefreshData = refreshDataFromServer;
    this.setState(newState);
  }

}

export default LandingPage;