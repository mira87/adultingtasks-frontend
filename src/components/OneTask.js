import React, { Component } from 'react'
import axios from 'axios'
export class OneTask extends Component {

    state = {
        title: '',
        taskpic: '',
        summary: '',
        details: '',
        category: '',
        id: ''
    }

    deleteTask = () => {
        axios
            .delete(`http://adultingappbackend.herokuapp.com/api/adultingtasks/${this.state.id}`)
            .then(res => {
                this.setRedirect();
                // this.setState({ movies: res.data.movies });
            })
            .catch(error => {
                console.log(error);
            }
            )

    }


    updateTask = () => {
        let myForm;
        return (
            myForm = document.querySelector('.updateForm').style.display = 'block'
        )
    }

    componentDidMount() {
        // console.log(this.props.match.params.title)
        axios
            .get(`http://adultingappbackend.herokuapp.com/api/adultingtasks/`)
            .then(res => {
                let mytask = res.data.filter(data => (
                    // data.title == 'Balancing A checkbook'
                    data.title == this.props.match.params.title
                ))

                this.setState({

                    title: mytask[0].title,
                    taskpic: mytask[0].taskpic,
                    summary: mytask[0].summary,
                    details: mytask[0].details,
                    category: mytask[0].category,
                    id: mytask[0].id

                });
            })
            .catch(error => {
                console.log(error);
            });
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

        axios.put(`https://adultingappbackend.herokuapp.com/api/adultingtasks/${this.state.id}/`, {
            title: title,
            summary: summary,
            details: details,
            category: parseInt(category),
            taskpic: taskpic
        },
            {
                headers: { 'Content-Type': 'application/json' }
            }).then(res => {
                console.log(res.data);
            }).catch((err) => console.log(err));
    }


    render() {

        let thisCategory = this.props.categories.map(category => {
            return (<option value={category.id}>{category.title}</option>)

        })
        return (
            <div>
                <h1>{this.state.title}</h1>
                <img style={{ maxWidth: '50%' }} className="img-fluid img-thumbnail" src={this.state.taskpic} />
                <h5>{this.state.summary}</h5>
                <h6>{this.state.details}</h6>
                <button onClick={this.deleteTask} className="btn btn-danger">Delete</button>
                <button onClick={this.updateTask} className="btn btn-danger">Update</button>


                <form className="updateForm" onSubmit={this.submitTasks} >
                    <div className="form-group">
                        <label for="newTasks">Task Title</label>
                        <input value={this.state.title} onChange={this.enterTaskTitle} placeholder="Create a New Task" type="text" className="form-control"></input>

                        <div className="form-group">
                            <label for="newTaskSummary">Task Summary</label>
                            <input onChange={this.enterTaskSummary} value={this.state.summary} placeholder="Brief Description of the task" type="text" className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label for="newTaskSummary">Add Picture</label>
                            <input onChange={this.enterTaskpic} value={this.state.taskpic} placeholder="Add a Picture" type="text" className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label for="newTaskDetails">Task Details</label>
                            <textarea value={this.state.details} onChange={this.enterTaskDetails} placeholder="Give Details on your task" type="textarea" className="form-control" rows="5"></textarea>
                        </div>
                        <div className="form-group">
                            <label value={this.state.details} for="categoryChoice">Choose Category</label>
                            <select onChange={this.enterCategory} className="form-group">
                                {thisCategory}
                            </select>
                        </div>
                        <br></br>
                        <input type="submit" className="btn btn-danger" />



                    </div>
                </form >


            </div >
        )
    }
}

export default OneTask
