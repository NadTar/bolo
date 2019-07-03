import React from 'react';
import logo from './logo.png';
import './App.css';
import MessageList from './MessageList';
import TextInput from './TextInput.js';

class App extends React.Component {

  state={
    messages: []
  }

  sendMessage = (m) => {
    this.setState({messages: [...this.state.messages, m] })
    console.log(this.state.messages)
  }

  render() {
    var {messages} = this.state
     
    return (
      <div className="App">
        <header>
          <img src={logo} alt="" />
          <h1> Bolo</h1>
        </header>
        <main className="messages">
          {messages.map((m, i)=>{
            return (
              <div key={i} className="bubble-wrap">
                <div className="bubble">
                  <span>{m}</span>
                </div>
              </div>
          )})}
        </main>
        <TextInput sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default App;
