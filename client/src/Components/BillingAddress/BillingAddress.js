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
import {
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
} from 'mdb-react-ui-kit';

function BillingAddress() {
  return (
    <div>
    <div className="billing-address">
                <div className="passenger">
                <MDBInput label="Name" value= "hsadfhfdjsd"disabled />
                <MDBInput label="Address" onChange={(e)=>setAddress(e.target.value)} />
                </div>
                <div className="passenger">
                <MDBInput label="City" onChange={(e)=>setCity(e.target.value)}/>
                <MDBInput label="State" onChange={(e)=>setState(e.target.value)}/>
                </div>
                <div className="passenger">
                <MDBInput label="Country" onChange={(e)=>setCountry(e.target.value)} />
                <MDBInput label="Zip" onChange={(e)=>setZip(e.target.value)}/>
                </div>
                <div className="passenger">
                <MDBInput label="Phone No" value="hsadfhfdjsd" disabled/>
                <MDBInput label="Email" onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <div className="passenger">
                <MDBInput label="Payment Method" value="gggfgfgfg"  disabled/>
                <MDBInput label="Amount Payable " value="hsadfhfdjsd"  disabled/>
                </div>
                </div>
    
    </div>
  )
}

export default BillingAddress