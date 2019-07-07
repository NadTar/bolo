import React from 'react';
import logo from './logo.png';
import './App.css';
import TextInput from './TextInput.js';
import NamePicker from './NamePicker.js';


class App extends React.Component {

  state={
    messages: [],
    name: "",
    editName: false
  }

  gotMessage = (m) => {
    const message = {
      text: m,
      from: this.state.name
    }
    this.setState({messages: [message, ...this.state.messages]})
  }

  render() {
    var {messages} = this.state
     
    return (
      <div className="App">
        <header>
          <div>
            <img src={logo} alt="" />
            <h1> Bolo</h1>
          </div>
          <NamePicker name={this.state.name} editName={this.state.editName} 
          changeName={(n) => this.setState({name: n})} setEditName={(m) => this.setState({editName: m})}/>
        </header>
        <main className="messages">
          {messages.map((m, i)=>{
            return (
                <div key={i} className="bubble-wrap" style={(this.state.name !== m.from) ? {justifyContent: 'flex-end', marginRight: 10}: {}}>
                  <div className="bubble" style={(this.state.name !== m.from) ? {background: '#cad7fe', color: 'white'}: {}}>
                  <span className="bubble-name" style={(this.state.name !== m.from) ? {color: 'white'}: {}} >{m.from}</span>
                    <span>{m.text}</span>
                  </div>
                </div>
          )})}
        </main>
        <TextInput sendMessage={this.gotMessage} />
      </div>
    );
  }
}

export default App;
