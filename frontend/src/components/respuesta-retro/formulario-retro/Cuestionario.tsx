import Button from '@atlaskit/button';
import Form from '@atlaskit/form';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import { FC, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Stepper from '../../design-template/stepper/Stepper';
import {
  QuestionDB,
  formDataContext,
  questionsContext,
} from '../local_contexts';
import { ConfirmacionRetro, BackMyRetros } from '../modals';
import FormStep from './FormStep';

interface CuestionarioProps {
  idRetrospectiva: number;
}

const Cuestionario: FC<CuestionarioProps> = ({ idRetrospectiva }) => {
  const [formPage, setFormPage] = useState(1);
  const { formData } = useContext(formDataContext);
  const [isModalBackOpen, setIsModalBackOpen] = useState(false);
  const [isModalNextOpen, setIsModalNextOpen] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const [anonymousQuestions, setAnonymousQuestions] = useState<
    Array<string>
  >([]);

  const { questions } = useContext(questionsContext);

  useEffect(() => {
    if (isModalBackOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isModalBackOpen]);

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

  const handleSubmitWAnon = () => {
    console.log(formData, anonymousQuestions);
  };

  if (questions.length === 0)
    navigate(`/mis-retrospectivas/responder/${idRetrospectiva}`);

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white w-full h-full py-12 px-6 rounded border border-solid border-gray-300">
        <div className="w-full">
          <div>
            {isModalBackOpen && (
              <BackMyRetros setIsModalBackOpen={setIsModalBackOpen} />
            )}
          </div>
          <Button
            className="!items-center !text-[0.85rem]"
            appearance="subtle-link"
            iconBefore={
              <ArrowLeftIcon label="volver al panel de retrospectivas" />
            }
            onClick={() => setIsModalBackOpen(true)}
          >
            Volver al panel de retrospectivas
          </Button>
        </div>
        <div className="w-full px-60 flex flex-col items-center justify-center gap-8">
          <div className="w-5/12 flex items-center justify-center">
            <Stepper
              totalSteps={questions.length}
              currentStep={formPage}
            />
          </div>
          <Form onSubmit={handleSubmitWAnon}>
            {({ formProps, submitting }) => (
              <form
                {...formProps}
                className="flex flex-col items-center justify-center w-full mb-5 text-center"
              >
                {renderFormSteps(
                  questions,
                  setFormPage,
                  formPage,
                  anonymousQuestions,
                  setAnonymousQuestions,
                  setIsModalNextOpen
                )}
                {isModalNextOpen && (
                  <ConfirmacionRetro
                    setIsModalNextOpen={setIsModalNextOpen}
                    submitting={submitting}
                    onSubmit={formProps.onSubmit}
                  />
                )}
              </form>
            )}
          </Form>
        </div>
      </div>
    </>
  );
};

const renderFormSteps = (
  questions: QuestionDB[],
  setFormPage: (updater: (prev: number) => number) => void,
  formPage: number,
  anonymousQuestions: Array<string>,
  setAnonymousQuestions: (
    updater: (prev: Array<string>) => Array<string>
  ) => void,
  setIsModalNextOpen: (value: boolean) => void
): React.ReactNode[] => {
  return questions.map((question, index) => (
    <FormStep
      key={question.id_pregunta}
      numPregunta={index + 1}
      totalPreguntas={questions.length}
      setFormPage={setFormPage}
      formPage={formPage}
      anonymousQuestions={anonymousQuestions}
      setAnonymousQuestions={setAnonymousQuestions}
      setIsModalNextOpen={setIsModalNextOpen}
    />
  ));
};

export default Cuestionario;
