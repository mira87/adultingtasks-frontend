import React, { Component } from 'react'
import { Link, Router } from 'react-router-dom'

export class IndividualTask extends Component {
    alert = (e) => {
        console.log(this.props.task.title)
    }
    render() {

        return (
            <div>
                <p onClick={this.alert}>{this.props.task.title}</p>
            </div >
        )
    }
}

export default IndividualTask
