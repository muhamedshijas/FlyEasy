import React from 'react'
import './Banner.css'
import images from '../../assets/images/image.png'
function Banner() {
  return (
    <div>
    <div className="banner">
    <div className="quotes">
    <h2>Seamless Booking,Endless Discoveries.</h2>
    <p>"Celebrate the joy of travel with our airline booking app. Effortlessly explore a world of destinations, 
    secure the best fares, and embark on unforgettable journeys. Your adventure begins now. 
    Trust us to make your travel dreams come true."
    </p>
    <b>Book your next getaway and create lasting memories today</b>
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