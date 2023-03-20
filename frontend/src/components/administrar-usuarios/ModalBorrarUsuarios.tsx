import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './css/modalBorrarUsuarios.css';

import CrossIcon from '@atlaskit/icon/glyph/cross';

interface GestionarEtiquetasProps {
  show: boolean;
  onClose: () => void;
}

const ModalBorrarUsuarios: FC<GestionarEtiquetasProps> = ({
  show,
  onClose,
}) => {
  const handleOut = (e: any) => {
    e.preventDefault();
    show = false;
  };

  if (!show) {
    return null;
  }

  return (
    <>
      <div className="modal">
        <div className="modal-content px-10">
          <div className="modal-header">
            <div className="modal-title">
              <h4>Registrar usuario</h4>
              <button className="flex">
                <CrossIcon label="Cross Icon" />
              </button>
            </div>
            <div className="modal-subtitle">
              Registra un nuevo usuario en el sistema, una invitación
              a iniciar sesión será enviada al correo ingresado.
            </div>
          </div>
          <div className="modal-body"></div>
          <div className="modal-footer">
            <div className="flex gap-10 mt-12">
              <button
                className="rounded-none hover:text-blue-500 text-sm"
                // onClick={handleClose}
              >
                Cancelar
              </button>
              <button
                type="submit"
                form="RegistrarUsuarioForm"
                className="rounded-sm bg-jiraBlue text-white px-2 py-1 hover:bg-blue-500"
              >
                <p className="text-sm">Registrar Usuario</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBorrarUsuarios;
