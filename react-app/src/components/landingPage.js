import axios from 'axios';
import CanvasDataModelFE from '../model/CanvasDataModelFE';
const { Component } = require("react");
const io = require('socket.io-client');


class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = new CanvasDataModelFE();
  }

  render() {
    return "Recieved message from server -> " + this.state.messageSeq;
  }

  componentDidMount() {
    axios.get('http://localhost:8082/load/dataForLoad').then(res => {
      this.setState(res);
      this.initializeSocketClient();
    }).catch(err => {
      console.log('GOELog: Error loading data for landing page initial load');
    })
  }
  

  initializeSocketClient() {
    const socket = io("http://localhost:8082",  { transports: ['websocket'] });
    socket.connect();
    let self = this;
    socket.on('dataFromServer', function (data) {
      self.syncClientSideDataWithServer(data);
    });
  }

  syncClientSideDataWithServer(data) { 
    let newState = {...this.state};
    newState.messageSeq = data.messageSeq;
    this.setState(newState);
  }

}

export default LandingPage;