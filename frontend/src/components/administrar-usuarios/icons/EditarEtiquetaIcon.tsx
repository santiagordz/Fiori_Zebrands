import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled';
import { N500, Y300 } from '@atlaskit/theme/colors';
import { token } from '@atlaskit/tokens';
import React, { FC, useState } from 'react';
import ModalEditarEtiqueta from '../modals/ModalEditarEtiqueta';
import type { Etiqueta } from '../local-contexts';

interface EdtarEtiquetaIconProps {
  etiqueta: Etiqueta;
}

const EditarEtiquetaIcon: FC<EdtarEtiquetaIconProps> = ({
  etiqueta,
}) => {
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
