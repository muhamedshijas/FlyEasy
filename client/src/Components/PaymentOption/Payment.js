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

function Payment() {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Select Payment Method');
    const handlePaymentMethodSelect = (method) => {
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
                        <MDBInput label="Card No" onChange={(e) => setCardNo(e.target.value)} />
                        <MDBInput label="Expiry Date" onChange={(e) => setCardDate(e.target.value)} />
                        <MDBInput label="CVV" onChange={(e) => setCvv(e.target.value)} />
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
            
        </div>
    )
}

export default Payment