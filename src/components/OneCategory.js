import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const mycat = ''
const myTasks = ''
export class OneCategory extends Component {
    state = {
        tasks: '',
        categories: ''
    }

    render() {
        let mycat = this.props.categories.filter(cat => (
            cat.title == this.props.match.params.title
        )
        )

        let categoriesChosen = this.props.categories.map(category => {

            return category
        });

        let myCatt;
        for (let i = 0; i < categoriesChosen.length; i++) {
            if (categoriesChosen[i].title === this.props.match.params.title) {
                myCatt = categoriesChosen[i]
            }
        }

        let myTasks = this.props.task.filter(thisTask => (
            thisTask.category == myCatt.id
        ))

        let allTasks = myTasks.map(eachofem => {
            return (
                <div>
                    <Link to={`/tasks/${eachofem.title}`}>   < div className="col-4" >
                        <h6>{eachofem.title}</h6>

                        <img className="img-fluid img-thumbnail" src={eachofem.taskpic} />
                    </div >
                    </Link>
                </div >
            )
        })
        return (
            <div>

                {allTasks}

            </div >
        )
    }

}

export default OneCategory
