import React, { useState } from 'react';
import { token } from '@atlaskit/tokens';
import { N500, Y300 } from '@atlaskit/theme/colors';
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled';

const EditarIcon = () => {
  const [color, setColor] = useState(true);
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
    <button
      onMouseOver={handleMouseOverEditar}
      onMouseOut={handleMouseOutEditar}
    >
      <EditFilledIcon
        label="Edit Icon"
        primaryColor={token('color.icon.brand', color ? N500 : Y300)}
      />
    </button>
  );
};

export default EditarIcon;
