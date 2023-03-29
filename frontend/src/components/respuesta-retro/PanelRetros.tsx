import { FC } from 'react';
import type { Retrospectiva } from '../../views/mis-retrospectivas/MisRetrospectivas';
import Spinner from '../design-template/spinner/Spinner';
import RetrospectivaGeneral from './reusable/RetrospectivaGeneral';

interface PanelRetrosProps {
  tryFetch: boolean;
  retroPendientes: Retrospectiva[];
  retrosCompletadas: Retrospectiva[];
  otrasRetros: Retrospectiva[];
}

const PanelRetros: FC<PanelRetrosProps> = ({
  tryFetch,
  retroPendientes,
  retrosCompletadas,
  otrasRetros,
}) => {
  if (!tryFetch)
    return <Spinner message="Cargando retrospectivas..." />;

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-lg font-bold text-information">
        Retrospectivas pendientes de responder
      </h2>
      <div className="flex flex-col gap-5">
        {retroPendientes.length > 0 ? (
          retroPendientes.map((retrospectiva: Retrospectiva) => {
            return (
              <RetrospectivaGeneral
                key={retrospectiva.id}
                idRetrospectiva={retrospectiva.id || -1}
                titulo={retrospectiva.titulo || ''}
                descripcion={retrospectiva.descripcion || ''}
                fechaInicio={retrospectiva.fecha_inicio || ''}
                tags={retrospectiva.tags}
              />
            );
          })
        ) : (
          <p>No hay retrospectivas pendientes para mostrar.</p>
        )}
      </div>
      <h2 className="text-lg font-bold text-information">
        Retrospectivas recientemente completadas
      </h2>
      <div className="flex flex-col gap-5">
        {retrosCompletadas.length > 0 ? (
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
                tags={retrospectiva.tags}
              />
            );
          })
        ) : (
          <p>No hay retrospectivas completadas para mostrar.</p>
        )}
      </div>
      <h2 className="text-lg font-bold text-information">
        Otras retrospectivas del equipo
      </h2>
      <div className="flex flex-col gap-5">
        {otrasRetros.length > 0 ? (
          otrasRetros.map((retrospectiva: Retrospectiva) => {
            return (
              <RetrospectivaGeneral
                key={retrospectiva.id}
                idRetrospectiva={retrospectiva.id || -1}
                titulo={retrospectiva.titulo || ''}
                descripcion={retrospectiva.descripcion || ''}
                fechaInicio={retrospectiva.fecha_inicio || ''}
                clickable={false}
                tags={retrospectiva.tags}
              />
            );
          })
        ) : (
          <p>No hay otras retrospectivas del equipo para mostrar.</p>
        )}
      </div>
    </div>
  );
};

export default PanelRetros;
