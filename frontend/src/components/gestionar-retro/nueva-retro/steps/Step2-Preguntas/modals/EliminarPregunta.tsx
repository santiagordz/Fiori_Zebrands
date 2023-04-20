import Blanket from '@atlaskit/blanket';
import Button from '@atlaskit/button';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import CrossCircleIcon from '@atlaskit/icon/glyph/cross-circle';
import EditorErrorIcon from '@atlaskit/icon/glyph/editor/error';
import InfoIcon from '@atlaskit/icon/glyph/info';
import WarningIcon from '@atlaskit/icon/glyph/warning';
import { SimpleTag as Tag } from '@atlaskit/tag';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FC, useContext, useEffect } from 'react';
import { FlagContext } from '../../../../../../contexts';
import {
  newRetroContext,
  type PreguntaType,
} from '../../../local-contexts';
import { tiposPregunta } from '../Pregunta';

const URI = `/api/preguntas`;

interface EliminarPreguntaProps {
  id_pregunta: number;
  id_tipo_pregunta: number;
  pregunta: string;
  predeterminada: boolean;
  setIsDeleteModalOpen: (isOpen: boolean) => void;
}

const EliminarPregunta: FC<EliminarPreguntaProps> = ({
  id_pregunta,
  id_tipo_pregunta,
  pregunta,
  setIsDeleteModalOpen,
  predeterminada,
}) => {
  const { addFlag } = useContext(FlagContext);
  const { setNewRetro, newRetro } = useContext(newRetroContext);
  useEffect(() => {
    document.body.classList.add('modal-open');

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`${URI}/delete/${id_pregunta}`);
      if (predeterminada) {
        setNewRetro({
          ...newRetro,
          predeterminadas: newRetro?.predeterminadas?.filter(
            (pregunta: PreguntaType) => pregunta.id !== id_pregunta
          ),
        });
      } else {
        setNewRetro({
          ...newRetro,
          otras: newRetro?.otras?.filter(
            (pregunta: PreguntaType) => pregunta.id !== id_pregunta
          ),
        });
      }
      setIsDeleteModalOpen(false);
      addFlag(
        '¡Listo! Tu pregunta ha sido eliminada correctamente.',
        InfoIcon,
        'info'
      );
    } catch (error) {
      if (error instanceof Error) {
        addFlag(
          '¡Oh no! Hubo un error al eliminar la pregunta. Por favor, inténtalo de nuevo más tarde o contacta soporte.',
          EditorErrorIcon,
          'warning',
          error.toString()
        );
      } else {
        addFlag(
          '¡Oh no! Hubo un error al eliminar la pregunta. Por favor, inténtalo de nuevo más tarde o contacta soporte.',
          EditorErrorIcon,
          'warning',
          'Error desconocido'
        );
      }
    }
  };

  return (
    <Blanket isTinted>
      <motion.div
        animate={{ opacity: 1 }}
        className="flex flex-col w-full h-full items-center justify-center opacity-0"
      >
        <div className="flex flex-col bg-white rounded p-10 gap-7 items-center justify-center drop-shadow-lg max-w-[40vw]">
          <div
            className="flex w-full absolute top-0 justify-end p-4"
            onClick={() => setIsDeleteModalOpen(false)}
          >
            <div className="flex items-center justify-center cursor-pointer p-1">
              <CrossIcon label="cerrar modal" size="small" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 relative">
            <CrossCircleIcon
              label="eliminar"
              primaryColor="#E34935"
              size="xlarge"
            />
            <h3 className="font-bold text-modalSoft text-xl">
              ¿De verdad quieres eliminar la pregunta?
            </h3>
          </div>
          <span className="w-full">
            <p className="text-xs text-textNormal mb-2">
              Se eliminará la siguiente pregunta:
            </p>
            <div className="flex items-center justify-between gap-3 w-full bg-[#E9F2FF] py-2 px-4 rounded">
              <p className="text-textNormal text-[0.8rem] font-semibold">
                {pregunta}
              </p>
              <div id="tag">
                <Tag
                  text={tiposPregunta[id_tipo_pregunta]}
                  appearance="rounded"
                  color="green"
                />
              </div>
            </div>
          </span>
          <div className="w-full flex gap-2 items-center justify-center px-4">
            <WarningIcon
              label="warning"
              primaryColor="#FF0000"
              size="large"
            />
            <p className="flex text-xs text-textNormal">
              Se eliminará de la base de datos, junto con todas las
              respuestas de los usuarios y opciones asociadas a esta
              (si aplica). Los cambios son irreversibles y no podrás
              recuperar ningún dato eliminado.
            </p>
          </div>
          <div
            className="flex items-center justify-center
            w-full gap-8 mt-2 scale-[0.9]"
          >
            <Button
              appearance="subtle"
              onClick={() => setIsDeleteModalOpen(false)}
            >
              Cancelar
            </Button>
            <Button appearance="danger" onClick={handleDelete}>
              Eliminar pregunta
            </Button>
          </div>
        </div>
      </motion.div>
    </Blanket>
  );
};

export default EliminarPregunta;
