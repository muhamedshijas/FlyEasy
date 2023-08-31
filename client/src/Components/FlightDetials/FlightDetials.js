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

                    <Radio.Group defaultValue="economy" size="default" onChange={(e)=>{setBookingData({...bookingData,TypeOfTravel:e.target.value})}}>
                        <Radio value="Premium First Class">Premium First Class</Radio>
                        <Radio value="First Class">First Class</Radio>
                        <Radio value="Business Class">Business Class</Radio>
                        <Radio value="Premium Economy ">Premium Economy</Radio>
                        <Radio value="Economy ">Economy</Radio>
                    </Radio.Group>
                </div>
                <div className="seats">
                
                <MDBInput label="Adults" type="number" max={10} onChange={(e)=>{setBookingData({...bookingData,NoOfAdults:e.target.value})}} />
                <MDBInput label="Childrens" type="number" max={10} onChange={(e)=>{setBookingData({...bookingData,NoOfChildrens:e.target.value})}}/>
                </div>

            </div>
        </div>
    )
}

export default FlightDetials