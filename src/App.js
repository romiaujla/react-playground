import React, { Component } from 'react';
import './App.css';
import Counter from './state/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
      
    );
  }
}

export default App;