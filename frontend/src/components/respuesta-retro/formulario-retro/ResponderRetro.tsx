import axios from 'axios';
import { FC, useContext, useEffect, useState } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import Spinner from '../../design-template/spinner/Spinner';
import {
  FormDataProvider,
  QuestionsProvider,
} from '../local-contexts';
import RetrospectivaGeneral from '../reusable/RetrospectivaGeneral';
import Answers from './Answers';
import Cuestionario from './Cuestionario';
import ResponderRetroInfo from './ResponderRetroInfo';
import type { Retrospectiva } from '../../../views/mis-retrospectivas/MisRetrospectivas';
import { userDataContext } from '../../../contexts';

const URI = 'http://localhost:8000/retrospectivas';

interface ResponderRetroProps {
  retroPendientes: Retrospectiva;
}

const ResponderRetro: FC<ResponderRetroProps> = ({
  retroPendientes,
}) => {
  const { user } = useContext(userDataContext);
  const location = useLocation();
  const [isRespuestas, setIsRespuestas] = useState<boolean>(false);
  const [retrospectivaData, setRetrospectivaData] =
    useState<Retrospectiva>(null!);
  const { retroId } = useParams();

  const getOne = async () => {
    const { data: retrospectiva } = await axios.get(
      `${URI}/one/${retroId}/${user?.id}`
    );
    const { data: tags } = await axios.get(`${URI}/tags/${retroId}`);
    setRetrospectivaData((prevState) => ({
      ...prevState,
      ...retrospectiva,
      tags: tags,
    }));
  };

  useEffect(() => {
    if (!location.pathname.includes('respuestas')) {
      setIsRespuestas(false);
    }

    getOne();
  }, []);

  if (!retrospectivaData) {
    if (retroId === '-1')
      return <Navigate to="/mis-retrospectivas" />;
    return <Spinner message="Cargando retrospectiva..." />;
  }

  if (retrospectivaData.completada)
    return <Navigate to="/mis-retrospectivas" />;

  return (
    <QuestionsProvider>
      <div className="flex flex-col gap-4">
        {!isRespuestas && (
          <RetrospectivaGeneral
            idRetrospectiva={retrospectivaData.id || -1}
            titulo={retrospectivaData.titulo || ''}
            descripcion={retrospectivaData.descripcion || ''}
            fechaInicio={retrospectivaData.fecha_inicio || ''}
            tags={retrospectivaData.tags}
          />
        )}
        <Routes>
          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route
            path="/"
            element={
              <>
                <ResponderRetroInfo />
              </>
            }
          />
          <Route
            path="/preguntas/"
            element={
              <FormDataProvider>
                <Cuestionario />
              </FormDataProvider>
            }
          />
          <Route
            path="/respuestas/:id_sesionRespuesta"
            element={
              <Answers
                setIsRespuestas={setIsRespuestas}
                retrospectivaData={retrospectivaData}
              />
            }
          />
        </Routes>
      </div>
    </QuestionsProvider>
  );
};

export default ResponderRetro;
