import React, { useState } from 'react'
import { Steps } from 'antd';
import PersonalDetials from '../Personal Detials/PersonalDetials';
import FlightDetials from '../FlightDetials/FlightDetials';
import Preferences from '../Preferences/Preferences';
import TravelDocuments from '../TravelDocuments/TravelDocuments';
import Payment from '../PaymentOption/Payment';
import BillingAddress from '../BillingAddress/BillingAddress';
const Step = Steps

function Stepper() {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        {
            title: 'Step 1',
            content: <PersonalDetials />,
        },{
            title: 'Step 2',
            content: <FlightDetials />,
        },{
            title:'Step 3',
            content:<Preferences/>
        },{
            title:'Step 4',
            content:<TravelDocuments/>
        },{
            title:'step 5',
            content:<Payment/>
        },{
            title:'step 6',
            content:<BillingAddress/>
        }

    ];

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };
    return  (<div>
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
      </div>
    </div>
  );
}


export default Stepper