import React from 'react';
import Split from './composition/Split';
import './App.css';

function App() {
  return (
    <main className="App">
      <Split className="left" flexBasis={2}>
        This is the content for the left `Split`.
      </Split>
      <Split className="right">
        This is the content for the right `Split`.
      </Split>
    </main>
  );
}

export default App;
