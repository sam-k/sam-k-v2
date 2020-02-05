import React from "react"

class Navbar extends React.Component {
    render() {
        return (
            <div id='navbar'>
                <div id='navbar-wrapper'>
                    <div id='nav'>
                        <li id='nav-home'><a href="#">S A M &nbsp; K I M</a></li>
                        <ul id='nav-other'>
                            <li className='nav-item-start'>
                                <a href="#projects">Projects</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#experiences">Bio</a>
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