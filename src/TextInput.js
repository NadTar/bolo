import React from 'react';
import arrow from './arrow.png';

class TextInput extends React.Component {
    render() {
        return (
        <div className ="text-input">
            <input />
            <button>
                <img src={arrow} alt="" />
            </button>
        </div>
        );
    }
}

export default TextInput;