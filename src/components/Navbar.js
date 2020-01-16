import React from 'react'

function Navbar() {
    return (
        <>
            <div id='navbar'>
                <li id='home'><a href="#">S A M &nbsp; K I M</a></li>
                <ul id='nav'>
                    <li id='nav-item-1'><a href="#">Projects</a></li>
                    <li id='nav-item-2'><a href="#">Skills</a></li>
                    <li id='nav-item-3'><a href="#">Resume</a></li>
                </ul>
                <div className='break' />
            </div>
        </>
    )
}

export default Navbar