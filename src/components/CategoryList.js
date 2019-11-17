import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Axios from 'axios';
import NewTask from './NewTask';


export class CategoryList extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         categories: [
    //         ]
    //     }
    // }



    // componentDidMount() {
    //     Axios.get('http://localhost:8000/api/categories/').then(res =>
    //         this.setState({
    //             categories: res.data
    //         })
    //     )
    // }




    render() {



        return (
            this.props.categories.map(category => (
                <div>
                    <Link to={`/categories/${category.title}`}>{category.title}</Link>
                </div>


            )

            )

        )



    }
}

export default CategoryList
