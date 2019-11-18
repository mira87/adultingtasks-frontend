import React, { Component } from "react";
import IndividualTask from './IndividualTask'
import axios from 'axios'
import { Link } from 'react-router-dom'


class AdultingTaskList extends Component {
    state = {
        tasks: [

        ]
    }


    render() {
        return (
            this.props.tasks.map(task => (
                <div>
                    <Link to={`/tasks/${task.title}`}><p>{task.title}</p>
                    </Link>

                </div>
            ))
        )


    }
}

export default AdultingTaskList;