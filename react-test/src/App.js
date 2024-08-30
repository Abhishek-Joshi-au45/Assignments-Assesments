// src/App.js
import React from 'react';
import Tabs from './Components/Tabs';
import PresentationTab from './Components/PresentationTab';
import QATab from './Components/QATab';
import ExecutivesTab from './Components/ExecutivesTab';
import AnalystsTab from './Components/AnalystsTab';

import './App.css';

function App() {
  return (
    <div className="App">
      <Tabs />
    </div>
  );
}

export default App;
