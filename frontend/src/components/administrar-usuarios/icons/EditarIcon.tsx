import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled';
import React, { FC, useState } from 'react';
import ModalEditarUsuarios from '../modals/ModalEditarUsuarios';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/usuarios/`;

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
          primaryColor={color ? '#42526e' : '#ffab00'}
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
