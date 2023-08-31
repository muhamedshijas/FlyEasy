import React, { useState } from 'react'
import './ReviewBooking.css'
import {MDBCheckbox} from 'mdb-react-ui-kit'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
function ReiviewBooking({ setShowModal, bookingData ,flightDetials}) {
  const [isConfirm , setIsConfirm]=useState(false)
  const navigate= useNavigate()
  function handleClose() {
    setShowModal(false)
  }
  function handleSubmit(){  
    navigate('/bookingcompleted')
  }
  const totalpassangers=parseInt(bookingData.NoOfAdults)+parseInt(bookingData.NoOfChildrens)
  return (
    <div className='modal-main'>
      <div className="booking-review">
        <div className="booking-head">
          <h2>FlyEasy</h2>
          <b>Invoice</b>
          <p className='text-primary'> ( {new Date().toLocaleDateString()})</p>
        </div>
       <table>
      <tr><th colSpan={2} >Flight Detials </th></tr>
      <tr><td><b>Flight Name</b></td><td>:{flightDetials.name}</td></tr>
      <tr><td><b>Route</b></td><td>: {flightDetials.from} TO {flightDetials.to}</td></tr>
      <tr><td><b>Date</b></td><td>: {flightDetials.date}</td></tr>
      <tr><td><b>Type of Travel</b></td><td>: {bookingData.TypeOfTravel}</td></tr>
      <tr><td><b>Number of Passengers</b></td><td>: {totalpassangers}  ( {bookingData.NoOfAdults} Adults , {bookingData.NoOfChildrens} Childrens)</td></tr>
      <tr><th colSpan={2} >Passenger  Detials </th></tr>
      <tr><td><b>Name</b></td><td>: {bookingData.name}</td></tr>
      <tr><td><b>Phone No</b></td><td>: {bookingData.phoneNo}</td></tr>
      <tr><td><b>Passport No</b></td><td>: {bookingData.passportNo}</td></tr>
      <tr><td><b>Nationality</b></td><td>: {bookingData.nationality}</td></tr>
      <tr><td><b>Isuued Date</b></td><td>: {bookingData.issuedDate}</td></tr>
      <tr><td><b>Visa Type</b></td><td>: {bookingData.visaType}</td></tr>
      <tr><th colSpan={2} >Prefernces</th></tr>
      <tr><td><b>Window Seat</b></td><td>:{bookingData.isWindow?"YES":"NO"}</td></tr>
      <tr><td><b>Inflight Meals</b></td><td>:{bookingData.isMeals?"YES":"NO"}</td></tr>
      <tr><td><b>Special assistance or accommodations</b></td><td>:{bookingData.isSpecial?"YES":"NO"}</td></tr>
      <tr><th colSpan={2} >Payment and Billing Address</th></tr>
      <tr><td><b>Payment Method</b></td><td>: {bookingData.paymentMethod}</td></tr>
      <tr><td><b>Payer Name</b></td><td>: {bookingData.name}</td></tr>
      <tr><td><b>Address</b></td><td>: {bookingData.address}</td></tr>
      <tr><td><b>City</b></td><td>:{bookingData.city}</td></tr>
      <tr><td><b>State</b></td><td>: {bookingData.state} </td></tr>
      <tr><td><b>Country</b></td><td>: {bookingData.country}</td></tr>
      <tr><td><b>ZipCode</b></td><td>: {bookingData.zip}</td></tr>
      <tr><td><b>Phone No</b></td><td>: {bookingData.phoneNo}</td></tr>
      <tr><td><b>Email</b></td><td>: {bookingData.email}</td></tr>
      <tr className='text-danger amount'><td><b>Amount Payable</b></td><td>: {flightDetials.fare}</td></tr>
      </table>
      <div className="terms-and-condtions">
      <MDBCheckbox checked={isConfirm} onChange={(e)=>{setIsConfirm(e.target.checked)}}/>
       I have reviewed and verified the details provided above and agree to the Terms and Conditions."
      </div>
    <div className="proceed-buttons">
    <button onClick={handleClose}>Edit</button>
    <button disabled={!isConfirm} onClick={handleSubmit}> Proceed</button>
    </div>
      </div>

    </div>
  )
}

export default ReiviewBooking