import React, { FC, useState } from 'react';
import ModalRegistrarUsuario from '../ModalRegistraUsuario';

interface RegistrarUsuariosProps {}

const RegistrarUsuarios: FC<RegistrarUsuariosProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Registrar Usuarios
      </button>
      <ModalRegistrarUsuario
        show={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default RegistrarUsuarios;
