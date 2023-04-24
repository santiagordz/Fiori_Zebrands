import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled';
import React, { FC, useState, useContext } from 'react';
import ModalEditarUsuarios from '../modals/ModalEditarUsuarios';
import { getUsersContext } from '../local-contexts';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/usuarios/`;

interface EditarIconProps {
  id: number;
}

const EditarIcon: FC<EditarIconProps> = ({ id }) => {
  const [color, setColor] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const { getUsers } = useContext(getUsersContext);

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
        onClose={() => {
          setIsOpen(false);
          getUsers();
        }}
        info={id}
      />
    </>
  );
};

export default EditarIcon;
