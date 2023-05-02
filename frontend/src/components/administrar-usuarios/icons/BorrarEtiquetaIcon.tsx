import TrashIcon from '@atlaskit/icon/glyph/trash';
import React, { useState } from 'react';
import { ModalBorrarEtiqueta } from '../modals';

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
          primaryColor={color ? '#42526e' : '#de350b'}
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
