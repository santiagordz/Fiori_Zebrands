import React, { FC, useState } from 'react';
import { N500, B200 } from '@atlaskit/theme/colors';
import EditorPanelIcon from '@atlaskit/icon/glyph/editor/panel';
import ModalCompletarAccionable from './modals/ModalCompletarAccionable';

interface CheckAccionableIconProps {
  id_accionable: number;
}

const CheckAccionableIcon: FC<CheckAccionableIconProps> = ({
  id_accionable,
}) => {
  const [color, setColor] = useState(N500);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseOver = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setColor(B200);
  };
  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    setColor(N500);
  };

  return (
    <>
      <button
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => setIsModalOpen(true)}
        className="flex items-center "
      >
        <EditorPanelIcon label="" primaryColor={color} size="large" />
      </button>
      {isModalOpen && (
        <ModalCompletarAccionable
          setIsModalOpen={setIsModalOpen}
          id_accionable={id_accionable}
        />
      )}
    </>
  );
};

export default CheckAccionableIcon;
