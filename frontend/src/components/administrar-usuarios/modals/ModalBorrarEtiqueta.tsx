import { FC } from 'react';
import Button from '@atlaskit/button/standard-button';
import axios from 'axios';
import '../css/modalBorrarUsuarios.css';

const URI = 'http://localhost:8000/etiquetas/';

interface GestionarEtiquetasProps {
  show: boolean;
  onClose: () => void;
  id: number;
}

const ModalBorrarEtiqueta: FC<GestionarEtiquetasProps> = ({
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
        'No se pudo borrar la etiqueta, intenta de nuevo.'
      ); // cambiar eso a algo mas bonito
    }
  };

  return (
    <div className="modal z-[1000]">
      <div className="modal-content-delete px-10 text-center">
        <div className="modal-header">
          <div className="modal-title justify-center">
            <h4 className="text-2xl text-center">
              ¿Estás seguro que deseas borrar la etiqueta?
            </h4>
          </div>
          <div className="modal-subtitle text-sm">
            Se eliminará también la asignación de los usuarios a esta
            etiqueta.
          </div>
        </div>

        <div className="modal-footer justify-center">
          <div className="flex gap-10">
            <Button onClick={handleOut}>Cancelar</Button>
            <Button
              appearance="danger"
              onClick={() => handleDelete(id.id)}
            >
              Confirmar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBorrarEtiqueta;
