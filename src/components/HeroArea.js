import React, { Component } from 'react'

class HeroArea extends Component {
    render() {
        return (
            <div className=" jumbotron-fluid" >
                <video style={{
                    width: '100%'
                }} playsInline="playsInline" autoPlay="autoPlay" muted="muted" loop="loop">
                    <source src="../../video/headervideo.mp4" type="video/mp4" />
                </video>
            </div>
        )
    }
}

export default HeroArea
