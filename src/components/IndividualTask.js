import React, { Component } from 'react'
import { Link, Router } from 'react-router-dom'

export class IndividualTask extends Component {
    render() {

        return (
            <div>
                <p>{this.props.task.title}</p>
            </div >
        )
    }
}

export default IndividualTask
