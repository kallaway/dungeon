import React, { Component } from 'react';
import Hero from './Hero/'
// import './App.css';

// user stats component
// map component?
// user  (Hero)
// enemy

class Root extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>React Roguelike</h2>
        </div>
        <p className="App-intro">
          The game will be here.
        </p>
		<Hero />
      </div>
    );
  }
}

export default Root;
