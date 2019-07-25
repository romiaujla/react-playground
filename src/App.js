import React, { Component } from 'react';
import './App.css';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <Bomb boomTiming={8} className='tick-tock'/>
      </div>
      
    );
  }
}

export default App;