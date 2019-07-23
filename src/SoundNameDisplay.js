import React from 'react';
import './App.css';

class SoundNameDisplay extends React.Component {
    constructor() {
        super()

    }

    render() {
        return(
            <div className="soundNameDisplay">
                <p>{this.props.currentPadBankId}</p>
            </div>
        )
    }
}

export default SoundNameDisplay