import React, { useState } from 'react';
import { token } from '@atlaskit/tokens';
import { N500, R400, Y300 } from '@atlaskit/theme/colors';
import TrashIcon from '@atlaskit/icon/glyph/trash';

const BorrarIcon = () => {
  const [color, setColor] = useState(true);
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
    <button
      onMouseOver={handleMouseOverBorrar}
      onMouseOut={handleMouseOutBorrar}
    >
      <TrashIcon
        label="Trash Icon"
        primaryColor={token('color.icon.brand', color ? N500 : R400)}
      />
    </button>
  );
};

export default BorrarIcon;
