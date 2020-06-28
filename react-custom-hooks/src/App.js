import React from 'react';
import logo from './logo.svg';
import './App.css';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      {/** Custom Hook - useDocumentTitle */}
      {/* <DocTitleOne/> */}
      {/* <DocTitleTwo/> */}

      {/** Custom Hook -  useCounter */}
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}

      {/** Custom Hook -  useInput */}
      <UserForm/>

    </div>
  );
}

export default App;