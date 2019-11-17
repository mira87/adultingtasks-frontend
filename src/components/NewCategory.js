import React, { Component } from 'react'
import Axios from 'axios';

class NewCategory extends Component {
    enterCategory = (e) => {
        this.setState({
            categories: {
                title: e.target.value
            }
        })
        console.log(e.target.value)
    }

    submitCategory = (e) => {
        // console.log(this.state.categories.title)
        e.preventDefault()
        const newCat = this.state.categories.title
        Axios.post('http://adultingappbackend.herokuapp.com/api/categories/', { title: newCat }).then(res => {
            console.log(res.data);
            console.log(newCat)
            console.log('hiiiii')
        })
    }





    render() {
        return (
            <form onSubmit={this.submitCategory} >
                <div className="form-group">
                    <label for="newCategory">Category</label>
                    <input onChange={this.enterCategory} placeholder="Create a New Category" type="text" className="form-control"></input>
                    <br></br>
                    <input type="submit" className="btn btn-danger" />



                </div>
            </form>
        )
    }
}


export default NewCategory;