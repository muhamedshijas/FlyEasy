import React, { useState } from 'react'
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
  )
}

export default Payment