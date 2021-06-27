import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import landingPage from './components/landingPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={landingPage} />
        </div>
      </Router>
    );
  }
}

export default App;