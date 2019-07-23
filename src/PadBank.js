import React from 'react';
import DrumPad from './DrumPad.js'
import './App.css';

class PadBank extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        let padBank = this.props.currentPadBank.map((sound,i,bankArr) => {
            return(
                <DrumPad key={bankArr[i].keyCode} soundId={bankArr[i].id} keyTrigger={bankArr[i].keyTrigger} url={bankArr[i].url} />
            )
        })
        
        return(
            <div className="padBank">
                {padBank}
            </div>
        )
    }
}


export default PadBank