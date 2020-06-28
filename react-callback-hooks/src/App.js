import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/** useCallback hooks */}
      <ParentComponent/>
    </div>
  );
}

export default App;
