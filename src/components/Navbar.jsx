import React from 'react'
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="./image/Group 1.png" alt="Logo" />
        </div>

        <div>
            <ul>
                <li><a href="#shop">Shop now</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#contact">Contact us</a></li>
                <li><a href="#option">More option</a></li>
                
            </ul>
        </div>

        <div className='btn'>
            <button className='btn1'>Cart</button>
            <button className='btn2'>Help</button>
        </div>
    </nav>
  )
}

export default Navbar