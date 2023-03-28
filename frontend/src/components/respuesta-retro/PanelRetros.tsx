import axios from 'axios';
import { FC, useContext, useEffect, useState } from 'react';
import Spinner from '../design-template/spinner/Spinner';
import RetrospectivaGeneral from './reusable/RetrospectivaGeneral';
import { userDataContext } from '../../contexts';
import CheckIcon from '@atlaskit/icon/glyph/check';

const URI = 'http://localhost:8000/retrospectivas';

interface PanelRetrosProps {}

interface Retrospectiva {
  id: number;
  titulo: string;
  descripcion: string;
  fecha_inicio: string;
  fecha_fin: string;
}

const PanelRetros: FC<PanelRetrosProps> = ({}) => {
  const [retroPendientes, setRetroPendientes] = useState<
    Array<Retrospectiva>
  >([]);
  const [retrosCompletadas, setRetrosCompletadas] = useState<
    Array<Retrospectiva>
  >([]);
  const [otrasRetros, setOtrasRetros] = useState<
    Array<Retrospectiva>
  >([]);
  const { user } = useContext(userDataContext);
  console.log(user);

  const getRetrospectivas = async () => {
    const response = await axios.get(`${URI}/panelRetrosByUser`, {
      params: { id_usuario: user?.id || -1 },
    });
    const pendientes = response.data.filter(
      (
        retro: Retrospectiva & {
          completada: boolean;
          asignada: boolean;
        }
      ) => !retro.completada && retro.asignada
    );
    const completadas = response.data.filter(
      (
        retro: Retrospectiva & {
          completada: boolean;
          asignada: boolean;
        }
      ) => retro.completada && retro.asignada
    );
    const otras = response.data.filter(
      (
        retro: Retrospectiva & {
          completada: boolean;
          asignada: boolean;
        }
      ) => !retro.asignada
    );
    setRetroPendientes(pendientes);
    setRetrosCompletadas(completadas);
    setOtrasRetros(otras);
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
                key={retrospectiva.id}
                idRetrospectiva={retrospectiva.id || -1}
                titulo={retrospectiva.titulo || ''}
                descripcion={retrospectiva.descripcion || ''}
                fechaInicio={retrospectiva.fecha_inicio || ''}
              />
            );
          })}
      </div>
      <h2 className="text-lg font-bold text-information">
        Retrospectivas completadas
      </h2>
      <div className="flex flex-col gap-5">
        {retrosCompletadas &&
          retrosCompletadas.map((retrospectiva: Retrospectiva) => {
            return (
              <RetrospectivaGeneral
                key={retrospectiva.id}
                idRetrospectiva={retrospectiva.id || -1}
                titulo={retrospectiva.titulo || ''}
                descripcion={retrospectiva.descripcion || ''}
                fechaInicio={retrospectiva.fecha_inicio || ''}
                clickable={false}
                completada={true}
              />
            );
          })}
      </div>
      <h2 className="text-lg font-bold text-information">
        Otras Retrospectivas
      </h2>
      <div className="flex flex-col gap-5">
        {otrasRetros &&
          otrasRetros.map((retrospectiva: Retrospectiva) => {
            return (
              <RetrospectivaGeneral
                key={retrospectiva.id}
                idRetrospectiva={retrospectiva.id || -1}
                titulo={retrospectiva.titulo || ''}
                descripcion={retrospectiva.descripcion || ''}
                fechaInicio={retrospectiva.fecha_inicio || ''}
                clickable={false}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PanelRetros;
