import { MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'
import './BookingSuccessFull.css'
import { Link } from 'react-router-dom'
import images from '../../assets/images/images.png'

function BookingSuccesfull() {
  return (
    <div className='successfull'>
    <div className="succesfull-card">
    <div className="images-completed">
    <img src={images} alt="" />
    </div>
    <h4>Your Booking completed Successfully</h4>
<Link to='/'>Go to Home</Link>
    </div>   
    </div>
  )
}

export default BookingSuccesfull