import React from 'react';
import logo from './logo.png';
import './App.css';
import MessageList from './MessageList';
import TextInput from './TextInput.js';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt ="" />
        <h1> Bolo</h1>
      </header>
      <MessageList />
      <TextInput />
    </div>
  );
}

export default App;
