import React, { useState } from 'react'
import './Payment.css'
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

function Payment({setBookingData,bookingData,fare}) {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Select Payment Method');
    const handlePaymentMethodSelect = (method) => {
        setBookingData({...bookingData,paymentMethod:method})
        setSelectedPaymentMethod(method);
        setShowCardFields(method === 'Card');
        setShowUpiField(method === 'UPI Method');
    };
    const [showCardFields, setShowCardFields] = useState(false);
    const [showUpiField, setShowUpiField] = useState(false);
    return (
        <div className="payment-body">
            <div className="payment">
            <div className="payment-detials">
                <div className="payment-method">
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
                </div>

                {showCardFields && (
                    <div className="card-detials">
                        <MDBInput label="Card No" onChange={(e)=>{setBookingData({...bookingData,cardNo:e.target.value})}} />
                        <MDBInput label="Expiry Date" type="date" onChange={(e)=>{setBookingData({...bookingData,cardExpiry:e.target.value})}}/>
                        <MDBInput label="CVV" onChange={(e)=>{setBookingData({...bookingData,cvv:e.target.value})}} />
                    </div>
                )}

                {showUpiField && (
                    <div className='upi-id'>
                        <MDBInput label="UPI Id" onChange={(e)=>{setBookingData({...bookingData,upi:e.target.value})}}/>
                    </div>
                )}
            </div>

            <div className="billing-address">
            
            <div className="passenger">
                <MDBInput label="Name" value= {bookingData.name}disabled />
                <MDBInput label="Address" onChange={(e)=>{setBookingData({...bookingData,address:e.target.value})}} />
                </div>
                <div className="passenger">
                <MDBInput label="City" onChange={(e)=>{setBookingData({...bookingData,city:e.target.value})}}/>
                <MDBInput label="State" onChange={(e)=>{setBookingData({...bookingData,state:e.target.value})}}/>
                </div>
                <div className="passenger">
                <MDBInput label="Country" onChange={(e)=>{setBookingData({...bookingData,country:e.target.value})}} />
                <MDBInput label="Zip" onChange={(e)=>{setBookingData({...bookingData,zip:e.target.value})}}/>
                </div>
                <div className="passenger">
                <MDBInput label="Phone No" value={bookingData.phoneNo} disabled/>
                <MDBInput label="Email" onChange={(e)=>{setBookingData({...bookingData,email:e.target.value})}} />
                </div>

                <div className="passenger">
                <MDBInput label="Payment Method" value={bookingData.paymentMethod}  disabled/>
                <MDBInput label="Amount Payable " value={fare}  disabled/>
                </div>
                
            </div>
            </div>
            
        </div>
    )
}

export default Payment