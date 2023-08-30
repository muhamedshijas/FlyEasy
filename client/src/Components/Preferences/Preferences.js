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

function Preferences() {
  return (
    <div>
    <div className="preferences">
                    <div className="item-one">
                        <label>
                            <MDBCheckbox />
                            Window Seat
                        </label>
                    </div>
                    <div className="item-one">
                        <label>
                            <MDBCheckbox  />
                            Inflight-meals
                        </label>
                    </div>
                    <div className="item-one">
                        <label>
                            <MDBCheckbox />
                            Special assistance or accommodations
                        </label>
                    </div>
                </div>
    </div>
  )
}

export default Preferences