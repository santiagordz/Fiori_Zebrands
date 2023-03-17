import React, { useState } from 'react';
import { token } from '@atlaskit/tokens';
import { N200, N500, B300 } from '@atlaskit/theme/colors';
import AppAccessIcon from '@atlaskit/icon/glyph/app-access';

const ResponsableIcon = () => {
  const [color, setColor] = useState(true);
  const [colorHover, setColorHover] = useState(true);
  const [clicked, setClicked] = useState(false);

  const handleClickResponsable = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setColor(!color);
    setClicked(!clicked);
  };
  const handleMouseOverResponsable = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setColorHover(false);
  };
  const handleMouseOutResponsable = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setColorHover(true);
  };

  const iconColor = () => {
    if (clicked) {
      return color ? N500 : B300;
    } else {
      return colorHover ? N500 : N200;
    }
  };

  return (
    <button
      onMouseOver={handleMouseOverResponsable}
      onMouseOut={handleMouseOutResponsable}
      onClick={handleClickResponsable}
    >
      <AppAccessIcon
        label="Trash Icon"
        primaryColor={token('color.icon.brand', iconColor())}
      />
    </button>
  );
};

export default ResponsableIcon;
