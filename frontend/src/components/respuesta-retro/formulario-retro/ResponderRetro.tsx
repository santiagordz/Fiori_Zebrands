import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  Navigate,
} from 'react-router-dom';
import Spinner from '../../design-template/spinner/Spinner';
import { FormDataProvider, QuestionsProvider } from '../contexts';
import RetrospectivaGeneral from '../reusable/RetrospectivaGeneral';
import Answers from './Answers';
import Cuestionario from './Cuestionario';
import ResponderRetroInfo from './ResponderRetroInfo';

const URI = 'http://localhost:8000/retrospectivas';

interface Retrospectiva {
  id_retrospectiva: number;
  titulo: string;
  descripcion: string;
  fecha_inicio: string;
  fecha_fin: string;
}

const ResponderRetro = ({}) => {
  const location = useLocation();
  const [isRespuestas, setIsRespuestas] = useState<boolean>(false);
  const [retrospectivaData, setRetrospectivaData] =
    useState<Retrospectiva>(null!);
  const { retroId } = useParams();

  const getOne = async () => {
    const { data } = await axios.get(`${URI}/one/${retroId}`);
    setRetrospectivaData(data);
  };

  useEffect(() => {
    if (location.pathname.includes('respuestas')) {
      setIsRespuestas(true);
    } else {
      setIsRespuestas(false);
    }

    getOne();
  }, []);

  if (!retrospectivaData) {
    return <Spinner message="Cargando retrospectiva" />;
  }

  return (
    <QuestionsProvider>
      <div className="flex flex-col gap-4">
        {!isRespuestas && (
          <RetrospectivaGeneral
            idRetrospectiva={retrospectivaData.id_retrospectiva || -1}
            titulo={retrospectivaData.titulo || ''}
            descripcion="FALTA EN DB"
            fechaInicio={retrospectivaData.fecha_inicio || ''}
          />
        )}
        <Routes>
          {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
          <Route path="/" element={<ResponderRetroInfo />} />
          <Route
            path={`/:retroId/preguntas/`}
            element={
              <FormDataProvider>
                <Cuestionario />
              </FormDataProvider>
            }
          />
          <Route
            path={`/:retroId/respuestas/`}
            element={<Answers />}
          />
        </Routes>
      </div>
    </QuestionsProvider>
  );
};

export default ResponderRetro;
