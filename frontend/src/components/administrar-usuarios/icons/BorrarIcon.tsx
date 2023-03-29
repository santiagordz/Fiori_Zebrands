import TrashIcon from '@atlaskit/icon/glyph/trash';
import { N500, R400 } from '@atlaskit/theme/colors';
import { token } from '@atlaskit/tokens';
import React, { useState, FC, useContext, useEffect } from 'react';
import ModalBorrarUsuarios from '../modals/ModalBorrarUsuarios';
import { userDataContext } from '../../../contexts';
import { Tooltip } from 'react-tooltip';

interface BorrarIconProps {
  idUsuario: number;
}

const BorrarIcon: FC<BorrarIconProps> = ({ idUsuario }) => {
  const { user } = useContext(userDataContext);
  const [color, setColor] = useState(N500);
  const [isOpen, setIsOpen] = useState(false);
  const [isActualUser, setIsActualUser] = useState(false);

  useEffect(() => {
    if (user?.id_usuario === idUsuario) setIsActualUser(true);
  }, []);

  const handleMouseOverBorrar = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setColor(R400);
  };
  const handleMouseOutBorrar = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setColor(N500);
  };

  return (
    <>
      <button
        className={`w-7 ${isActualUser ? 'cursor-not-allowed' : ''}`}
        onMouseOver={!isActualUser ? handleMouseOverBorrar : () => {}}
        onMouseOut={!isActualUser ? handleMouseOutBorrar : () => {}}
        onClick={() => (!isActualUser ? setIsOpen(true) : null)}
      >
        <a
          data-tooltip-id={isActualUser ? 'anon-tooltip' : ''}
          data-tooltip-content={
            'No puedes eliminar a tu propio usuario.'
          }
        >
          <TrashIcon
            label="Trash Icon"
            primaryColor={isActualUser ? '#dedede' : color}
          />
        </a>
      </button>
      <ModalBorrarUsuarios
        show={isOpen}
        onClose={() => setIsOpen(false)}
        id={idUsuario}
      />
      <Tooltip id="anon-tooltip" className="text-xs bg-deepBlue" />
    </>
  );
};

export default BorrarIcon;
