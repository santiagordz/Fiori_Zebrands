import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { token } from '@atlaskit/tokens';
import { N200, N500, B300, Y300, B200 } from '@atlaskit/theme/colors';
import AppAccessIcon from '@atlaskit/icon/glyph/app-access';
import { userDataContext } from '../../contexts';
import ModalAsignarResponsble from './ModalAsignarResponable';

const URI = 'http://localhost:8000/usuarios/';

const ResponsableIcon = (idUsuario: any) => {
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
    getUsuario(idUsuario.idUsuario);
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
      <button disabled>
        <AppAccessIcon
          label="responsable"
          primaryColor={token('color.icon.brand', Y300)}
        />
      </button>
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
        <ModalAsignarResponsble
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
        <ModalAsignarResponsble
          show={isOpen}
          onClose={() => setIsOpen(false)}
          usuario={user}
        />
      </>
    );
  }
};

export default ResponsableIcon;
