import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';

const firstTootip = (
  <Tooltip message='tooltip message' color='hotpink'>
    ipsum
  </Tooltip>
);

const secondTooltip = (
  <Tooltip message='another tooltip message' color='#126BCC'>
    officiis
  </Tooltip>
);

function App() {
  return (
    <main className="App">
      <Split className="left" flexBasis={2}>
      This is the content for the left Split. Lorem {firstTootip} dolor sit amet consectetur, {secondTooltip} adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
        {/* make another tooltip directly inside the App */}
        <Tooltip message='one more tooltip message'>
          Necessitatibus
        </Tooltip>
      </Split>
      <Split className="right">
        This is the content for the right `Split`.
      </Split>
    </main>
  );
}

export default App;
