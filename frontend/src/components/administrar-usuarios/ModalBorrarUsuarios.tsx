import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './css/modalBorrarUsuarios.css';

import CrossIcon from '@atlaskit/icon/glyph/cross';
import Button from '@atlaskit/button/standard-button';

interface GestionarEtiquetasProps {
  show: boolean;
  onClose: () => void;
}

const ModalBorrarUsuarios: FC<GestionarEtiquetasProps> = ({
  show,
  onClose,
}) => {
  const handleOut = () => {
    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <>
      <div className="modal z-[1000000000]">
        <div className="modal-content px-10">
          <div className="modal-header">
            <div className="modal-title justify-center">
              <h4 className='uppercase text-3xl text-center'>Borrar Usuario</h4>
            
            </div>
            <div className="modal-subtitle text-xl mt-4">
              ¿Está seguro que desea borrar el usuario?
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
                appearance='danger'
                className="rounded-sm bg-jiraBlue text-white px-2 py-1 hover:bg-blue-500"
              >
                Confirmar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBorrarUsuarios;
