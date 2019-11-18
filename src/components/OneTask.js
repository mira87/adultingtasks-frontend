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
        console.log(this.state.id)
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
        // console.log(this.state.id)
        return (
            myForm = document.querySelector('.updateForm').style.display = 'block'

            // display: 'block',

        )
    }



    componentDidMount() {
        // const { match: { params } } = this.props;
        console.log(this.props.match.params.title)
        axios
            // .get(`http://localhost:8000/adultingtasks/${params.title}`)
            .get(`http://adultingappbackend.herokuapp.com/api/adultingtasks/`)
            .then(res => {
                let mytask = res.data.filter(data => (
                    // data.title == 'Balancing A checkbook'
                    data.title == this.props.match.params.title
                ))

                console.log(mytask)
                console.log(mytask[0].title)
                console.log(mytask[0])

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






    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         title: '',
    //         taskpic: '',
    //         summary: '',
    //         details: '',
    //         category: 1
    //     }

    // }
    // enterTaskTitle = (e) => {
    //     e.preventDefault()
    //     this.setState({
    //         title: this.state.title

    //     })
    //     // console.log(this.state.title)
    // }

    // enterTaskSummary = (e) => {
    //     e.preventDefault()

    //     this.setState({

    //         summary: e.target.value

    //     })
    //     // console.log(this.state.summary)
    // }


    // enterTaskpic = (e) => {
    //     e.preventDefault()

    //     this.setState({

    //         // taskpic: this.state.taskpic
    //         taskpic: e.target.value
    //     })
    //     // console.log(this.state.summary)
    // }

    // enterTaskDetails = (e) => {
    //     e.preventDefault()

    //     this.setState({

    //         details: e.target.value

    //     })
    //     // console.log(this.state.details)
    // }



    // enterCategory = (e) => {
    //     e.preventDefault()

    //     this.setState({

    //         category: e.target.value

    //     })
    //     // console.log(this.state.category)
    // }






    // submitTasks = (e) => {
    //     // console.log(this.state.categories.title)
    //     e.preventDefault()
    //     const title = this.state.title
    //     const details = this.state.details
    //     const category = this.state.category
    //     const summary = this.state.summary
    //     const taskpic = this.state.taskpic
    //     console.log({
    //         title: title,
    //         summary: summary,
    //         details: details,
    //         category: parseInt(category),
    //         taskpic: taskpic
    //     })
    //     axios.put(`https://adultingappbackend.herokuapp.com/api/adultingtasks/${this.state.id}`, {
    //         title: title,
    //         summary: summary,
    //         details: details,
    //         category: parseInt(category),
    //         taskpic: taskpic
    //     },
    //         {
    //             headers: { 'Content-Type': 'application/json' }
    //         }).then(res => {
    //             console.log(res.data);
    //             console.log(title)
    //             console.log('hiiiii')



    //         }).catch((err) => console.log(err));
    // }


    render() {
        // console.log(this.state)
        console.log(this.state.title)

        // console.log(this.state[0].task)

        // this.state.task.map(task => (
        //     console.log(task.title)
        // ))
        // let thisCategory = this.props.categories.map(category => {
        //     console.log(category)
        //     return (<option value={category.id}>{category.title}</option>)

        // })
        return (
            <div>
                <h1>{this.state.title}</h1>
                <img style={{ maxWidth: '50%' }} className="img-fluid img-thumbnail" src={this.state.taskpic} />
                <h5>{this.state.summary}</h5>
                <h6>{this.state.details}</h6>
                <button onClick={this.deleteTask} className="btn btn-danger">Delete</button>
                {/* <button onClick={this.updateTask} className="btn btn-danger">Update</button> */}


                {/* <form className="updateForm" onSubmit={this.submitTasks} >
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
                </form > */}


            </div >
        )
    }
}

export default OneTask
