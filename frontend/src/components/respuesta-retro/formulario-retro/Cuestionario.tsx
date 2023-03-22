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

interface CuestionarioProps {}

const Cuestionario: FC<CuestionarioProps> = ({}) => {
  const [formPage, setFormPage] = useState(1);
  const { formData } = useContext(formDataContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const [anonymousQuestions, setAnonymousQuestions] = useState<
    Array<string>
  >([]);

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
  }, [location.pathname]);

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
          <div className="w-5/12 flex items-center justify-center">
            <Stepper
              totalSteps={preguntas.length}
              currentStep={formPage}
            />
          </div>
          <Form onSubmit={() => console.log(formData)}>
            {({ formProps }) => (
              <form
                {...formProps}
                className="flex flex-col items-center justify-center w-full mb-5 text-center"
              >
                {renderFormSteps(
                  preguntas,
                  setFormPage,
                  formPage,
                  anonymousQuestions,
                  setAnonymousQuestions
                )}
              </form>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

interface Pregunta {
  id_pregunta: number;
  pregunta: string;
  tipo: {
    id_tipo_pregunta: number;
  };
}

const renderFormSteps = (
  preguntas: Pregunta[],
  setFormPage: (updater: (prev: number) => number) => void,
  formPage: number,
  anonymousQuestions: Array<string>,
  setAnonymousQuestions: (
    updater: (prev: Array<string>) => Array<string>
  ) => void
): React.ReactNode[] => {
  return preguntas.map((pregunta, index) => (
    <FormStep
      key={pregunta.id_pregunta}
      numPregunta={index + 1}
      totalPreguntas={preguntas.length}
      pregunta={pregunta.pregunta}
      idTipoPregunta={pregunta.tipo.id_tipo_pregunta}
      setFormPage={setFormPage}
      formPage={formPage}
      idPregunta={pregunta.id_pregunta}
      anonymousQuestions={anonymousQuestions}
      setAnonymousQuestions={setAnonymousQuestions}
    />
  ));
};

export default Cuestionario;
