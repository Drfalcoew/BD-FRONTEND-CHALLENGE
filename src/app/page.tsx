"use client";

import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Stepper from "./stepper/stepper";
import stepsModel from "./stepsModel";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  }

  return (
    <main className="w-screen h-screen flex flex-col gap-8 justify-center items-center max-w-2xl mx-auto">
      <div className="form-container">
        <h1 className="form-header text-3xl font-semibold text-center">{stepsModel[currentStep].label}</h1>
        <div className="form-content">
          <Stepper step={currentStep}/>
        </div>
      </div>
    </main>
  );
}
