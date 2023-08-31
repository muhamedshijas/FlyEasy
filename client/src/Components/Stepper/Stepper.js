import React, { useState } from 'react'
import { Steps } from 'antd';
import PersonalDetials from '../Personal Detials/PersonalDetials';
import FlightDetials from '../FlightDetials/FlightDetials';
import Preferences from '../Preferences/Preferences';
import TravelDocuments from '../TravelDocuments/TravelDocuments';
import Payment from '../PaymentOption/Payment';
import BillingAddress from '../BillingAddress/BillingAddress';
import { useLocation } from 'react-router-dom';
import './Stepper.css'
import ReiviewBooking from '../Modal/ReiviewBooking';
const Step = Steps

function Stepper() {
  const location = useLocation();
  const flightDetials = location.state ? location.state.flightDetials : null;
  const [currentStep, setCurrentStep] = useState(0);
  const [showModal,setShowModal]=useState(false)
  const [bookingData,setBookingData]=useState({
    name:'Enter Your Name',
    email:'',
    phoneNo:0,
    isWindow:false,
    isSpecial:false,
    isMeals:false

  })

  const handleModal=()=>{
    setShowModal(true)
  }

  const steps = [
    {
      title: 'Flight Detials',
      content: <FlightDetials flightDetials={flightDetials} bookingData={bookingData} setBookingData={setBookingData}/>,
    }, {
      title: 'Passenger Detials',
      content: <PersonalDetials date={flightDetials.date} />,
    }, {
      title: 'Payment and Billing',
      content: <Payment />
    }

  ];

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <div>
      <Steps current={currentStep}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[currentStep].content}</div>
      <div className="steps-action">
        {currentStep > 0 && (
          <button className="btn" onClick={prevStep}>
            Previous
          </button>
        )}
        {currentStep < steps.length - 1 && (
          <button className="btn" onClick={nextStep}>
            Next
          </button>
        )}
        {currentStep === steps.length - 1 && (
          <button className="btn" onClick={handleModal}>
            Review
          </button>
        )}
      </div>
      {showModal&&<ReiviewBooking setShowModal={setShowModal} bookingData={bookingData} flightDetials={flightDetials} />}
    </div>
  );
}


export default Stepper