import React, { FC } from 'react';
import '../css/modal.css';

interface RegistrarUsuariosProps {}

const RegistrarUsuarios: FC<RegistrarUsuariosProps> = ({}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Registrar Usuarios</h4>
        </div>
        <div className="modal-body"></div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
};

export default RegistrarUsuarios;
