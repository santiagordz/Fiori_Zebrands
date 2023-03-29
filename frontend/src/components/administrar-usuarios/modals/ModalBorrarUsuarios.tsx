import '../css/modalBorrarUsuarios.css';
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
    <div className="modal z-[1000]">
      <div className="modal-content-delete px-10 text-center">
        <div className="modal-header">
          <div className="modal-title justify-center">
            <h4 className="text-2xl text-center">
              ¿Estás seguro que deseas borrar al usuario?
            </h4>
          </div>
          <div className="modal-subtitle text-sm">
            Se perderán todos sus datos y no podrá acceder nuevamente
            a RetroZeb.
          </div>
        </div>

        <div className="modal-footer justify-center">
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
