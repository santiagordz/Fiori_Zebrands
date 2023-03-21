import React, { FC, useState } from 'react';
import ModalEditarUsuarios from '../ModalEditarUsuarios';

interface RegistrarUsuariosProps {}

const RegistrarUsuarios: FC<RegistrarUsuariosProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Registrar Usuarios
      </button>
      <ModalEditarUsuarios
        show={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default RegistrarUsuarios;
