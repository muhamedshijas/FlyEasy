import React from 'react'
import './ReviewBooking.css'
function ReiviewBooking({setShowModal}) {
    function handleClose(){
        setShowModal(false)
    }
  return (
    <div className='modal-main'>
    
<h1 onClick={handleClose}>

Heloo modal
</h1>
    </div>
  )
}

export default ReiviewBooking