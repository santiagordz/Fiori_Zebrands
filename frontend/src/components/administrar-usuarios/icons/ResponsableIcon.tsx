import AppAccessIcon from '@atlaskit/icon/glyph/app-access';
import { B200, B300, N200, N500, Y300 } from '@atlaskit/theme/colors';
import { token } from '@atlaskit/tokens';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { ModalAsignarResponsable } from '../modals';
import { Tooltip } from 'react-tooltip';

const URI = 'http://localhost:8000/usuarios/';

interface ResponsableIconProps {
  idUsuario: number;
}

const ResponsableIcon: FC<ResponsableIconProps> = ({ idUsuario }) => {
  const [user, setUser] = useState();
  const [color, setColor] = useState(true);
  const [colorHover, setColorHover] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [rolActual, setRolActual] = useState(0);

  const getUsuario = (id: number) => {
    try {
      const res = axios.get(`${URI}info/${id}`);
      res.then((response) => {
        const usuario = response.data.usuario.shift();
        setUser(usuario);
        setRolActual(usuario.rol);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsuario(idUsuario);
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

  const iconColor = () => {
    if (rolActual === 3) {
      if (clicked) {
        return color ? N500 : B300;
      } else {
        return colorHover ? N500 : N200;
      }
    } else {
      if (clicked) {
        return color ? B300 : B300;
      } else {
        return colorHover ? B300 : B200;
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
              primaryColor={token('color.icon.brand', Y300)}
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
            primaryColor={token('color.icon.brand', iconColor())}
          />
        </button>
        <ModalAsignarResponsable
          show={isOpen}
          onClose={() => setIsOpen(false)}
          usuario={user}
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
            primaryColor={token('color.icon.brand', iconColor())}
          />
        </button>
        <ModalAsignarResponsable
          show={isOpen}
          onClose={() => setIsOpen(false)}
          usuario={user}
        />
      </>
    );
  }
};

export default ResponsableIcon;
