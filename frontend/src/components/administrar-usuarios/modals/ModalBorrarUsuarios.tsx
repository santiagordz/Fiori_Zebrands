import Button from '@atlaskit/button/standard-button';
import axios from 'axios';
import { FC, useContext } from 'react';
import WarningIcon from '@atlaskit/icon/glyph/warning';
import EditorErrorIcon from '@atlaskit/icon/glyph/editor/error';
import InfoIcon from '@atlaskit/icon/glyph/info';
import { FlagContext } from '../../../contexts';
import { getUsersContext } from '../local-contexts';

const URI = 'http://localhost:8000/usuarios/deleteUser/';

interface GestionarEtiquetasProps {
  show: boolean;
  onClose: () => void;
  id: number;
}

const ModalBorrarUsuarios: FC<GestionarEtiquetasProps> = ({
  show,
  onClose,
  id,
}) => {
  const { addFlag } = useContext(FlagContext);
  const { getUsers } = useContext(getUsersContext);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${URI}${id}`);
      getUsers();
      addFlag(
        '¡Listo! Usuario eliminado correctamente.',
        InfoIcon,
        'info'
      );
      onClose();
    } catch (error) {
      console.log('error');
      if (error instanceof Error) {
        addFlag(
          '¡Oh no! Hubo un error al intentar eliminar al usuario. Por favor, inténtalo de nuevo más tarde o contacta soporte.',
          EditorErrorIcon,
          'error',
          error.toString()
        );
      } else {
        addFlag(
          '¡Oh no! Hubo un error al intentar finalizar al usuario. Por favor, inténtalo de nuevo más tarde o contacta soporte.',
          EditorErrorIcon,
          'error',
          'Error desconocido'
        );
      }
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className="z-[1000] bg-blueRGBA fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center">
      <div className="p-10 bg-white rounded-xl flex flex-col gap-4">
        <div className="w-full flex flex-col items-center">
          <div className="w-full text-xl font-bold flex items-center justify-between">
            <h4 className="text-lg text-center w-full">
              ¿Estás seguro que deseas borrar al usuario?
            </h4>
          </div>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <WarningIcon label="warning" primaryColor="#FF0000" />
          <p className="text-xs text-textNormal">
            Se perderán todos sus datos y no podrá acceder nuevamente
            a RetroZeb.
          </p>
        </div>

        <div className="w-full flex items-center justify-center">
          <div className="flex gap-10">
            <Button onClick={() => onClose()}>Cancelar</Button>
            <Button
              appearance="danger"
              onClick={() => handleDelete(id)}
            >
              Confirmar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBorrarUsuarios;
