import React, { Component } from 'react'
import Header from './Header/Header.js'
import Stats from './Stats/Stats.js'
import Hero from './Hero/Hero.js'

// user stats component
// map component?
// user  (Hero)
// enemy

class Root extends Component {
  render() {
    return (
      <div className="App">
		  <Header />
		  <Stats />
		  <Hero />
      </div>
    );
  }
}

export default Root;
