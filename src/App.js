import React from 'react';
import logo from './logo.png';
import './App.css';
import TextInput from './TextInput.js';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt ="" />
        <h1> Bolo</h1>
      </header>
      <TextInput />
    </div>
  );
}

export default App;
