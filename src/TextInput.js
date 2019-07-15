import React from 'react';
import { FiSend } from 'react-icons/fi';
import { FiCamera } from 'react-icons/fi';

class TextInput extends React.Component {

    state={
        text:"Write your message here...",
        messages:[]
    }

    send = () => {
        this.props.sendMessage(this.state.text)
        this.setState({text:""})
    }

    keyPress = (e) => {
        if (e.key==='Enter') {
            this.send()
        }
    }

    render() {
        return (
        <div className ="text-input">
            <button className="camera" onClick={this.showCamera}>
                <FiCamera style={{height:15, width:15, color:0}} />
            </button>
            <input value={this.state.text} 
                onChange={e=> this.setState({text: e.target.value})}
                onKeyPress={this.keyPress}
            />
            <button disabled={!this.state.text}
                onClick={this.send}>
                <FiSend style={{height:15, width:15, color:0}} />
            </button>
        </div>
        );
    }
}

export default TextInput;