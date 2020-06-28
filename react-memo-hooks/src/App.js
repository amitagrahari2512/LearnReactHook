import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">

      {/** Use Memo Hook */}
      <Counter/>
      
    </div>
  );
}

export default App;
