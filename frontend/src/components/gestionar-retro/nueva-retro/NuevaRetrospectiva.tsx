import Button from '@atlaskit/button';
import Form from '@atlaskit/form';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import CheckCircleIcon from '@atlaskit/icon/glyph/check-circle';
import ErrorIcon from '@atlaskit/icon/glyph/error';
import axios from 'axios';
import { customAlphabet } from 'nanoid';
import { FC, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FlagContext } from '../../../contexts';
import Stepper from '../../design-template/stepper/Stepper';
import BackGestionar from '../modals/BackGestionar';
import { newRetroContext } from './local-contexts';
import { Step1, Step2, Step3, Step4 } from './steps';
import { stepsInformation } from './steps/stepsInformation';

const URI = `/api/retrospectivas/new`;

interface NuevaRetrospectivaProps {}

const NuevaRetrospectiva: FC<NuevaRetrospectivaProps> = ({}) => {
  const { addFlag } = useContext(FlagContext);
  const navigate = useNavigate();
  const nanoid = customAlphabet('1234567890', 10);
  const { newRetro, setNewRetro } = useContext(newRetroContext);
  const [stepNumber, setStepNumber] = useState(1);
  const [isModalBackOpen, setIsModalBackOpen] = useState(false);

  const handleSubmit = async () => {
    const retroId = Number(nanoid());
    try {
      await axios.post(URI, { ...newRetro, id: retroId });
      navigate('/gestionar-retrospectivas');
      addFlag(
        '¡Genial! Tu retrospectiva se ha registrado correctamente.',
        CheckCircleIcon,
        'success',
        'Ahora puedes verla en el panel de gestión de retrospectivas y todos los usuarios podrán comenzar a contestarla.'
      );
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        addFlag(
          '¡Oh no! Hubo un error al iniciar la retrospectiva. Por favor, inténtalo de nuevo más tarde o contacta soporte.',
          ErrorIcon,
          'error',
          error.toString()
        );
      } else {
        console.log(error);
        addFlag(
          '¡Oh no! Hubo un error al iniciar la retrospectiva. Por favor, inténtalo de nuevo más tarde o contacta soporte.',
          ErrorIcon,
          'error',
          'Error desconocido'
        );
      }
    }
  };

  return (
    <>
      <div className="flex flex-col gap-5 bg-[#ffffff] py-5 px-5 rounded-sm shadow-sm">
        {isModalBackOpen && (
          <BackGestionar setIsModalBackOpen={setIsModalBackOpen} />
        )}
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
            onClick={() => setIsModalBackOpen(true)}
          >
            Volver al panel de gestión de retrospectivas
          </Button>
        </div>
        <div className="w-full px-28 flex flex-col items-center justify-center gap-8">
          <div className="w-4/12 flex items-center justify-center">
            <Stepper
              totalSteps={stepsInformation.length}
              currentStep={stepNumber}
            />
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
              <Form onSubmit={handleSubmit}>
                {({ formProps }) => (
                  <form
                    {...formProps}
                    className="flex flex-col items-center justify-center w-full mb-5 text-center"
                  >
                    <Step1
                      setStepNumber={setStepNumber}
                      stepNumber={stepNumber}
                    />

                    <Step2
                      setStepNumber={setStepNumber}
                      stepNumber={stepNumber}
                    />

                    <Step3
                      setStepNumber={setStepNumber}
                      stepNumber={stepNumber}
                    />

                    <Step4
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
