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
import { useLocation } from 'react-router-dom';

function Booking() {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Select Payment Method');
    const [showCardFields, setShowCardFields] = useState(false);
    const [showUpiField, setShowUpiField] = useState(false);
    const [showModal,setShowModal]=useState(false)
    const [name,setName]=useState("name")
    const [number,SetNumber]=useState(0)
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
    const [address,setAddress]=useState("")
    const [city,setCity]=useState("")
    const [state,setState]=useState("")
    const [country,setCountry]=useState("")
    const [zip,setZip]=useState()
    const location = useLocation();
    console.log(location)
    const flightDetials = location.state ? location.state.flightDetials : null;
   
    const handlePaymentMethodSelect = (method) => {
        setSelectedPaymentMethod(method);
        setShowCardFields(method === 'Card');
        setShowUpiField(method === 'UPI Method');
    };

    const handleVisa=(type)=>{
        setVisaType(type)
    }
    const handleBooking=()=>{
        console.log(isWindow)
        setShowModal(true)
    }

    return (
        <MDBContainer fluid>
            <div className="bookin-page">
                <div className="travel-detials">
                    <div className="choosed-airline">
                        <p>{flightDetials.name}</p>
                    </div>
                    <div className="destination text-primary">
                        {flightDetials.from} <SwapOutlined /> {flightDetials.to}

                    </div>
                </div>
                <div className="preferences">
                    <div className="item-one">
                        <label>
                            <MDBCheckbox checked={isWindow} onChange={(e)=>{setIsWindow(e.target.checked)}}/>
                            Window Seat
                        </label>
                    </div>
                    <div className="item-one">
                        <label>
                            <MDBCheckbox checked={isMeals} onChange={(e)=>{setIsMeals(e.target.checked)}} />
                            Inflight-meals
                        </label>
                    </div>
                    <div className="item-one">
                        <label>
                            <MDBCheckbox checked={isSpecial} onChange={(e)=>{setIsSpecial(e.target.checked)}} />
                            Special assistance or accommodations
                        </label>
                    </div>
                </div>
                <div className="user-detials">
                    <div className="section-1">
                        <MDBInput label="name"   onChange={(e)=>setName(e.target.value)}/>
                        <MDBInput label="Phone No"  onChange={(e)=>SetNumber(e.target.value)}/>
                    </div>
                    <div className="section-1">
                        <MDBInput label="Identity Card Number" onChange={(e)=>setIdNo(e.target.value)} />
                        <MDBInput label="Date" type={"date"} onChange={(e)=>setDate(e.target.value)} />
                    </div>
                </div>
                <div className="travel-documents">
                    <div className="passport-detials">
                        <MDBInput label="Passport No"  onChange={(e)=>setPassportNo(e.target.value)}/>
                        <MDBInput label="Issued Country" onChange={(e)=>setIssuedCountry(e.target.value)}/>
                        <MDBInput label="Issued Date" type={"date"}  onChange={(e)=>setIssuedDate(e.target.value)}/>
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
                            <MDBInput label="Card No" onChange={(e)=>setCardNo(e.target.value)} />
                            <MDBInput label="Expiry Date" onChange={(e)=>setCardDate(e.target.value)} />
                            <MDBInput label="CVV" onChange={(e)=>setCvv(e.target.value)} />
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
                <MDBInput label="Name" value={name} disabled />
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
                <MDBInput label="Phone No" value={number} disabled/>
                <MDBInput label="Email" onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <div className="passenger">
                <MDBInput label="Payment Method" value={selectedPaymentMethod}  disabled/>
                <MDBInput label="Amount Payable " value={flightDetials.fare}  disabled/>
                </div>
                </div>
                <div className="submit-button">
                <button onClick={handleBooking }>Review Booking </button>
                </div>
                </div>
                {showModal&&<ReiviewBooking setShowModal={setShowModal} data={{name,number,email,idNo,address,state,country,selectedPaymentMethod,
                city,zip,visaType,passportNO,issuedDate,issuedCountry,date,isWindow,isMeals,isSpecial,flightDetials}}/>}
        </MDBContainer>

    )
}

export default Booking 