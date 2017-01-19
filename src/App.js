import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GamesPage from './GamesPage';
import { Link, Match } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Link to="games">Games</Link>
        </p>

        <Match pattern="/games" component={GamesPage} />
      </div>
    );
  }
}

export default App;
