import React from 'react'
import './PersonalDetials.css'
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


function PersonalDetials({ date,setBookingData,bookingData}) {
    const handleVisa = (newVisaType) => {
    setBookingData({...bookingData,visaType:newVisaType})
  };
    return (
        <div className="personal-detials-body">
            <div className="passenger-detials">
                <div className="passenger">
                    <div className="section-1">
                        <MDBInput label="name" value={bookingData.name}  onChange={(e)=>{setBookingData({...bookingData,name:e.target.value})}}  />
                        <MDBInput label="Phone No"  onChange={(e)=>{setBookingData({...bookingData,phoneNo:e.target.value})}} />
                    </div>
                    <div className="section-1">
                        <MDBInput label="Age" required  onChange={(e)=>{setBookingData({...bookingData,age:e.target.value})}} />
                        <MDBInput label="Date" type={"date"} value={date} readOnly />
                    </div>
                </div>

                <div className="travel-documents">
                    <div className="passport-detials">
                        <MDBInput label="Passport No"  onChange={(e)=>{setBookingData({...bookingData,passportNo:e.target.value})}}  />
                        <MDBInput label="Nationality"  onChange={(e)=>{setBookingData({...bookingData,nationality:e.target.value})}}  />
                        <MDBInput label="Issued Date"  onChange={(e)=>{setBookingData({...bookingData,issuedDate:e.target.value})}}  type={"date"} />
                    </div>
                    <MDBDropdown>
                        <MDBDropdownToggle caret>
                            {bookingData.visaType}
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem onClick={() => handleVisa('Job Visa')}>
                                Job Visa
                            </MDBDropdownItem>
                            <MDBDropdownItem onClick={() => handleVisa('Educational Visa')}>
                                Educational Visa
                            </MDBDropdownItem>
                            <MDBDropdownItem onClick={() => handleVisa('Visiting Visa')}>
                                Visiting Visa
                            </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>

                </div>

            </div>
        </div>
    )
}

export default PersonalDetials