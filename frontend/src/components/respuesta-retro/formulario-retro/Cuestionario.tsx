import Button from '@atlaskit/button';
import Form from '@atlaskit/form';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import { FC, useContext, useEffect, useState } from 'react';
import { preguntas } from '../RetroDomi';
import { formDataContext } from './FormDataProvider';
import FormStep from './FormStep';
import { BackMyRetros } from './ModalsForm';
import Stepper from '../../stepper/Stepper';
import { useLocation } from 'react-router-dom';
import { getItems } from './functions';

interface CuestionarioProps {}

const Cuestionario: FC<CuestionarioProps> = ({}) => {
  const [formPage, setFormPage] = useState(0);
  const { formData } = useContext(formDataContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const items = getItems(formPage);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [location]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-white w-full h-full py-12 px-6 rounded border border-solid border-gray-300">
        <div className="w-full">
          <div>
            {isModalOpen && (
              <BackMyRetros setIsModalOpen={setIsModalOpen} />
            )}
          </div>
          <Button
            className="!items-center !text-[0.85rem]"
            appearance="subtle-link"
            iconBefore={
              <ArrowLeftIcon label="volver a mis retrospectivas" />
            }
            onClick={() => setIsModalOpen(true)}
          >
            Volver a mis retrospectivas
          </Button>
        </div>
        <div className="w-full px-60 flex flex-col items-center justify-center gap-8">
          <div className="w-1/3 flex items-center justify-center">
            {/* <ProgressTracker items={items} spacing="compact" /> */}
            <Stepper totalSteps={3} currentStep={currentStep} />
          </div>
          <Form onSubmit={() => console.log(formData)}>
            {({ formProps }) => (
              <form
                {...formProps}
                className="flex flex-col items-center justify-center w-full mb-5 text-center"
              >
                <FormStep
                  numPregunta={
                    preguntas.indexOf(preguntas[formPage]) + 1
                  }
                  totalPreguntas={items.length}
                  pregunta={preguntas[formPage].pregunta}
                  idTipoPregunta={
                    preguntas[formPage].tipo.id_tipo_pregunta
                  }
                  setFormPage={setFormPage}
                  idPregunta={preguntas[formPage].id_pregunta}
                />
              </form>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Cuestionario;
