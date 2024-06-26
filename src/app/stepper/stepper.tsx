import React from 'react';
import { useState } from 'react';
import './stepper.css';


interface StepperProps {
    step: number;
}

const Step = (num: number, selected: boolean) => {
    return (
        <div className={`step ${selected && 'step-selected'}`}>
            {num}
        </div>   
    );
}

const Stepper: React.FC<StepperProps> = ({ step }) => {

    const steps = [0, 1, 2];

    return (
        <div className="stepper-container">
            {steps.map((s, i) => {
                return (
                    <React.Fragment key={i}>
                        {Step(s, step === s)}
                        {i !== steps.length - 1 && <div className="divider"></div>}
                    </React.Fragment>
                );
            })}
        </div>
    );
}

export default Stepper;