import React, { FC, useState } from 'react';
import Button from '@atlaskit/button';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import Stepper from '../../design-template/stepper/Stepper';
import Form from '@atlaskit/form';
import { stepsInformation } from './steps/stepsInformation';
import { Step2 } from './steps';

interface NuevaRetrospectivaProps {}

const NuevaRetrospectiva: FC<NuevaRetrospectivaProps> = ({}) => {
  const [stepNumber, setStepNumber] = useState(1);

  return (
    <>
      <div className="flex flex-col gap-5 bg-[#ffffff] py-5 px-5 rounded-sm shadow-sm">
        <h2 className="font-semibold text-information">
          Nueva retrospectiva
        </h2>
      </div>
      <div className="flex flex-col gap-5 bg-[#ffffff] py-5 px-5 rounded-sm shadow-sm mt-2">
        <div className="w-full">
          <Button
            className="!items-center !text-[0.85rem]"
            appearance="subtle-link"
            iconBefore={
              <ArrowLeftIcon label="volver a gestionar retrospectivas" />
            }
            // onClick={() => setIsModalBackOpen(true)}
          >
            Volver a gestionar retrospectivas
          </Button>
        </div>
        <div className="w-full px-28 flex flex-col items-center justify-center gap-8">
          <div className="w-4/12 flex items-center justify-center">
            <Stepper totalSteps={3} currentStep={stepNumber} />
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-9">
            <div className="flex flex-col items-center justify-center gap-10 w-full">
              <div className="flex flex-col items-center justify-center gap-1 w-full text-center">
                <p className="uppercase text-selectBold text-xs font-bold">
                  Paso {stepNumber}/{stepsInformation.length}
                </p>
                <h2 className="text-[#5E4DB2] text-xl font-bold mt-1">
                  {stepsInformation[stepNumber - 1].title}
                </h2>
                <p className="text-sm text-subtle">
                  {stepsInformation[stepNumber - 1].description}
                </p>
              </div>
              <Form onSubmit={(data) => console.log(data)}>
                {({ formProps }) => (
                  <form
                    {...formProps}
                    className="flex flex-col items-center justify-center w-full mb-5 text-center"
                  >
                    <Step2
                      setStepNumber={setStepNumber}
                      stepNumber={stepNumber}
                    />
                  </form>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NuevaRetrospectiva;
