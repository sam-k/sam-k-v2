import React from "react"
import { Link } from "react-router-dom"

class Navbar extends React.Component {
    render() {
        return (
            <div id='navbar'>
                <div id='navbar-wrapper'>
                    <div id='nav'>
                        <li id='nav-home'>
                            <Link to="/">S A M &nbsp; K I M</Link>
                        </li>
                        <ul id='nav-other'>
                            <li className='nav-item-start'>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/about">Bio</Link>
                            </li>
                            <li className='nav-item-end'>
                                <a href="https://drive.google.com/file/d/1M0rskmHcZrd6pbAoDjvfuzy3e2dXhaO9/view">Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar