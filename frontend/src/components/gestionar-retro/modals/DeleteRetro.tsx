import Blanket from '@atlaskit/blanket';
import Button from '@atlaskit/button';
import EditorErrorIcon from '@atlaskit/icon/glyph/editor/error';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import InfoIcon from '@atlaskit/icon/glyph/info';
import TrashIcon from '@atlaskit/icon/glyph/trash';
import WarningIcon from '@atlaskit/icon/glyph/warning';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FC, useContext, useEffect } from 'react';
import { FlagContext } from '../../../contexts';

const URI = 'http://localhost:8000/retrospectivas';

interface DeleteRetroProps {
  setIsDeleteModalOpen: (isOpen: boolean) => void;
  idRetrospectiva: number;
  titulo: string;
  updateRetrospectivas: () => void | null;
}

const DeleteRetro: FC<DeleteRetroProps> = ({
  setIsDeleteModalOpen,
  idRetrospectiva,
  titulo,
  updateRetrospectivas,
}) => {
  const { addFlag } = useContext(FlagContext);
  const handleDeleteRetro = async () => {
    try {
      await axios.delete(`${URI}/delete/${idRetrospectiva}`);
      setIsDeleteModalOpen(false);
      addFlag(
        '¡Listo! La retrospectiva se ha eliminado satisfactoriamente.',
        InfoIcon,
        'info'
      );
      updateRetrospectivas();
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        addFlag(
          'Hubo un error al intentar eliminar la retrospectiva.. Por favor, inténtalo de nuevo más tarde o contacta soporte.',
          EditorErrorIcon,
          'error',
          error.toString()
        );
      } else {
        addFlag(
          'Hubo un error al intentar finalizar la retrospectiva. Por favor, inténtalo de nuevo más tarde o contacta soporte.',
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
            onClick={() => setIsDeleteModalOpen(false)}
          >
            <div className="flex items-center justify-center cursor-pointer p-1">
              <CrossIcon label="cerrar modal" size="small" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 relative">
            <TrashIcon
              label="eliminar retrospectiva"
              primaryColor="#454545"
              size="xlarge"
            />
            <h3 className="font-bold text-modalSoft text-xl text-center">
              ¿De verdad deseas eliminar la retrospectiva {titulo}?
            </h3>
          </div>
          <div className="w-full flex gap-2 items-center justify-center px-6">
            <WarningIcon
              label="warning"
              primaryColor="#FF0000"
              size="large"
            />
            <p className="flex text-xs text-textNormal">
              Al eliminar la retrospectiva, se eliminarán todas las
              respuestas de los usuarios para esta retrospectiva y se
              perderá el acceso a la misma. Esta acción no se puede
              deshacer.
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
            <Button appearance="danger" onClick={handleDeleteRetro}>
              Eliminar retrospectiva
            </Button>
          </div>
        </div>
      </motion.div>
    </Blanket>
  );
};

export default DeleteRetro;
