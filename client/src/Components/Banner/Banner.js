import React from 'react'
import './Banner.css'
import images from '../../assets/images/airline1.png'
function Banner() {
  return (
    <div>
    <div className="banner">
    <div className="quotes">
    <h3>Seamless Booking, </h3>
    <h3>Endless Discoveries.</h3>
    <p>Book your Tickets Here...</p>
    <button>Try It Out</button>
    </div>

    <div className="images">
    <img src={images} alt="" srcset="" />
    </div>
    </div>
    
    </div>
  )
}

export default Banner