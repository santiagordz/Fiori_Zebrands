import { FC, useState } from 'react';
import { B300, N500, N200, Y300, R400 } from '@atlaskit/theme/colors';
import { token } from '@atlaskit/tokens';

import TrashIcon from '@atlaskit/icon/glyph/trash';
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled';
import AppAccessIcon from '@atlaskit/icon/glyph/app-access';

import Avatar from '@atlaskit/avatar';
import Button from '@atlaskit/button';

const createKey = (input: string) => {
  return input
    ? input.replace(/^(the|a|an)/, '').replace(/\s/g, '')
    : input;
};
//EXPERIMENTOS
// const ResponsableButton = ();

//Componente Responsable
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

interface Usuario {
  nombre: string;
  email: string;
  rol: string;
  etiqueta: string;
  foto: string;
}

const usuarios = [
  {
    id: 1,
    nombre: 'Santiago Rodriguez Murialdo',
    email: 'santi@zeb',
    rol: 'Admin',
    etiqueta: 'Fullstack',
    foto: 'https://static.boredpanda.com/blog/wp-content/uploads/2020/12/2-5fe5b1f770d61__700.jpg',
  },
  {
    id: 2,
    nombre: 'Santiago Rodriguez Murialdo',
    email: 'santi@zeb',
    rol: 'Admin',
    etiqueta: 'Fullstack',
    foto: 'https://static.boredpanda.com/blog/wp-content/uploads/2020/12/2-5fe5b1f770d61__700.jpg',
  },
  {
    id: 3,
    nombre: 'Santiago Rodriguez Murialdo',
    email: 'santi@zeb',
    rol: 'Admin',
    etiqueta: 'Fullstack',
    foto: 'https://static.boredpanda.com/blog/wp-content/uploads/2020/12/2-5fe5b1f770d61__700.jpg',
  },
  {
    id: 4,
    nombre: 'Santiago Rodriguez Murialdo',
    email: 'santi@zeb',
    rol: 'Admin',
    etiqueta: 'Fullstack',
    foto: 'https://static.boredpanda.com/blog/wp-content/uploads/2020/12/2-5fe5b1f770d61__700.jpg',
  },
  {
    id: 5,
    nombre: 'Santiago Rodriguez Murialdo',
    email: 'santi@zeb',
    rol: 'Admin',
    etiqueta: 'Fullstack',
    foto: 'https://static.boredpanda.com/blog/wp-content/uploads/2020/12/2-5fe5b1f770d61__700.jpg',
  },
];

const TableRows = usuarios.map((usuario: Usuario, index: number) => ({
  key: `row-${index}`,
  isHighlighted: false,
  cells: [
    {
      key: usuario.nombre,
      content: (
        <span className="flex justify-center">
          <Avatar src={usuario.foto} />
          <p>{usuario.nombre}</p>
        </span>
      ),
    },
    {
      key: usuario.email,
      content: <div className="text-center">{usuario.email}</div>,
    },
    {
      key: createKey(usuario.rol),
      content: <div className="text-center">{usuario.rol}</div>, // va a cambiar
    },
    {
      key: createKey(usuario.etiqueta),
      content: <div className="text-center">{usuario.etiqueta}</div>, // va a cambiar
    },
    {
      key: `responsable-${index}`,
      //Va a cambiar
      content: (
        <div className="flex justify-center">
          <ResponsableIcon />
        </div>
      ),
    },
    {
      key: `editar-${index}`,
      //Va a cambiar
      content: (
        <div className="flex justify-center">
          <EditarIcon />
        </div>
      ),
    },
    {
      key: `borrar-${index}`,
      //Va a cambiar
      content: (
        <div className="flex justify-center">
          <BorrarIcon />
        </div>
      ),
    },
  ],
}));

export default TableRows;
