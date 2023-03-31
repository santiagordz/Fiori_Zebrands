import Button from '@atlaskit/button/standard-button';
import axios from 'axios';
import { FC } from 'react';

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
  const handleOut = () => {
    onClose();
  };

  if (!show) {
    return null;
  }

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${URI}${id}`);
      onClose();
      window.location.reload();
    } catch {
      window.alert(
        'Hubo un error al eliminar el usuario, intenta de nuevo.'
      );
    }
  };

  return (
    <div className="z-[1000] bg-blueRGBA fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center">
      <div className="p-10 bg-white rounded-xl flex flex-col">
        <div className="w-full flex flex-col items-center">
          <div className="w-full text-xl font-bold mb-1 flex items-center justify-between">
            <h4 className="text-2xl text-center">
              ¿Estás seguro que deseas borrar al usuario?
            </h4>
          </div>
          <div className="w-full text-sm text-[#44546f] mb-5 text-center">
            Se perderán todos sus datos y no podrá acceder nuevamente
            a RetroZeb.
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <div className="flex gap-10">
            <Button onClick={handleOut}>Cancelar</Button>
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
