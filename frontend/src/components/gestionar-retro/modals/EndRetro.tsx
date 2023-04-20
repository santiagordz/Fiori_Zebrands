import Blanket from '@atlaskit/blanket';
import Button from '@atlaskit/button';
import CheckCircleOutlineIcon from '@atlaskit/icon/glyph/check-circle-outline';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import EditorErrorIcon from '@atlaskit/icon/glyph/editor/error';
import InfoIcon from '@atlaskit/icon/glyph/info';
import WarningIcon from '@atlaskit/icon/glyph/warning';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FC, useContext, useEffect } from 'react';
import { FlagContext } from '../../../contexts';

const URI = `/api/retrospectivas`;

interface EndRetroProps {
  setIsEndModalOpen: (isOpen: boolean) => void;
  idRetrospectiva: number;
  titulo: string;
  updateRetrospectivas: () => void | null;
}

const EndRetro: FC<EndRetroProps> = ({
  setIsEndModalOpen,
  idRetrospectiva,
  titulo,
  updateRetrospectivas,
}) => {
  const { addFlag } = useContext(FlagContext);
  const handleFinishRetro = async () => {
    try {
      await axios.put(`${URI}/finish/${idRetrospectiva}`);
      setIsEndModalOpen(false);
      addFlag(
        '¡Genial! La retrospectiva ha finalizado exitosamente. ¡Gracias por utilizar nuestra herramienta para mejorar continuamente!',
        InfoIcon,
        'info'
      );
      updateRetrospectivas();
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        addFlag(
          '¡Oh no! Hubo un error al intentar finalizar la retrospectiva.. Por favor, inténtalo de nuevo más tarde o contacta soporte.',
          EditorErrorIcon,
          'error',
          error.toString()
        );
      } else {
        addFlag(
          '¡Oh no! Hubo un error al intentar finalizar la retrospectiva. Por favor, inténtalo de nuevo más tarde o contacta soporte.',
          EditorErrorIcon,
          'error',
          'Error desconocido'
        );
      }
    }
  };

  useEffect(() => {
    document.body.classList.add('modal-open');

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);
  return (
    <Blanket isTinted>
      <motion.div
        animate={{ opacity: 1 }}
        className="flex flex-col w-full h-full items-center justify-center opacity-0"
      >
        <div className="flex flex-col bg-white rounded p-10 gap-8 items-center justify-center drop-shadow-lg max-w-[40vw]">
          <div
            className="flex w-full absolute top-0 justify-end p-4"
            onClick={() => setIsEndModalOpen(false)}
          >
            <div className="flex items-center justify-center cursor-pointer p-1">
              <CrossIcon label="cerrar modal" size="small" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 relative">
            <CheckCircleOutlineIcon
              label="finalizar retrospectiva"
              primaryColor="#0055CC"
              size="xlarge"
            />
            <h3 className="font-bold text-modalSoft text-xl text-center">
              ¿Deseas marcar la retrospectiva {titulo} como
              finalizada?
            </h3>
          </div>
          <div className="w-full flex gap-2 items-center justify-center px-4">
            <WarningIcon
              label="warning"
              primaryColor="#FF0000"
              size="large"
            />
            <p className="flex text-xs text-textNormal">
              No se podrá volver a abrir y solo se conservaran las
              respuestas realizadas hasta este momento.
            </p>
          </div>
          <div
            className="flex items-center justify-center
            w-full gap-8 mt-2 scale-[0.9]"
          >
            <Button
              appearance="subtle"
              onClick={() => setIsEndModalOpen(false)}
            >
              Cancelar
            </Button>
            <Button appearance="primary" onClick={handleFinishRetro}>
              Finalizar retrospectiva
            </Button>
          </div>
        </div>
      </motion.div>
    </Blanket>
  );
};

export default EndRetro;
