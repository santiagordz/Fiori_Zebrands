import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { token } from '@atlaskit/tokens';
import { N200, N500, B300, Y300, B200 } from '@atlaskit/theme/colors';
import AppAccessIcon from '@atlaskit/icon/glyph/app-access';

const URI = 'http://localhost:8000/usuarios/';

const ResponsableIcon = (idUsuario: any) => {
  const [color, setColor] = useState(true);
  const [colorHover, setColorHover] = useState(true);
  const [clicked, setClicked] = useState(false);

  const [rolActual, setRolActual] = useState('');

  const getUsuario = (id: number) => {
    try {
      const res = axios.get(`${URI}info/${id}`);
      res.then((response) => {
        const usuario = response.data.usuario.shift();
        setRolActual(usuario.rol);
        console.log(rolActual);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const changeRol = (id: number, rol: string) => {
    try {
      const res = axios.post(`${URI}/updateUserRole/${id}`, {
        rol: rol,
      });
      res.then(() => window.location.reload());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsuario(idUsuario.idUsuario);
  }, []);

  const handleClickResponsable = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    try {
      if (rolActual == '3') {
        changeRol(idUsuario.idUsuario, '2');
      } else if (rolActual == '2') {
        changeRol(idUsuario.idUsuario, '3');
      }
    } catch {
      console.log('Error');
    }
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
    if (rolActual == '3') {
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

  if (rolActual == '1') {
    return (
      <button disabled>
        <AppAccessIcon
          label="Trash Icon"
          primaryColor={token('color.icon.brand', Y300)}
        />
      </button>
    );
  } else if (rolActual == '3') {
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
  } else {
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
  }
};

export default ResponsableIcon;
