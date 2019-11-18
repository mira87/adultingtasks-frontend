import React, { Component } from 'react'
import AdultingTaskList from './components/AdultingTaskList'
import { BrowserRouter as Router } from 'react-router-dom'
import HeroArea from './components/HeroArea'
import CategoryList from './components/CategoryList'
import NewCategory from './components/NewCategory'
import NewTask from './components/NewTask';
import Axios from 'axios';
import { Link, Route } from 'react-router-dom'
import Shopping from './components/Shopping';
import './App.css';
import Footer from './components/Footer'
import Breathe from './components/Breathe'
import Menu from './components/Menu'
import OneCategory from './components/OneCategory';
import OneTask from './components/OneTask';
class App extends Component {

  state = {
    categories: [

    ],
    tasks: [

    ]
  }
  //cats
  componentDidMount() {
    // Axios.get('http://adultingappbackend.herokuapp.com/api/categories/').then(res =>
    Axios.get('http://adultingappbackend.herokuapp.com/api/categories/').then(res =>
      this.setState({
        categories: res.data
      })

    ).then(
      Axios
        .get('http://adultingappbackend.herokuapp.com/api/adultingtasks')
        .then(res => {
          this.setState({
            tasks: res.data
          })

        }))

      .catch(error => {
        console.log(error);
      })


  }


  //adulting



  // componentDidMount() {
  //   Axios
  //     .get('http://adultingappbackend.herokuapp.com/api/adultingtasks')
  //     .then(res => {
  //       this.setState({
  //         tasks: res.data
  //       })

  //     })

  //     .catch(error => {
  //       console.log(error);
  //     });
  // }


  render() {
    console.log(this.state.categories)

    // console.log(this.state.adultingtasks)
    return (
      <Router>


        <div className="container-fluid">
          <Menu />
          <Route path="/" exact>
            <HeroArea />

            <div className="row categorylist">
              <div className="col-8">
                <h4>Categories</h4>
                <h2> Choose a Category to Learn a New Adulting Task</h2>
                <CategoryList categories={this.state.categories} />
              </div>
              <div className="col">
                <h4>Didn't find a Category</h4>
                <p>Click below to create a new one.</p>

                <NewCategory />

              </div>
            </div>


            <Shopping />
            <div className="categorylist row">
              <div className="col-8">
                <h4>Tasks</h4>
                <h2> Choose an Adulting Task</h2>
                <AdultingTaskList tasks={this.state.tasks} />
                {/* <Route path="categories/new"> */}
                {/* <NewCategory /> */}
              </div>
              <div className="col">
                <h4>Want To Create a Task</h4>
                <p>Enter the details below to create a new task.</p>
                <NewTask categories={this.state.categories} />
              </div>
            </div>
            {/* </div> */}


            <Breathe />
          </Route>

          <Route path='/categories/:title' exact={true} render={routerProps =>
            <div className="tasklist row">

              <OneCategory categories={this.state.categories} task={this.state.tasks} match={routerProps.match} /></div>} />
          <Route path="/tasks/:title" exact={true} render={routerProps => <OneTask match={routerProps.match} categories={this.state.categories} />} />
          <Footer />



        </div>
      </Router >
    )
  }
}

export default App;