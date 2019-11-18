import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Menu extends Component {
    render() {
        return (
            <div className="menu">

                <div className="name">
                    <Link to="/"><h1>Adulting Tasks </h1>
                    </Link>
                </div>
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Categories</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tasks</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sign In</a>
                    </li>

                </ul>

            </div>
        )
    }
}

export default Menu;