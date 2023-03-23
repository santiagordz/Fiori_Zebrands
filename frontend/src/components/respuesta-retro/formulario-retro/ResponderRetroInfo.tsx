import Button from '@atlaskit/button';
import {
  FC,
  useCallback,
  useEffect,
  useState,
  useContext,
} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Team from '../../../assets/team.png';
import { Recordatorios } from '../modals';
import { questionsContext } from '../local_contexts';
import axios from 'axios';

const URI = 'http://localhost:8000/retrospectivas';

interface ReponderRetroInfoProps {}

const ReponderRetroInfo: FC<ReponderRetroInfoProps> = ({}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { questions, setQuestions } = useContext(questionsContext);
  const { retroId } = useParams();

  const getQuestions = async () => {
    const response = await axios
      .get(`${URI}/questions/${retroId}`)
      .then((res) => {
        setQuestions(res.data);
        res.data.length !== 0 && setIsOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (isOpen && questions.length !== 0) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  return (
    <>
      <div className="flex flex-col py-8  w-full rounded bg-white border border-solid border-gray-300 border-collapse justify-center items-center px-20 gap-10">
        <h2 className="flex font-bold w-full">
          Responder pregunta de retrospectiva
        </h2>
        <div className="flex w-full bg-purple-100 py-10 px-8 h-fit gap-10 items-center justify-center rounded-sm">
          <img src={Team} className="h-36" />
          <div className="flex gap-5 flex-col">
            <h3 className="font-bold w-full text-discovery">
              ¡Hemos concluido con un Sprint, bien hecho!
            </h3>
            <p className="text-sm">
              Es hora de mirar hacia atrás y reflexionar sobre lo que
              logramos en el Sprint. Antes de responder algunas
              preguntas, te recomendamos que{' '}
              <Link to="/metricas" className="text-link underline">
                revises tus métricas
              </Link>{' '}
              para que puedas responder con confianza y precisión.
              ¡Vamos a ello!
            </p>
          </div>
        </div>
        <div className="flex gap-14">
          <Button appearance="link" onClick={() => navigate(-1)}>
            Regresar al panel de retrospectivas
          </Button>
          <Button appearance="primary" onClick={() => getQuestions()}>
            Iniciar retrospectiva
          </Button>
        </div>
      </div>
      <div>
        {isOpen && questions.length !== 0 && (
          <Recordatorios setIsOpen={setIsOpen} />
        )}
      </div>
    </>
  );
};

export default ReponderRetroInfo;
