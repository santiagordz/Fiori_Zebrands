import Flag from '@atlaskit/flag';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import CheckCircleOutlineIcon from '@atlaskit/icon/glyph/check-circle-outline';
import EditorHelpIcon from '@atlaskit/icon/glyph/editor/help';
import { FC, useContext, useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import axios from 'axios';
import { questionsContext, formDataContext } from '../local-contexts';
import type { Respuestas } from './Cuestionario';

const URI = 'http://localhost:8000/respuesta';

interface AnswersProps {}

interface Answers {
  [key: number]: Respuestas;
}

const Answers: FC<AnswersProps> = ({}) => {
  const { retroId, id_sesionRespuesta } = useParams();
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
    getAnswers();
    console.log(answers);
  }, []);

  if (questions.length === 0) {
    return <Navigate to="/mis-retrospectivas" />;
  }

  // ! QUITAR LA RETROSPECTIVA GENERAL DE ESTA PANTALLA, AGREGAR SI FUE ENVIADA COMO ANÓNIMA

  return (
    <div className="flex py-5 flex-col gap-5">
      <div className="w-full">
        <Link
          to="/mis-retrospectivas"
          className="flex flex-row items-center w-fit gap-2"
        >
          <ArrowLeftIcon label="volver" />
          Volver al panel de retrospectivas
        </Link>
      </div>
      <div className="flex flex-col py-7 px-5 w-full rounded bg-white border border-solid border-gray-300 border-collapse items-center justify-center gap-4">
        <CheckCircleOutlineIcon
          label="retroCompletada"
          primaryColor="#1D7AFC"
          size="xlarge"
        />
        <p className="font-bold text-2xl">
          ¡Retrospectiva Sprint 3 completada con éxito!
        </p>
        <p className="text-sm">
          Tus respuestas han sido registradas correctamente.
        </p>
      </div>
      <div className="flex flex-col py-7 px-7 w-full rounded bg-white border border-solid border-gray-300 border-collapse gap-4">
        <div>
          <h3 className="">Resumen de tus respuestas</h3>
          <hr></hr>
        </div>
        <div id="quests" className="flex flex-col gap-6 !z-[1]">
          {questions &&
            questions.map((question) => {
              return (
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
                  key={question.id}
                  title={question.pregunta}
                  description={
                    (answers[question.id]?.respuesta &&
                      'Tu respuesta: ' +
                        answers[question.id]?.respuesta) ||
                    'No registraste una respuesta para esta pregunta'
                  }
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Answers;
