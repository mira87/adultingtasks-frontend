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
    // componentDidMount() {
    //     console.log(this.props.categories.title)

    //     console.log('hiiii')
    //     console.log(this.props.categories)
    //     console.log(this)
    //     console.log(this.props)
    //     console.log(this.props.categories)
    //     console.log(this.props[0])

    //     axios.get(`http://localhost:8000/api/categories/`)
    //         .then(res => {
    //             console.log(res.data)
    //             let selected = res.data.filter(thedata => (
    //                 thedata.title === this.props.match.params.title
    //             ))
    //             console.log(selected)
    //             this.setState({
    //                 categories: selected
    //             })
    //         }).then(axios.get(`http://localhost:8000/api/adultingtasks/`).then(res => {
    //             console.log(this.state.tasks.id)
    //             let chosenTasks = res.data.filter(thetask => (
    //                 // console.log(this.state.categories[0].id)
    //                 // console.log(thetask.id)
    //                 thetask.id === this.state.categories[0].id

    //             ))
    //             this.setState({
    //                 tasks: chosenTasks
    //             })
    //             console.log("chosen task coming up")
    //             console.log(chosenTasks)
    //             console.log(res.data)
    //             console.log(this.props.match.params.title)
    //             console.log("CHEEEEECKKKING")
    //         }))
    // }

    ////////////////////

    //     axios.get(`http://localhost:8000/api/adultingtasks/`)
    //         .then(res => {
    //             console.log(res.data)
    //             let selected = res.data.filter(thedata => (
    //                 // console.log(this.props.categories)
    //                 console.log(thedata.id)
    //                 // thedata.id !==
    //                 // this.props.categories[0]
    //                 // thedata.id === this.props.categories[0].id
    //             ))
    //             console.log(selected)
    //             // this.setState({
    //             //     categories: selected
    //             // })
    //             // }).then(axios.get(`http://localhost:8000/api/adultingtasks/`).then(res => {
    //             //     console.log(this.state.tasks.id)
    //             //     let chosenTasks = res.data.filter(thetask => (
    //             //         // console.log(this.state.categories[0].id)
    //             //         // console.log(thetask.id)
    //             //         thetask.id === this.state.categories[0].id

    //             //     ))
    //             //     this.setState({
    //             //         tasks: chosenTasks
    //             //     })
    //             //     console.log("chosen task coming up")
    //             //     console.log(chosenTasks)
    //             //     console.log(res.data)
    //             //     console.log(this.props.match.params.title)
    //             //     console.log("CHEEEEECKKKING")
    //             // }))
    //         })
    // }

    // /////////////////
    // componentDidMount() {


    //     let chooseIt = (mycat, myTasks) => {
    //         mycat = this.props.categories.filter(cat => (
    //             cat.title == this.props.match.params.title

    //         )
    //         )

    //         // console.log(mycat[0])

    //         // let categoriesChosen = this.props.categories.forEach(category => {
    //         //     console.log(category.id)
    //         //     console.log(category.title)
    //         //     return category.title
    //         // });

    //         console.log(this.props.categories)

    //         let categoriesChosen = this.props.categories.map(category => {
    //             console.log(category.id)
    //             console.log(category.title)
    //             return category
    //         });
    //         console.log(categoriesChosen)
    //         // mycat = categoriesChosen.filter(cat => (
    //         //     cat.title == this.props.match.params.title

    //         // )
    //         // )
    //         // console.log(mycat)

    //         let myCatt;
    //         for (let i = 0; i < categoriesChosen.length; i++) {
    //             console.log(categoriesChosen[i].id)
    //             if (categoriesChosen[i].title === this.props.match.params.title) {
    //                 myCatt = categoriesChosen[i]
    //             }
    //         }
    //         console.log(myCatt)

    //         // myTasks = this.props.task.filter((theTask, mycat) => (
    //         //     theTask.category == mycat[0]
    //         //     // console.log(`${theTask.category} ${mycat.id}`)
    //         //     // console.log(theTask.category)
    //         //     // console.log(mycat.id)


    //         // ))

    //         // myTasks = this.props.task.map(theTask => {
    //         //     if (theTask.category == myCatt.id) {
    //         //         return (theTask)

    //         //     }
    //         // })

    //         myTasks = this.props.task.filter(thisTask => (
    //             thisTask.category == myCatt.id
    //         ))
    //         console.log(myTasks)
    //         // return myTasks

    //         // this.componentDidMount = () => {
    //         this.setState({
    //             task: myTasks
    //         })
    //     }
    //     { chooseIt() }


    // }









    render() {
        // let chooseIt = (mycat, myTasks) => {
        let mycat = this.props.categories.filter(cat => (
            cat.title == this.props.match.params.title

        )
        )

        // console.log(mycat[0])

        // let categoriesChosen = this.props.categories.forEach(category => {
        //     console.log(category.id)
        //     console.log(category.title)
        //     return category.title
        // });

        console.log(this.props.categories)

        let categoriesChosen = this.props.categories.map(category => {
            console.log(category.id)
            console.log(category.title)
            return category
        });
        console.log(categoriesChosen)
        // mycat = categoriesChosen.filter(cat => (
        //     cat.title == this.props.match.params.title

        // )
        // )
        // console.log(mycat)

        let myCatt;
        for (let i = 0; i < categoriesChosen.length; i++) {
            console.log(categoriesChosen[i].id)
            if (categoriesChosen[i].title === this.props.match.params.title) {
                myCatt = categoriesChosen[i]
            }
        }
        console.log(myCatt)

        // myTasks = this.props.task.filter((theTask, mycat) => (
        //     theTask.category == mycat[0]
        //     // console.log(`${theTask.category} ${mycat.id}`)
        //     // console.log(theTask.category)
        //     // console.log(mycat.id)


        // ))

        // myTasks = this.props.task.map(theTask => {
        //     if (theTask.category == myCatt.id) {
        //         return (theTask)

        //     }
        // })

        let myTasks = this.props.task.filter(thisTask => (
            thisTask.category == myCatt.id
        ))
        console.log(myTasks)
        // return myTasks

        // this.componentDidMount = () => {

        // }
        // { chooseIt() }

        // { this.chooseIt() }
        console.log(this.state.task)
        console.log(this.props)
        console.log(mycat)
        console.log(myTasks)
        console.log(this.props.match.params.title)
        console.log(this.props.categories)
        console.log(this.props.task)

        // let mycat = this.props.categories.filter(cat => (
        //     cat.title == this.props.match.params.title

        // )
        // )
        // let myTasks = this.props.task.filter((theTask, mycat) => (
        //     // theTask.category == mycat.id
        //     console.log(`${theTask.category} ${mycat.id}`)
        //     // console.log(theTask.category)
        //     // console.log(mycat.id)


        // ))

        console.log(myTasks)
        console.log(mycat)
        // console.log(this.state.categories)
        // console.log(this.state.tasks)

        // console.log(this)
        // console.log(this.props)
        // console.log(this.props.path)
        // console.log(this.props.categories.id)
        // console.log(this.props.categories)
        // console.log(this.props)
        // console.log()
        // let catInfo = this.state.tasks.map(task => (
        //     console.log('hi')
        //     // <h4>{task.title}</h4>
        // ))

        let allTasks = myTasks.map(eachofem => {
            console.log(eachofem)
            return (
                // {`/tasks/${task.title}`}
                <div>
                    <Link to={`http://adultingtasks.herokuapp.com/${eachofem.title}`}>   < div className="col-4" >
                        <h6>{eachofem.title}</h6>

                        <img className="img-fluid img-thumbnail" src={eachofem.taskpic} />
                    </div >
                    </Link>
                </div >
            )
        })
        return (
            <div>
                {/* <Link to={`/tasks/${task.title}`}> {allTasks}</Link> */}
                {allTasks}

            </div >
        )
    }

}

export default OneCategory
