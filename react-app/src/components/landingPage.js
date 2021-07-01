import axios from 'axios';
import LandingPageModelFE from '../models/LandingPageModelFE';
import Canvas from './Canvas';
import Stats from './Stats';
const { Component } = require("react");
const io = require('socket.io-client');


class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = new LandingPageModelFE();
  }

  render() {
    return (
      <div className="landing-page-container">
        <Stats messageSeq={this.state.canvasRefreshData.messageSeq} />
        <Canvas refreshData={this.state.canvasRefreshData} canvasUI={this.state.canvasUI} canvasData={this.state.canvasData} />
      </div>
    );
  }

  componentDidMount() {
    axios.get ('http://localhost:8082/load/dataForLoad').then(res => {
      this.setState(res.data);
    }).catch(err => {
      console.log('GOELog: Error loading data for landing page initial load');
    })
    this.initializeSocketClient();
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

  syncClientSideDataWithServer(data) {
    let newState = { ...this.state };
    newState.canvasRefreshData = data;
    this.setState(newState);
  }

}

export default LandingPage;