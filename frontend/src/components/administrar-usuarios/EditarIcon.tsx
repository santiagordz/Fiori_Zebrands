import React, { useState } from 'react';
import axios from 'axios';
import { token } from '@atlaskit/tokens';
import { N500, Y300 } from '@atlaskit/theme/colors';
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled';
import ModalEditarUsuarios from './ModalEditarUsuarios';

const URI = 'http://localhost:8000/usuarios/';

interface InfoUsuario {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  roles: string[];
  etiquetas: string[];
}

const EditarIcon = ({ id }: any) => {
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

  // const getUser = async (id: number) => {
  //   try {
  //     const response = await axios.get(`${URI}${id}`);
  //     return response.data.usuario

  return (
    <>
      <button
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
      <ModalEditarUsuarios
        show={isOpen}
        onClose={() => setIsOpen(false)}
        info={id}
      />
    </>
  );
};

export default EditarIcon;
