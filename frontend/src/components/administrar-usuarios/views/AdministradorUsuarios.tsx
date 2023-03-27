import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import DesignTemplate from '../../design-template/DesignTemplate';
import BotonGestionarEtiquetas from '../BotonGestionarEtiquetas';
import BotonRegistrarUsuario from '../BotonRegistrarUsuario';
import UsersTable from '../UsersTable';

import ModalRegistrarUsuarios from '../ModalRegistrarUsuarios';

const AdministradorUsuarios = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DesignTemplate
      buttons={
        <>
          <Link to={'/administrar-usuarios/gestionar-etiquetas'}>
            <BotonGestionarEtiquetas />
          </Link>
          <button onClick={() => setIsOpen(true)}>
            <BotonRegistrarUsuario />
          </button>
        </>
      }
    >
      <div className="flex justify-center mt-10">
        <div className="w-5/6">
          <div className="flex justify-end gap-10"></div>
          <br></br>
          <UsersTable />
        </div>
        <ModalRegistrarUsuarios
          show={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </DesignTemplate>
  );
};

export default AdministradorUsuarios;
