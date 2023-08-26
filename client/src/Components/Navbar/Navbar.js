import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='nav'>
    <div className="logo">
    FlyEasy
    </div>
    <div className="links">
    <ul>
    <li>Home</li>
    <li>About</li>
    <li>Service</li>
    <li>Contact</li>
    <li><button>Login</button></li>
    </ul>
    </div>
    </div>
  )
}

export default Navbar