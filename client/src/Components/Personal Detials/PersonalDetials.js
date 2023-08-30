import React from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput,
    MDBCheckbox,
}
    from 'mdb-react-ui-kit';

function PersonalDetials() {
  return (
    <div className="user-detials">
                    <div className="section-1">
                        <MDBInput label="name"  />
                        <MDBInput label="Phone No"  />
                    </div>
                    <div className="section-1">
                        <MDBInput label="Identity Card Number" />
                        <MDBInput label="Date" type={"date"} />
                    </div>
                </div>
  )
}

export default PersonalDetials