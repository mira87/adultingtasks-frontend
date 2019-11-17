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
    render() {
        // console.log(this.state)
        console.log(this.state.title)

        // console.log(this.state[0].task)

        // this.state.task.map(task => (
        //     console.log(task.title)
        // ))

        return (
            <div>
                <h1>{this.state.title}</h1>
                <img style={{ maxWidth: '50%' }} className="img-fluid img-thumbnail" src={this.state.taskpic} />
                <h5>{this.state.summary}</h5>
                <h6>{this.state.details}</h6>
                <button onClick={this.deleteTask} className="btn btn-danger">Delete</button>
            </div >
        )
    }
}

export default OneTask
