import AppAccessIcon from '@atlaskit/icon/glyph/app-access';
import React, { FC, useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { ModalAsignarResponsable } from '../modals';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/usuarios/`;

interface ResponsableIconProps {
  usuario: {
    id: number;
    rol: number;
    nombre: string;
    correo: string;
  };
}

const ResponsableIcon: FC<ResponsableIconProps> = ({ usuario }) => {
  const [color, setColor] = useState(true);
  const [colorHover, setColorHover] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [rolActual, setRolActual] = useState(0);

  useEffect(() => {
    setRolActual(usuario.rol);
  }, []);

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

  const iconColor = (): string => {
    if (rolActual === 3) {
      if (clicked) {
        return color ? '#42526e' : '#0065ff';
      } else {
        return colorHover ? '#42526e' : '#6b778c';
      }
    } else {
      if (clicked) {
        return '#0065ff';
      } else {
        return colorHover ? '#0065ff' : '#2684ff';
      }
    }
  };

  if (rolActual === 1) {
    return (
      <>
        <a
          data-tooltip-id="anon-tooltip"
          data-tooltip-content={
            'Los administradores tienen el rol de responsable por default.'
          }
        >
          <button disabled className="cursor-not-allowed">
            <AppAccessIcon
              label="responsable"
              primaryColor="#ffab00"
            />
          </button>
        </a>
        <Tooltip id="anon-tooltip" className="text-xs bg-deepBlue" />
      </>
    );
  } else if (rolActual === 3) {
    return (
      <>
        <button
          onMouseOver={handleMouseOverResponsable}
          onMouseOut={handleMouseOutResponsable}
          onClick={() => setIsOpen(true)}
        >
          <AppAccessIcon
            label="responsable"
            primaryColor={iconColor()}
          />
        </button>
        <ModalAsignarResponsable
          show={isOpen}
          setRolActual={setRolActual}
          onClose={() => setIsOpen(false)}
          usuario={usuario}
        />
      </>
    );
  } else {
    return (
      <>
        <button
          onMouseOver={handleMouseOverResponsable}
          onMouseOut={handleMouseOutResponsable}
          onClick={() => setIsOpen(true)}
        >
          <AppAccessIcon
            label="responsable"
            primaryColor={iconColor()}
          />
        </button>
        <ModalAsignarResponsable
          show={isOpen}
          setRolActual={setRolActual}
          onClose={() => setIsOpen(false)}
          usuario={usuario}
        />
      </>
    );
  }
};

export default ResponsableIcon;
