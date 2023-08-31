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


function PersonalDetials({ date }) {
    return (
        <div className="personal-detials-body">
            <div className="passenger-detials">
                <div className="passenger">
                    <div className="section-1">
                        <MDBInput label="name" />
                        <MDBInput label="Phone No" />
                    </div>
                    <div className="section-1">
                        <MDBInput label="Age" required />
                        <MDBInput label="Date" type={"date"} value={date} readOnly />
                    </div>
                </div>

                <div className="travel-documents">
                    <div className="passport-detials">
                        <MDBInput label="Passport No" />
                        <MDBInput label="Nationality" />
                        <MDBInput label="Issued Date" type={"date"} />
                    </div>
                    <MDBDropdown>
                        <MDBDropdownToggle caret>
                            Visa Type
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