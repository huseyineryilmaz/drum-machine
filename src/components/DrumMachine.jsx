import React from "react";

class DrumMachine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
        this.onClick = this.onClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    onClick(event) {
        const audioToPlay = new Audio(event.currentTarget.firstChild.src);
        audioToPlay.play();

        this.setState(
            {
                inputValue: event.currentTarget.textContent
            }
        )
    }

    handleKeyDown(event) {
        const input = event.key.toUpperCase();
        const element = document.getElementById(input);

        if (!element) {
            return;
        }

        const audioToPlay = new Audio(element.src);
        audioToPlay.play();

        this.setState(
            {
                inputValue: input
            }
        )
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
    }

    render() {
        return (
            <div id="drum-machine" className="inner-container" onKeyDown={this.handleKeyDown}>

                <div id="display">
                    <input type="text" id="inputValue" value={this.state.inputValue}/>
                </div>
                <div className="pad-bank">
                    <div className="drum-pad" id="Heater-1" onClick={this.onClick}>
                        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio>
                        Q
                    </div>
                    <div className="drum-pad" id="Heater-2" onClick={this.onClick}>
                        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio>
                        W
                    </div>
                    <div className="drum-pad" id="Heater-3" onClick={this.onClick}>
                        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio>
                        E
                    </div>

                    <div className="drum-pad" id="Heater-4" onClick={this.onClick}>
                        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"></audio>
                        A
                    </div>
                    <div className="drum-pad" id="Clap" onClick={this.onClick}>
                        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"></audio>
                        S
                    </div>
                    <div className="drum-pad" id="Open-HH" onClick={this.onClick}>
                        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio>
                        D
                    </div>

                    <div className="drum-pad" id="Kick-n'-Hat" onClick={this.onClick}>
                        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"></audio>
                        Z
                    </div>
                    <div className="drum-pad" id="Kick" onClick={this.onClick}>
                        <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio>
                        X
                    </div>
                    <div className="drum-pad" id="Closed-HH" onClick={this.onClick}>
                        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"></audio>
                        C
                    </div>
                </div>
            </div>
        );
    }
}

export default DrumMachine;