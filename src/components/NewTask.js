import React, { Component } from 'react'
import Axios from 'axios';

class NewTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            taskpic: '',
            summary: '',
            details: '',
            category: 1
        }

    }
    enterTaskTitle = (e) => {
        e.preventDefault()
        this.setState({
            title: e.target.value

        })
    }

    enterTaskSummary = (e) => {
        e.preventDefault()

        this.setState({

            summary: e.target.value

        })
    }

    enterTaskpic = (e) => {
        e.preventDefault()

        this.setState({

            taskpic: e.target.value

        })
    }

    enterTaskDetails = (e) => {
        e.preventDefault()

        this.setState({

            details: e.target.value

        })
    }

    enterCategory = (e) => {
        e.preventDefault()

        this.setState({

            category: e.target.value

        })
    }


    submitTasks = (e) => {
        e.preventDefault()
        const title = this.state.title
        const details = this.state.details
        const category = this.state.category
        const summary = this.state.summary
        const taskpic = this.state.taskpic

        Axios.post('http://adultingappbackend.herokuapp.com/api/adultingtasks/', {
            title: title,
            summary: summary,
            details: details,
            category: parseInt(category),
            taskpic: taskpic
        }).then(res => {

        }).catch(err => {
            console.log(err.response)
        })

    }

    render() {
        let thisCategory = this.props.categories.map(category => {
            return (<option value={category.id}>{category.title}</option>)

        })
        return (
            <form onSubmit={this.submitTasks} >
                <div className="form-group">
                    <label for="newTasks">Task Title</label>
                    <input onChange={this.enterTaskTitle} placeholder="Create a New Task" type="text" className="form-control"></input>

                    <div className="form-group">
                        <label for="newTaskSummary">Task Summary</label>
                        <input onChange={this.enterTaskSummary} placeholder="Brief Description of the task" type="text" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label for="newTaskSummary">Add Picture</label>
                        <input onChange={this.enterTaskpic} placeholder="Add a Picture" type="text" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label for="newTaskDetails">Task Details</label>
                        <textarea onChange={this.enterTaskDetails} placeholder="Give Details on your task" type="textarea" className="form-control" rows="5"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="categoryChoice">Choose Category</label>
                        <select onChange={this.enterCategory} className="form-group">
                            {thisCategory}
                        </select>
                    </div>
                    <br></br>
                    <input type="submit" className="btn btn-danger" />



                </div>
            </form >
        )
    }
}


export default NewTask;
