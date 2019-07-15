import React from 'react';
import logo from './logo.png';
import './App.css';
import TextInput from './TextInput.js';
import NamePicker from './NamePicker.js';
import firebase from 'firebase';
import Camera from'react-snap-pic';



class App extends React.Component {

  state={
    messages: [],
    name: "",
    editName: false,
    showCamera: false
  }

  componentWillMount(){
    var name = localStorage.getItem('name')
    if(name){
      this.setState({name})
    }

    /* <=========================> */
    firebase.initializeApp({
      apiKey: "AIzaSyAvULy-VFyDBOEbxnq5HeRsOU2bUAUiWi0",
      authDomain: "hcde438project.firebaseapp.com",
      databaseURL: "https://hcde438project.firebaseio.com",
      projectId: "hcde438project",
      storageBucket: "hcde438project.appspot.com",
      messagingSenderId: "425594893380",
      appId: "1:425594893380:web:29a6fe602b5005a9"
    });
    
    this.db = firebase.firestore();

    this.db.collection("messages").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          //console.log(change.doc.data())
          this.receive(change.doc.data())
        }
      })
    })
    /* <=========================> */
  }

  receive = (m) => {
    const messages = [m, ...this.state.messages]
    messages.sort((a,b)=>b.ts-a.ts)
    this.setState({messages})
  }

  send = (m) => {
    this.db.collection("messages").add({
      ...m,
      from: this.state.name || 'No name',
      ts: Date.now()
    })
  }

  gotMessage = (m) => {
    const message = {
      text: m,
      from: this.state.name
    }
    this.setState({messages: [message, ...this.state.messages]})
  }

  setEditName = (editName) => {
    if(!editName) {
      localStorage.setItem('name', this.state.name)
    }
    this.setState({editName});
  }

  takePicture = (img) => {
    console.log(img)
    this.setState({showCamera:false})
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
          changeName={(n) => this.setState({name: n})} setEditName={this.setEditName}/>
        </header>
        <main className="messages">
          {messages.map((m, i)=>{
            return (
                <Message key={i} m={m} name={this.state.name} ></Message>
          )})}
        </main>
        {this.state.showCamera && 
          <Camera takePicture={this.state.takePicture} />
        }
        <TextInput sendMessage={(text) => this.send({text})} showCamera={() => this.send.showCamera = true}/>
      </div>
    );
  }
}

export default App;

function Message(props) {
  var {m, name} = props;
  return (
    <div className="bubble-wrap" from={(name === m.from) ? 'me': 'you'}>
      <div className="bubble" >
      <span className="bubble-name" >{m.from}</span>
        <span>{m.text}</span>
      </div>
    </div>
  )
}

