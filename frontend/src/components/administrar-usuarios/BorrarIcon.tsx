import React, { useState } from 'react';
import { token } from '@atlaskit/tokens';
import { N500, R400 } from '@atlaskit/theme/colors';
import TrashIcon from '@atlaskit/icon/glyph/trash';
import ModalBorrarUsuarios from './ModalBorrarUsuarios';

const BorrarIcon = ({ id }: any) => {
  const [color, setColor] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseOverBorrar = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setColor(false);
  };
  const handleMouseOutBorrar = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setColor(true);
  };

  return (
    <>
      <button
        onMouseOver={handleMouseOverBorrar}
        onMouseOut={handleMouseOutBorrar}
        onClick={() => setIsOpen(true)}
      >
        <TrashIcon
          label="Trash Icon"
          primaryColor={token(
            'color.icon.brand',
            color ? N500 : R400
          )}
        />
      </button>
      <ModalBorrarUsuarios
        show={isOpen}
        onClose={() => setIsOpen(false)}
        id={id}
      />
    </>
  );
};

export default BorrarIcon;
