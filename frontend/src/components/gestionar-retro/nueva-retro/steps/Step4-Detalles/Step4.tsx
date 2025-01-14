import Button from '@atlaskit/button';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import ChevronRightLargeIcon from '@atlaskit/icon/glyph/chevron-right-large';
import FlagFilledIcon from '@atlaskit/icon/glyph/flag-filled';
import { SimpleTag as Tag, TagColor } from '@atlaskit/tag';
import { FC, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  newRetroContext,
  type EtiquetaType,
  type UsuarioType,
} from '../../local-contexts';
import { tipos } from '../Step2-Preguntas/tiposPregunta';
import TablaUsuarios from './TablaUsuarios';

const getToday = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
};
interface Step4Props {
  setStepNumber: (updater: (prev: number) => number) => void;
  stepNumber: number;
}

const Step4: FC<Step4Props> = ({ setStepNumber, stepNumber }) => {
  const { newRetro, setNewRetro } = useContext(newRetroContext);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [date, setDate] = useState('');

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [location]);

  useEffect(() => {
    setDate(getToday());
  }, []);

  return (
    <span
      className={`flex flex-col gap-10 w-full text-left ${
        stepNumber === 4 ? '' : 'hidden'
      }`}
    >
      <div>
        <p className="font-semibold text-sm">Previsualización</p>
        <p className="text-xs text-[#626F86] mt-1">
          Así es como los usuarios verán la retrospectiva en el panel
          'Mis retrospectivas'.
        </p>
        <div
          className={`flex flex-col py-3 px-5 w-full gap-3 mt-3 rounded bg-white border border-solid border-gray`}
        >
          <div className="flex w-full justify-between">
            <div className="flex items-start justify-start gap-2">
              <FlagFilledIcon
                label="retrospectiva-pendiente"
                primaryColor="#8270DB"
              />
              <div>
                <h3 className="font-bold text-sm">
                  {newRetro?.titulo || 'Retrospectiva'}
                </h3>
              </div>
            </div>
            <div
              className={`${
                newRetro?.etiquetas && newRetro?.etiquetas.length > 6
                  ? 'grid grid-cols-2'
                  : 'flex flex-row'
              } items-end text-right`}
            >
              {newRetro?.etiquetas &&
                newRetro?.etiquetas.map((tag: EtiquetaType) => (
                  <div key={tag.id} id="tag">
                    <Tag
                      text={tag.nombre}
                      appearance="rounded"
                      color={tag.color}
                    />
                  </div>
                ))}
            </div>
          </div>
          {newRetro?.descripcion && (
            <div className="flex text-[0.8rem]">
              <p>{newRetro?.descripcion}</p>
            </div>
          )}
          <div className="flex flex-row text-[0.7rem] justify-between items-center">
            <p>Fecha de inicio: {date}</p>
            <ChevronRightLargeIcon
              label="flecha"
              primaryColor="#1D7AFC "
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-sm">
          {`Preguntas seleccionadas: ${
            newRetro?.predeterminadas?.length ?? 0
          }`}
        </p>
        <p className="text-xs text-[#626F86] mt-1">
          Las siguientes preguntas serán parte de la retrospectiva.
        </p>
        <div className="flex flex-col gap-3 mt-3">
          {newRetro?.predeterminadas?.map((pregunta) => (
            <span
              key={pregunta.id}
              className="flex items-center justify-between gap-3 w-full bg-[#E9F2FF] py-2 px-4 rounded"
            >
              <p className="text-textNormal text-[0.8rem] font-semibold">
                {pregunta.pregunta}
              </p>
              <div id="tag">
                <Tag
                  text={tipos[pregunta.id_tipo_pregunta - 1].label}
                  appearance="rounded"
                  color="green"
                />
              </div>
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <p className="font-semibold text-sm">Usuarios</p>
          <p className="text-xs text-[#626F86] mt-1">
            Los usuarios con las siguientes etiquetas y enlistados
            individualmente serán asignados a la retrospectiva.
          </p>
        </div>
        <div>
          <p className="font-medium text-xs">
            Etiquetas seleccionadas
          </p>
          {newRetro?.etiquetas && newRetro?.etiquetas.length > 0 ? (
            <div className="flex items-end text-right mt-2">
              {newRetro.etiquetas.map((tag: EtiquetaType) => (
                <div key={tag.id} id="tag">
                  <Tag
                    text={tag.nombre}
                    appearance="rounded"
                    color={tag.color}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[#626F86] text-xs mt-1">
              No se han seleccionado etiquetas.
            </p>
          )}
        </div>

        <div>
          <p className="font-medium text-xs mb-2">
            Usuarios seleccionados individualmente
          </p>
          {newRetro?.usuarios && newRetro!.usuarios.length > 0 ? (
            <TablaUsuarios />
          ) : (
            <p className="text-[#626F86] text-xs mt-1">
              No se han seleccionado usuarios individualmente.
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-14 w-full items-center justify-center mt-4">
        <Button
          appearance="default"
          iconBefore={<ArrowLeftIcon label="paso anterior" />}
          label="Pregunta anterior"
          onClick={() => setStepNumber((prev: number) => prev - 1)}
        >
          Paso anterior
        </Button>
        <Button
          appearance="primary"
          label="Siguiente paso"
          type="submit"
        >
          Registrar e iniciar retrospectiva
        </Button>
      </div>
    </span>
  );
};

export default Step4;
