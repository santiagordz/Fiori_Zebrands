import { ReactComponent as IncognitoSVG } from '@/assets/icons/incognito.svg';
import Button from '@atlaskit/button';
import Flag from '@atlaskit/flag';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import CheckCircleOutlineIcon from '@atlaskit/icon/glyph/check-circle-outline';
import EditorHelpIcon from '@atlaskit/icon/glyph/editor/help';
import axios from 'axios';
import { FC, useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import type { Retrospectiva } from '../../../views/mis-retrospectivas/MisRetrospectivas';
import { formDataContext, questionsContext } from '../local-contexts';
import type { Respuestas } from './Cuestionario';

const URI = 'http://localhost:8000/respuesta';

interface AnswersProps {
  setIsRespuestas: (value: boolean) => void;
  retrospectivaData: Retrospectiva;
}

interface Answers {
  [key: number]: Respuestas;
}

const Answers: FC<AnswersProps> = ({
  setIsRespuestas,
  retrospectivaData,
}) => {
  const navigate = useNavigate();
  const { id_sesionRespuesta } = useParams();
  const { questions, setQuestions } = useContext(questionsContext);
  const { setFormData } = useContext(formDataContext);
  const [answers, setAnswers] = useState<Answers>({});

  const getAnswers = async () => {
    try {
      const { data } = await axios.get(
        `${URI}/${id_sesionRespuesta}`
      );

      data.map((answer: Respuestas) => {
        setAnswers((prevData) => {
          return {
            ...prevData,
            [answer.id_pregunta]: answer,
          };
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsRespuestas(true);
    getAnswers();
  }, []);

  const handleFinish = () => {
    setFormData({});
    setQuestions([]);
    setAnswers({});
    navigate('/mis-retrospectivas', { replace: true });
  };

  if (questions.length === 0) {
    return <Navigate to="/mis-retrospectivas" />;
  }

  return (
    <div className="flex py-5 flex-col gap-5">
      <div className="w-full">
        <Button
          appearance="subtle-link"
          onClick={handleFinish}
          iconBefore={<ArrowLeftIcon label="volver" />}
        >
          Volver al panel de retrospectivas
        </Button>
      </div>
      <div className="flex flex-col py-7 px-5 w-full rounded bg-white shadow-sm border-collapse items-center justify-center gap-4">
        <CheckCircleOutlineIcon
          label="retroCompletada"
          primaryColor="#1D7AFC"
          size="xlarge"
        />
        <p className="font-bold text-2xl">
          ¡Retrospectiva {retrospectivaData.titulo} completada con
          éxito!
        </p>
        <p className="text-sm">
          Tus respuestas han sido registradas correctamente.
        </p>
      </div>
      <div className="flex flex-col py-7 px-7 w-full rounded bg-white shadow-sm border-collapse gap-4">
        <div>
          <h3 className="">Resumen de tus respuestas</h3>
          <hr></hr>
        </div>
        <div id="quests" className="flex flex-col gap-6 !z-[1]">
          {questions &&
            questions.map((question) => {
              return (
                <div id="flag" key={question.id}>
                  <Flag
                    appearance="info"
                    icon={
                      <EditorHelpIcon
                        label="pregunta"
                        primaryColor="#"
                        size="medium"
                      />
                    }
                    id="info"
                    title={question.pregunta}
                    description={
                      <div className="mt-3 text-sm">
                        {answers[question.id]?.respuesta ? (
                          <p className="text-white">
                            {'Tu respuesta: ' +
                              answers[question.id]?.respuesta}
                          </p>
                        ) : (
                          <p className="text-gray-400">
                            No registraste una respuesta para esta
                            pregunta
                          </p>
                        )}
                        {answers[question.id]?.anonimo ? (
                          <div className="flex gap-2 opacity-60 mt-5 text-xs items-center">
                            <IncognitoSVG
                              width={15}
                              height={15}
                              fill="white"
                            />
                            Marcaste esta respuesta como anónima,
                            todas las respuestas de todo el equipo a
                            esta pregunta serán anónimas.
                          </div>
                        ) : null}
                      </div>
                    }
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Answers;
