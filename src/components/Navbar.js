import React from 'react'

function Navbar() {
    return (
        <div id='navbar'>
            <li id='home'><a href="#">S A M &nbsp; K I M</a></li>
            <ul id='nav'>
                <li className='nav-item-start'><a href="#">Projects</a></li>
                <li className='nav-item'><a href="#">Bio</a></li>
                <li className='nav-item-end'><a href="#">Resume</a></li>
            </ul>
        </div>
    )
}

export default Navbar