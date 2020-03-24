import React from 'react'
import {Link} from 'react-router-dom'
import { hot } from 'react-hot-loader'

function Menu() {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/signin">SignIn</Link>
                </li>
                <li>
                    <Link to="/signup">SignUp</Link>
                </li>
            </ul>
        </div>)
}

export default hot(module)(Menu);