import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor() {
        super()
        this.state = {
            // hasBeenClicked: false,
            timesClicked: 0
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                // hasBeenClicked: true,
                timesClicked: previousState.timesClicked + 1
            }
        })
        // console.log(this.state.timesClicked)
        // console.log(this.state.hasBeenClicked)
        if (this.state.hasBeenClicked === true) {
            const label = document.getElementsByTagName("label");
            label[0].innerText = "Clicked"
        }
    }

    render() {
        return (
            <React.Fragment>
                
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </React.Fragment>
        )
    }
}