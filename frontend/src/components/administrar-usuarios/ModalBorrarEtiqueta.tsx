import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './css/modalBorrarUsuarios.css';
import axios from 'axios';
import Button from '@atlaskit/button/standard-button';
import Blanket from '@atlaskit/blanket';

const URI = 'http://localhost:8000/etiquetas/';

interface GestionarEtiquetasProps {
  show: boolean;
  onClose: () => void;
  id: any;
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

  const handleDelete = async (id: any) => {
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
    <>
      <Blanket isTinted={true}>
        <div className="modal-content px-10">
          <div className="modal-header">
            <div className="modal-title justify-center">
              <h4 className="uppercase text-3xl text-center">
                Borrar Etiqueta
              </h4>
            </div>
            <div className="modal-subtitle text-xl mt-4">
              ¿Está seguro que desea borrar la etiqueta?
            </div>
          </div>

          <div className="modal-footer justify-center">
            <div className="flex gap-10 mt-12">
              <Button
                className="rounded-none hover:text-blue-500 text-sm"
                onClick={handleOut}
              >
                Cancelar
              </Button>
              <Button
                appearance="danger"
                className="rounded-sm bg-jiraBlue text-white px-2 py-1 hover:bg-blue-500"
                onClick={() => handleDelete(id.id)}
              >
                Confirmar
              </Button>
            </div>
          </div>
        </div>
      </Blanket>
    </>
  );
};

export default ModalBorrarEtiqueta;
