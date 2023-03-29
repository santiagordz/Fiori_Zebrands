import React, { useState } from 'react';
import axios from 'axios';
import { token } from '@atlaskit/tokens';
import { N500, Y300 } from '@atlaskit/theme/colors';
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled';
import ModalEditarUsuarios from '../modals/ModalEditarUsuarios';
import ModalEditarEtiqueta from '../modals/ModalEditarEtiqueta';

const URI = 'http://localhost:8000/usuarios/';

// interface InfoUsuario {
//   id: number;
//   nombre: string;
//   apellido: string;
//   correo: string;
//   roles: string[];
//   etiquetas: string[];
// }

const EditarEtiquetaIcon = ({ etiqueta }: any) => {
  const [color, setColor] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseOverEditar = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setColor(false);
  };
  const handleMouseOutEditar = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setColor(true);
  };

  return (
    <>
      <button
        className="w-7"
        onMouseOver={handleMouseOverEditar}
        onMouseOut={handleMouseOutEditar}
        onClick={() => setIsOpen(true)}
      >
        <EditFilledIcon
          label="Edit Icon"
          primaryColor={token(
            'color.icon.brand',
            color ? N500 : Y300
          )}
        />
      </button>
      <ModalEditarEtiqueta
        show={isOpen}
        onClose={() => setIsOpen(false)}
        info={etiqueta}
      />
    </>
  );
};

export default EditarEtiquetaIcon;
