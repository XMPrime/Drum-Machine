import React from 'react';
import './App.css';

class DrumPad extends React.Component {
    constructor(props) {
        super(props)
        this.padRef = React.createRef()
        this.playSound = this.playSound.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    playSound(e) {
        const sound = this.padRef.current
        sound.currentTime = 0;
        sound.play();
    }

    handleKeyPress(e) {
        console.log(e.keyCode)
        console.log(this.props.key)
        if(e.key === this.props.keyTrigger) {
            this.playSound()
        }
            
    }

    render() {
        return(
            
            <div onClick={this.playSound} onKeyPress={this.handleKeyPress}>
                <audio src={this.props.url} ref={this.padRef}></audio>
                {this.props.keyTrigger}
            </div>
        )
    }
}



export default DrumPad