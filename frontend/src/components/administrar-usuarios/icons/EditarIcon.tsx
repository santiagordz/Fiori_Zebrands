import React, { FC, useState } from 'react';
import axios from 'axios';
import { token } from '@atlaskit/tokens';
import { N500, Y300 } from '@atlaskit/theme/colors';
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled';
import ModalEditarUsuarios from '../modals/ModalEditarUsuarios';

const URI = 'http://localhost:8000/usuarios/';

interface EditarIconProps {
  id: number;
}

const EditarIcon: FC<EditarIconProps> = ({ id }) => {
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
      <ModalEditarUsuarios
        show={isOpen}
        onClose={() => setIsOpen(false)}
        info={id}
      />
    </>
  );
};

export default EditarIcon;
