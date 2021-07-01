import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landingPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/'>
            <LandingPage/>
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;