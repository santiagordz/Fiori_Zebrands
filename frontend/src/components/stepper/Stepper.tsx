// Stepper.tsx
import React, { useState } from 'react';

interface StepProps {
  stepNumber: number;
  currentStep: number;
}

const Step: React.FC<StepProps> = ({ stepNumber, currentStep }) => {
  const stepClass = `w-8 h-8 rounded-full flex items-center justify-center text-white ${
    stepNumber <= currentStep ? 'bg-blue-500' : 'bg-blue-200'
  }`;
  return <div className={stepClass}>{stepNumber}</div>;
};

interface StepperProps {
  totalSteps: number;
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({
  totalSteps,
  currentStep,
}) => {
  return (
    <div className="flex space-x-4">
      {Array.from({ length: totalSteps }, (_, index) => (
        <Step
          key={index}
          stepNumber={index + 1}
          currentStep={currentStep}
        />
      ))}
    </div>
  );
};

export default Stepper;
