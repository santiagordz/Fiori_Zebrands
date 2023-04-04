import { FC, useEffect } from 'react';
import type { Retrospectiva } from '../../views/mis-retrospectivas/MisRetrospectivas';
import Spinner from '../design-template/spinner/Spinner';
import RetrospectivaGeneral from './reusable/RetrospectivaGeneral';
import CheckCircleOutlineIcon from '@atlaskit/icon/glyph/check-circle-outline';

interface PanelRetrosProps {
  tryFetch: boolean;
  retroPendientes: Retrospectiva[];
  retrosCompletadas: Retrospectiva[];
  otrasRetros: Retrospectiva[];
  retrosFinalizadas: Retrospectiva[];
  getRetrospectivas: () => void;
}

const PanelRetros: FC<PanelRetrosProps> = ({
  tryFetch,
  retroPendientes,
  retrosCompletadas,
  otrasRetros,
  retrosFinalizadas,
  getRetrospectivas,
}) => {
  if (!tryFetch)
    return <Spinner message="Cargando retrospectivas..." />;

  const divGroupsStyle =
    'flex flex-col gap-5 bg-[#ffffff] py-5 px-5 rounded-sm shadow-sm overflow-y-auto max-h-[50rem]';

  useEffect(() => {
    getRetrospectivas();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-5">
        <div className={divGroupsStyle}>
          <h2 className="text-base font-bold text-information">
            Mis retrospectivas pendientes de responder
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
              <p className="text-xs">
                No hay retrospectivas pendientes para mostrar.
              </p>
            )}
          </div>
        </div>
        <div className={divGroupsStyle}>
          <h2 className="text-base font-bold text-information">
            Mis retrospectivas recientemente completadas
          </h2>
          <div className="flex flex-col gap-5">
            {retrosCompletadas.length > 0 ? (
              retrosCompletadas.map(
                (retrospectiva: Retrospectiva) => {
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
                }
              )
            ) : (
              <p className="text-xs">
                No hay retrospectivas completadas para mostrar.
              </p>
            )}
          </div>
        </div>
        <div className={divGroupsStyle}>
          <h2 className="text-base font-bold text-information">
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
                    assigned={false}
                    tags={retrospectiva.tags}
                  />
                );
              })
            ) : (
              <p className="text-xs">
                No hay otras retrospectivas del equipo para mostrar.
              </p>
            )}
          </div>
        </div>
        <div className={divGroupsStyle}>
          <h2 className="text-base font-bold text-information">
            Retrospectivas finalizadas
          </h2>
          <div className="flex flex-col gap-5">
            {retrosFinalizadas.length > 0 ? (
              retrosFinalizadas.map(
                (retrospectiva: Retrospectiva) => {
                  return (
                    <RetrospectivaGeneral
                      key={retrospectiva.id}
                      idRetrospectiva={retrospectiva.id || -1}
                      titulo={retrospectiva.titulo || ''}
                      descripcion={retrospectiva.descripcion || ''}
                      fechaFin={retrospectiva.fecha_fin || ''}
                      fechaInicio={retrospectiva.fecha_inicio || ''}
                      clickable={false}
                      assigned={false}
                      enCurso={false}
                      tags={retrospectiva.tags}
                    />
                  );
                }
              )
            ) : (
              <p className="text-xs">
                No hay otras retrospectivas finalizadas para mostrar.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelRetros;
