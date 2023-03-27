import React, { FC, useState } from 'react';
import ModalBorrarUsuarios from '../ModalBorrarUsuarios';
import Button from '@atlaskit/button';

const BorrarUsuarios = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Borrar</button>

      <ModalBorrarUsuarios
        show={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default BorrarUsuarios;
