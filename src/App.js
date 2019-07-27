import React, { Component } from 'react';
import './App.css';
import Tabs from './state/Tabs';

const tabsProp = [
  {
    name: 'First tab',
    content: 'First Tab Content'
  },
  {
    name: 'Second tab',
    content: 'Second Tab Content'
  },
  {
    name: 'Third tab',
    content: 'Third Tab Content'
  },
];

class App extends Component {

  render() {
    return (
      <div className="App">
        <Tabs tabs={tabsProp} />
      </div>

    );
  }
}

export default App;