import React from 'react'
import './BookingPage.css'
import { Select } from 'antd';

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


import { SwapOutlined } from '@ant-design/icons';

function Booking() {
    return (
        <MDBContainer fluid>
            <div className="bookin-page">
                <div className="travel-detials">
                    <div className="choosed-airline">
                        <p>Saudi Airlines</p>
                    </div>
                    <div className="destination text-primary">
                        Sharjah <SwapOutlined /> Caliciut
                    </div>
                </div>
                <div className="preferences">
                    <div className="item-one">
                        <label>
                            <MDBCheckbox />
                            Window Seat
                        </label>
                    </div>
                    <div className="item-one">
                        <label>
                            <MDBCheckbox />
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
                <div className="user-detials">
                    <div className="section-1">
                        <MDBInput label="name" />
                        <MDBInput label="Phone No" />
                    </div>
                    <div className="section-1">
                        <MDBInput label="Identity Card Number" />
                        <MDBInput label="Date" type={"date"} />
                    </div>
                </div>
                <div className="travel-documents">
                <div className="passport-detials">
                <MDBInput label="Passport No" />
                <MDBInput label="Issued Country" />
                <MDBInput label="Issued Date" type={"date"} />
                </div>
                    <MDBDropdown >
                        <MDBDropdownToggle caret>Type of visa</MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem >
                                Visiting Visa
                            </MDBDropdownItem>
                            <MDBDropdownItem >
                                Job Visa
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                                Educational Visa
                            </MDBDropdownItem>
                            {/* Add more visa types as needed */}
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </div>
            </div>
        </MDBContainer>
    )
}

export default Booking 