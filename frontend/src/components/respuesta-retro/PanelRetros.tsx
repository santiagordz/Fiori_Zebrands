import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import Spinner from '../design-template/spinner/Spinner';
import RetrospectivaGeneral from './reusable/RetrospectivaGeneral';

const URI = 'http://localhost:8000/retrospectivas';

interface PanelRetrosProps {}

interface Retrospectiva {
  id_retrospectiva: number;
  titulo: string;
  descripcion: string;
  fecha_inicio: string;
  fecha_fin: string;
}

const PanelRetros: FC<PanelRetrosProps> = ({}) => {
  const [retroPendientes, setRetroPendientes] = useState<
    Array<Retrospectiva>
  >([]);
  const [otrasRetros, setOtrasRetros] = useState<
    Array<Retrospectiva>
  >([]);

  const getRetrospectivas = async () => {
    const response = await axios.get(`${URI}/panelRetros`);
    setRetroPendientes(response.data);
  };

  useEffect(() => {
    getRetrospectivas();
  }, []);

  if (retroPendientes.length === 0)
    return <Spinner message="Cargando retrospectivas..." />;

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-lg font-bold text-information">
        Retrospectivas pendientes de responder
      </h2>
      <div className="flex flex-col gap-5">
        {retroPendientes &&
          retroPendientes.map((retrospectiva: Retrospectiva) => {
            return (
              <RetrospectivaGeneral
                idRetrospectiva={retrospectiva.id_retrospectiva || -1}
                titulo={retrospectiva.titulo || ''}
                descripcion={retrospectiva.descripcion || ''}
                fechaInicio={retrospectiva.fecha_inicio || ''}
              />
            );
          })}
      </div>
      <h2 className="text-lg font-bold text-information">
        Otras Retrospectivas
      </h2>
    </div>
  );
};

export default PanelRetros;
