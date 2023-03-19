import React, { FC, useState } from 'react';
import ModalRegistrarUsuarios from '../ModalRegistrarUsuarios';

interface RegistrarUsuariosProps {}

const RegistrarUsuarios: FC<RegistrarUsuariosProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Registrar Usuarios
      </button>
      <ModalRegistrarUsuarios
        show={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default RegistrarUsuarios;
