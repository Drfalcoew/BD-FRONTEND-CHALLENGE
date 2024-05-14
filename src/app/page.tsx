"use client";

import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Stepper from "./stepper/stepper";
import Account from "./steps/account";
import Address from "./steps/address";
import Preferences from "./steps/preferences";

export interface StepProps {
  onNext: () => void;
  onPrev: () => void;
  formData: any;
  updateFormData: (data: any) => void;
}

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<any>({});

  const handleUpdateFormData = (data: any) => {
    console.log(data);
    setFormData((prev: any) => ({...prev, ...data}));
  }

  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      // Submit the form if we're on the last step

      fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        // Send to success page
        alert(data.data.message);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  
      return;
    };
  
    setCurrentStep((prev) => prev + 1);
  }

  const handlePrev = () => {
    if (currentStep === 0) return;
    setCurrentStep((prev) => prev - 1);
  }

  const steps = [
    {component: <Account onNext={handleNext} onPrev={handlePrev} formData={formData} updateFormData={handleUpdateFormData} />, label: 'Account'},
    {component: <Address onNext={handleNext} onPrev={handlePrev} formData={formData} updateFormData={handleUpdateFormData} />, label: 'Address'},
    {component: <Preferences onNext={handleNext} onPrev={handlePrev} formData={formData} updateFormData={handleUpdateFormData} />, label: 'Preferences'},
  ];

  return (
    <main className="w-screen h-screen flex flex-col gap-8 justify-center items-center max-w-2xl mx-auto">
      <div className="form-container">
        <h1 className="form-header text-3xl font-semibold text-center">{steps[currentStep].label}</h1>
        <div className="form-content">
          <Stepper step={currentStep}/>
          {steps[currentStep].component}
        </div>
      </div>
    </main>
  );
}
