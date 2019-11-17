import React, { Component } from "react";
import IndividualTask from './IndividualTask'
// import uuid from 'uuid'
import axios from 'axios'
import { Link } from 'react-router-dom'




class AdultingTaskList extends Component {
    state = {
        tasks: [

        ]
    }
    // state = {
    //     adultingtasks: [


    //         {
    //             title: "Washing Dishes",
    //             taskpic: "https://images.pexels.com/photos/2796103/pexels-photo-2796103.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //             summary: "Tips on making dish washing easier",
    //             details: "Minimize the number of dishes to be washed. Use a large vessel instead of the sink. Use the small bowl technique. Clean ahead of time. Be smart about the stubborn stuff. Get some good cleaning supplies. nKeep good company. Rethink your own approach."
    //         },
    //         {
    //             title: "Doing Laundry",
    //             taskpic: "https://images.pexels.com/photos/3007326/pexels-photo-3007326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //             summary: "How to wash clothes",
    //             details: "Read the Labels. Check the care labels on your garments and linens.  Sort. Start by sorting the laundry by color:  Sort Again. Sort each pile one more time by type of fabric.  Pick a Detergent. Select an all-purpose laundry detergent.  Pick a Water Temperature and Cycle.  Final Check.  Load the Washer.  Unload the Washer."
    //         },
    //         {
    //             title: "Balancing A checkbook",
    //             taskpic: "https://images.pexels.com/photos/159804/accountant-accounting-adviser-advisor-159804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //             summary: "How to balance a checkbook",
    //             details: "Step 1: Recording your transactions. The first step to balancing a checkbook is to list each transaction as it occurs.  Step 2: Review your monthly bank statement.  Step 3: Check that your balances match.  Step 4: Address any errors or fraudulent activity.  Step 5: Draw a line in your register.  Step 6: File your bank statement."
    //         },
    //         {
    //             title: "Get Organized",
    //             taskpic: "https://images.pexels.com/photos/265005/pexels-photo-265005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //             summary: "Organize your Space",
    //             details: "1.Declutter your clothes by category. Flickr/CGPGrey.  2.Empty and clean your closet.  3.Design your ideal closet space.  4.Store your clothes by category.  5.Hang anything delicate, fancy, or sturdy.  6.Use coordinating hangers.  7.Stack thick items like denim and sweaters.  8.Roll t-shirts, pajamas, and workout clothes into storage boxes. 9. Store your most used clothes at eye level. 10. Color-code your wardrobe. 11. Maximize your vertical storage space. 12. Use drawer dividers for your undergarments. 13. Hang scarves on hangers. 14. Utilize empty wall space for hanging jewelry and accessories. 15. Organize your drawer contents in the order you get dressed. 16. Turn your hangers backward to mark how often you wear your clothing. 17. Use the “one in, one out” rule to keep your clothes collection in check."
    //         }

    //     ]
    // }

    // componentDidMount() {
    //     const url = 'http://localhost:8000/api/adultingtasks';
    //     axios.get(url)
    //     // .then(res => { console.log(res.data) })
    // }
    // tasksList;
    // componentDidMount() {
    //     axios
    //         .get('http://localhost:8000/api/adultingtasks')
    //         .then(res => {
    //             this.setState({
    //                 tasks: res.data
    //             })

    //         })

    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    render() {
        return (
            this.props.tasks.map(task => (
                <div>
                    <Link to={`/tasks/${task.title}`}><p>{task.title}</p>
                    </Link>

                </div>
            ))
        )


    }
}

export default AdultingTaskList;