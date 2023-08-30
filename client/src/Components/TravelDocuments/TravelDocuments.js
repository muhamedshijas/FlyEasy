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

function TravelDocuments() {
    return (
        <div>

            <div className="travel-documents">
                <div className="passport-detials">
                    <MDBInput label="Passport No" onChange={(e) => setPassportNo(e.target.value)} />
                    <MDBInput label="Issued Country" onChange={(e) => setIssuedCountry(e.target.value)} />
                    <MDBInput label="Issued Date" type={"date"} onChange={(e) => setIssuedDate(e.target.value)} />
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
            </div></div>
    )
}

export default TravelDocuments