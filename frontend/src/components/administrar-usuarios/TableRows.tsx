import { FC, useState } from 'react';
import { B300, N500, Y300, R400 } from '@atlaskit/theme/colors';
import { token } from '@atlaskit/tokens';

import TrashIcon from '@atlaskit/icon/glyph/trash';
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled';
import AppAccessIcon from '@atlaskit/icon/glyph/app-access';

import Avatar from '@atlaskit/avatar';

const createKey = (input: string) => {
  return input
    ? input.replace(/^(the|a|an)/, '').replace(/\s/g, '')
    : input;
};
//Componente Responsable
const ResponsableIcon = () => {
  const [Color, setColor] = useState(true);
  const handleClickResponsable = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setColor(!Color);
  };
  if (Color == true) {
    return (
      <button onClick={handleClickResponsable}>
        <AppAccessIcon
          label="Responsable Icon Negro"
          primaryColor={token('color.icon.brand', N500)}
        />
      </button>
    );
  } else {
    return (
      <button onClick={handleClickResponsable}>
        <AppAccessIcon
          label="Responsable Icon Azul"
          primaryColor={token('color.icon.brand', B300)}
        />
      </button>
    );
  }
};

const BorrarIcon = () => {
  const [color, setColor] = useState(true);
  const handleHoverBorrar = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setColor(!color);
  };
  if (color == true) {
    return (
      <button
        onMouseOver={handleHoverBorrar}
        onMouseOut={handleHoverBorrar}
      >
        <TrashIcon
          label="Trash Icon No Hover"
          primaryColor={token('color.icon.brand', N500)}
        />
      </button>
    );
  } else {
    return (
      <button
        onMouseOver={handleHoverBorrar}
        onMouseOut={handleHoverBorrar}
      >
        <TrashIcon
          label="Trash Icon Hover"
          primaryColor={token('color.icon.brand', R400)}
        />
      </button>
    );
  }
};

const EditarIcon = () => {
  const [color, setColor] = useState(true);
  const handleHoverEditar = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setColor(!color);
  };
  if (color == true) {
    return (
      <button
        onMouseOver={handleHoverEditar}
        onMouseOut={handleHoverEditar}
      >
        <EditFilledIcon
          label="Edit Filled No Hover"
          primaryColor={token('color.icon.brand', N500)}
        />
      </button>
    );
  } else {
    return (
      <button
        onMouseOver={handleHoverEditar}
        onMouseOut={handleHoverEditar}
      >
        <EditFilledIcon
          label="Edit Filled Hover"
          primaryColor={token('color.icon.brand', Y300)}
        />
      </button>
    );
  }
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
