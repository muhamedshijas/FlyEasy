import React, { useState } from 'react'
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
import ReiviewBooking from '../../Modal/ReiviewBooking';

function Booking() {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Select Payment Method');
    const [showCardFields, setShowCardFields] = useState(false);
    const [showUpiField, setShowUpiField] = useState(false);
    const [showModal,setShowModal]=useState(false)
    const [name,SetName]=useState("name")
    const [number,SetNumber]=useState()
    const [email,setEmail]=useState("")
    const[idNo,setIdNo]=useState()
    const[date,setDate]=useState()
    const[passportNO,setPassportNo]=useState()
    const [issuedCountry,setIssuedCountry]=useState("")
    const[issuedDate,setIssuedDate]=useState("")
    const[visaType,setVisaType]=useState("Select Type of Visa")
    const[isWindow,setIsWindow]=useState(false)
    const[isMeals,setIsMeals]=useState(false)
    const[isSpecial,setIsSpecial]=useState(false)
    const[cardNo,setCardNo]=useState()
    const[cardDate,setCardDate]=useState()
    const[cvv,setCvv]=useState()
    const[upi,setUpi]=useState()
    address,city,state,coountry,zip
    const [address,setAddress]=useState("")
    const [city,setCity]=useState("")
    const [state,setState]=useState("")
    const [country,setCountry]=useState("")
    const [zip,setZip]=useState()

    const handlePaymentMethodSelect = (method) => {
        setSelectedPaymentMethod(method);
        setShowCardFields(method === 'Card');
        setShowUpiField(method === 'UPI Method');
    };

    const handleVisa=(type)=>{
        setVisaType(type)
    }
    function handleBooking(){   
        setShowModal(true)
    }
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
                    <MDBDropdown>
                        <MDBDropdownToggle caret>
                            {visaType}
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
                <div className="payment">
                    <MDBDropdown>
                        <MDBDropdownToggle caret>
                            {selectedPaymentMethod}
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem onClick={() => handlePaymentMethodSelect('Card')}>
                                Card
                            </MDBDropdownItem>
                            <MDBDropdownItem onClick={() => handlePaymentMethodSelect('UPI Method')}>
                                UPI Method
                            </MDBDropdownItem>
                            <MDBDropdownItem onClick={() => handlePaymentMethodSelect('Direct cash')}>
                                Direct cash
                            </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>

                    {showCardFields && (
                        <div className="card-detials">
                            <MDBInput label="Card No" />
                            <MDBInput label="Expiry Date" />
                            <MDBInput label="CVV" />
                        </div>
                    )}

                    {showUpiField && (
                        <div className='upi-id'>
                            <MDBInput label="UPI Id" />
                        </div>
                    )}
                </div>
                <div className="billing-address">
                <div className="passenger">
                <MDBInput label="Name" />
                <MDBInput label="Address" />
                </div>
                <div className="passenger">
                <MDBInput label="City" />
                <MDBInput label="State" />
                </div>
                <div className="passenger">
                <MDBInput label="Country" />
                <MDBInput label="Zip" />
                </div>
                <div className="passenger">
                <MDBInput label="Phone No" />
                <MDBInput label="Email" />
                </div>

                <div className="passenger">
                <MDBInput label="Payment Method" value={selectedPaymentMethod}  disabled/>
                </div>
                </div>
                <div className="submit-button">
                <button onClick={handleBooking }>Review Booking </button>
                </div>
                </div>
                {showModal&&<ReiviewBooking setShowModal={setShowModal}/>}
        </MDBContainer>

    )
}

export default Booking 