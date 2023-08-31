import React from 'react'
import { SwapOutlined } from '@ant-design/icons';
import './FlightDetials.css'
import { Radio } from 'antd';
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

function FlightDetials({ flightDetials,setBookingData,bookingData}) {

    console.log(flightDetials)
    return (
        <div className="travel-detials-body">
            <div className="travel-detials">
                <div className="choosed-airline">
                    <p>{flightDetials.name}</p>
                </div>
                <div className="destination text-primary">
                    {flightDetials.from} <SwapOutlined /> {flightDetials.to}
                </div>


                <div className="preferences">
                    <div className="item-one">
                        <label>
                            <MDBCheckbox checked={bookingData.isWindow}  onChange={(e)=>{setBookingData({...bookingData, isWindow:e.target.checked})}}/>
                            Window Seat
                        </label>
                    </div>
                    <div className="item-one">
                        <label>
                            <MDBCheckbox checked={bookingData.isMeals}  onChange={(e)=>{setBookingData({...bookingData, isMeals:e.target.checked})}}/>
                            Inflight-meals
                        </label>
                    </div>
                    <div className="item-one">
                        <label>
                            <MDBCheckbox checked={bookingData.isSpecial}  onChange={(e)=>{setBookingData({...bookingData, isSpecial:e.target.checked})}}/>
                            Special assistance or accommodations
                        </label>
                    </div>
                </div>
                <div className="class-selection">

                    <Radio.Group defaultValue="economy" size="default">
                        <Radio value="first">Premium First Class</Radio>
                        <Radio value="first">First Class</Radio>
                        <Radio value="business">Business Class</Radio>
                        <Radio value="premium-economy">Premium Economy</Radio>
                        <Radio value="economy">Economy</Radio>
                    </Radio.Group>
                </div>
                <div className="seats">
                
                <MDBInput label="Adults" type="number" max={10}/>
                <MDBInput label="Childrens" type="number" max={10}/>
                </div>

            </div>
        </div>
    )
}

export default FlightDetials