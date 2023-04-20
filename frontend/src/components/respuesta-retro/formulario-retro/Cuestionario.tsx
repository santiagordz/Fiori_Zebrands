import Button from '@atlaskit/button';
import Form from '@atlaskit/form';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import axios from 'axios';
import { FC, useContext, useEffect, useState } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { userDataContext } from '../../../contexts';
import Stepper from '../../design-template/stepper/Stepper';
import {
  QuestionDB,
  formDataContext,
  questionsContext,
} from '../local-contexts';
import { BackMyRetros, ConfirmacionRetro } from '../modals';
import FormStep from './FormStep';

const URI = `/api/respuesta/new`;
const URI_COMPLETE = `${
  import.meta.env.VITE_APP_BACKEND_URI
}/respuesta/update`;

interface CuestionarioProps {}

export interface Respuestas {
  respuesta: string;
  anonimo: boolean;
  id_usuario: number | null;
  id_pregunta: number;
  id_retrospectiva: number;
  id_sesionRespuesta: string;
}

const Cuestionario: FC<CuestionarioProps> = ({}) => {
  const { user } = useContext(userDataContext);
  const [formPage, setFormPage] = useState(1);
  const { formData, setFormData } = useContext(formDataContext);
  const [isModalBackOpen, setIsModalBackOpen] = useState(false);
  const [isModalNextOpen, setIsModalNextOpen] = useState(false);
  const [id_sesionRespuesta, setId_sesionRespuesta] = useState('');
  const { retroId } = useParams();

  const location = useLocation();
  const [anonymousQuestions, setAnonymousQuestions] = useState<
    Array<number>
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

  const markCompleted = async () => {
    try {
      await axios.post(
        `${URI_COMPLETE}/${retroId}/${user?.id_usuario}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitWAnon = () => {
    const answers: Array<Respuestas> = [];
    if (formData !== null) {
      questions.map((question: QuestionDB) => {
        if (formData[question.id]) {
          answers.push({
            respuesta: formData[question.id] as string,
            anonimo: anonymousQuestions.includes(question.id)
              ? true
              : false,
            id_usuario: anonymousQuestions.includes(question.id)
              ? null
              : (user?.id_usuario as number),
            id_retrospectiva: parseInt(retroId!),
            id_pregunta: question.id,
            id_sesionRespuesta: id_sesionRespuesta,
          });
        }
      });
    }

    if (answers.length !== 0) {
      answers.map(async (answer) => {
        try {
          await axios.post(URI, answer);
        } catch (error) {
          console.log(error);
        }
      });
    }

    markCompleted();
  };

  if (questions.length === 0)
    return (
      <Navigate
        to={`/mis-retrospectivas/responder/${retroId}`}
        replace
      />
    );
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white w-full h-full py-12 px-6 rounded shadow-sm">
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
        <div className="w-full px-8 lg:px-60 flex flex-col items-center justify-center gap-8">
          <div className="lg:w-5/12 flex items-center justify-center">
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
                  setIsModalNextOpen,
                  setId_sesionRespuesta
                )}
                {isModalNextOpen && (
                  <ConfirmacionRetro
                    setIsModalNextOpen={setIsModalNextOpen}
                    submitting={submitting}
                    onSubmit={formProps.onSubmit}
                    id_sesionRespuesta={id_sesionRespuesta}
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
  anonymousQuestions: Array<number>,
  setAnonymousQuestions: (
    updater: (prev: Array<number>) => Array<number>
  ) => void,
  setIsModalNextOpen: (value: boolean) => void,
  setId_sesionRespuesta: (value: string) => void
): React.ReactNode[] => {
  return questions.map((question, index) => (
    <FormStep
      key={question.id}
      numPregunta={index + 1}
      totalPreguntas={questions.length}
      setFormPage={setFormPage}
      formPage={formPage}
      anonymousQuestions={anonymousQuestions}
      setAnonymousQuestions={setAnonymousQuestions}
      setIsModalNextOpen={setIsModalNextOpen}
      setId_sesionRespuesta={setId_sesionRespuesta}
    />
  ));
};

export default Cuestionario;
