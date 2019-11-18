import React from 'react';

export default class YouTubeDebugger extends React.Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    changeBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12,
            }
        })
    }

    // In order to dive deeper into an object, use multiple spread operators. 
    changeRes = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: "720p"
                }
            }
        })            
        console.log(this.state.settings)
    }
    
    // // This version only merges the state of resolution
    // changeRes = () => {
    //     this.setState({
    //         settings: Object.assign({}, this.state.settings.video, {
    //             resolution: "720"
    //         })            
    //     })
    //     console.log(this.state.settings)
    // }

    render() {
        return (
            <React.Fragment>
                <button className="bitrate" onClick={this.changeBitrate}>Bitrate</button>
                <button className="resolution" onClick={this.changeRes}>Res</button>
            </React.Fragment>
        )
    }
}