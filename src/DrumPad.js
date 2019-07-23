import React from 'react';
import './App.css';

class DrumPad extends React.Component {
    constructor(props) {
        super(props)
        this.padRef = React.createRef()
        this.playSound = this.playSound.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)

    }

    componentDidMount() {
        document.addEventListener("keypress", this.handleKeyPress.bind(this))
    }
    
    playSound(e) {
        const sound = this.padRef.current
        sound.currentTime = 0;
        sound.play();
    }

    handleKeyPress(e) {
        if(e.key.toUpperCase() === this.props.keyTrigger) {
            this.playSound()
            this.props.soundNameToggle(this.props.soundId)
        }

            
    }

    render() {
        return(
            <div 
                className='drumPad'     
                onClick={this.playSound} 
                onKeyPress={this.handleKeyPress}>
                <audio src={this.props.url} ref={this.padRef}></audio>
                {this.props.keyTrigger}
            </div>
        )
    }
}



export default DrumPad