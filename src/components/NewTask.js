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
        // console.log(this.state.title)
    }

    enterTaskSummary = (e) => {
        e.preventDefault()

        this.setState({

            summary: e.target.value

        })
        // console.log(this.state.summary)
    }


    enterTaskpic = (e) => {
        e.preventDefault()

        this.setState({

            taskpic: e.target.value

        })
        // console.log(this.state.summary)
    }

    enterTaskDetails = (e) => {
        e.preventDefault()

        this.setState({

            details: e.target.value

        })
        // console.log(this.state.details)
    }



    enterCategory = (e) => {
        e.preventDefault()

        this.setState({

            category: e.target.value

        })
        // console.log(this.state.category)
    }






    submitTasks = (e) => {
        // console.log(this.state.categories.title)
        e.preventDefault()
        const title = this.state.title
        const details = this.state.details
        const category = this.state.category
        const summary = this.state.summary
        const taskpic = this.state.taskpic
        console.log({
            title: title,
            summary: summary,
            details: details,
            category: parseInt(category),
            taskpic: taskpic
        })
        Axios.post('http://adultingappbackend.herokuapp.com/api/adultingtasks/', {
            title: title,
            summary: summary,
            details: details,
            category: parseInt(category),
            taskpic: taskpic
        }).then(res => {
            console.log(res.data);
            console.log(title)
            console.log('hiiiii')






            // this.setState({
            //     tasks: {
            //         title: title,
            //         summary: summary,
            //         details: details,
            //         category: category,
            //         taskpic: taskpic

            //     }
            // })
        }).catch(err => {
            console.log(err.response)
        })

    }





    render() {
        // console.log(this.props.categories)
        let thisCategory = this.props.categories.map(category => {
            console.log(category)
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

// summary = models.CharField(max_length = 500, default='Enter Summary')
// details = models.TextField(default='Enter Details')
// taskpic