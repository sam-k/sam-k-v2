import React from "react"

class Navbar extends React.Component {
    render() {
        return (
            <div id='navbar-bg-wrapper'>
                <div id='navbar-wrapper'>
                    <div id='navbar'>
                        <li id='home'><a href="#">S A M &nbsp; K I M</a></li>
                        <ul id='nav'>
                            <li className='nav-item-start'>
                                <a href="#">Projects</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#">Bio</a>
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