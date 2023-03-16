import { FC } from 'react';
import TrashIcon from '@atlaskit/icon/glyph/trash';
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled';
import Avatar from '@atlaskit/avatar';

const createKey = (input: string) => {
  return input
    ? input.replace(/^(the|a|an)/, '').replace(/\s/g, '')
    : input;
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
        <span className="flex">
          <Avatar src={usuario.foto} />
          <p>{usuario.nombre}</p>
        </span>
      ),
    },
    {
      key: usuario.email,
      content: usuario.email,
    },
    {
      key: createKey(usuario.rol),
      content: usuario.rol, // va a cambiar
    },
    {
      key: createKey(usuario.etiqueta),
      content: usuario.etiqueta, // va a cambiar
    },
    {
      key: `responsable-${index}`,
      //Va a cambiar
      content: (
        <button>
          <figure>Corona</figure>
        </button>
      ),
    },
    {
      key: `editar-${index}`,
      //Va a cambiar
      content: (
        <button>
          <EditFilledIcon label="Pencil Icon" />
        </button>
      ),
    },
    {
      key: `borrar-${index}`,
      //Va a cambiar
      content: (
        <button>
          <TrashIcon label="Trash Icon" />
        </button>
      ),
    },
  ],
}));

export default TableRows;
