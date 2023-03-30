import TrashIcon from '@atlaskit/icon/glyph/trash';
import { N500, R400 } from '@atlaskit/theme/colors';
import { token } from '@atlaskit/tokens';
import React, { FC, useState } from 'react';
import { ModalBorrarEtiqueta } from '../modals';
import type { Etiqueta } from '../UsersTable';

const BorrarEditarIcon = ({ etiqueta }: any) => {
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
        className="w-7"
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
      <ModalBorrarEtiqueta
        show={isOpen}
        onClose={() => setIsOpen(false)}
        id={etiqueta}
      />
    </>
  );
};

export default BorrarEditarIcon;
