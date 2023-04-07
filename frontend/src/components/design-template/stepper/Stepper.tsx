// Stepper.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CheckIcon from '@atlaskit/icon/glyph/check';

interface StepProps {
  stepNumber: number;
  currentStep: number;
  totalSteps: number;
}

const Step: React.FC<StepProps> = ({
  stepNumber,
  currentStep,
  totalSteps,
}) => {
  const stepClass = `aspect-square w-10 rounded-full flex items-center justify-center text-white ${
    stepNumber <= currentStep ? 'bg-selectBold' : 'bg-gray-300'
  }`;

  const handleSize = () => {
    if (currentStep === totalSteps) {
      return 0.4;
    } else if (totalSteps < 3 && totalSteps > 1) {
      return 0.9;
    } else {
      return 1.3;
    }
  };

  const stepVariant = {
    active: { scale: handleSize() },
    inactive: { scale: totalSteps < 3 && totalSteps > 1 ? 0.5 : 0.7 },
  };

  const checkmarkVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 0.9 },
  };

  const showCheckmark = stepNumber < currentStep;

  return (
    <motion.div
      className={stepClass}
      animate={stepNumber <= currentStep ? 'active' : 'inactive'}
      variants={stepVariant}
      transition={{ duration: 0.3 }}
    >
      {showCheckmark && (
        <motion.div
          variants={checkmarkVariant}
          className="w-full flex items-center justify-center"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3 }}
        >
          <CheckIcon label="checkmark" size="small" />
        </motion.div>
      )}
    </motion.div>
  );
};

interface StepperProps {
  totalSteps: number;
  currentStep: number;
}

const StepConnector: React.FC<{ filled: boolean }> = ({ filled }) => {
  const connectorClass = 'h-0.5 w-full bg-gray-300 ';

  const filledLineClass = 'h-0.5 bg-selectBold';

  const connectorVariant = {
    active: { width: '100%' },
    inactive: { width: '0' },
  };

  return (
    <div className={connectorClass}>
      <motion.div
        className={filledLineClass}
        initial="inactive"
        animate={filled ? 'active' : 'inactive'}
        variants={connectorVariant}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

const Stepper: React.FC<StepperProps> = ({
  totalSteps,
  currentStep,
}) => {
  const stepsWithConnectors = [];

  for (let i = 0; i < totalSteps; i++) {
    stepsWithConnectors.push(
      <Step
        key={`step-${i}`}
        stepNumber={i + 1}
        currentStep={currentStep}
        totalSteps={totalSteps}
      />
    );

    if (i < totalSteps - 1) {
      stepsWithConnectors.push(
        <StepConnector
          key={`connector-${i}`}
          filled={currentStep > i + 1}
        />
      );
    }
  }

  return (
    <div
      className={`flex items-center w-full py-6 px-3 ${
        totalSteps > 3 ? 'justify-between' : 'justify-center'
      }`}
    >
      {stepsWithConnectors}
    </div>
  );
};

export default Stepper;
