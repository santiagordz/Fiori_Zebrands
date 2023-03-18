import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import DynamicTable from '@atlaskit/dynamic-table';
import ResponsableIcon from './ResponsableIcon';

import BorrarIcon from './BorrarIcon';
import EditarIcon from './EditarIcon';
import Avatar from '@atlaskit/avatar';

import TableHead from './TableHead';
// import RolesIcon from './RolesIcon';

import './css/table.css';

const URI = 'http://localhost:8000/usuarios/roles';

interface Usuario {
  correo: string;
  password: string;
  nombre: string;
  foto: string;
  rol: string;
  // etiqueta: string;
}

const createKey = (input: string) => {
  return input
    ? input.replace(/^(the|a|an)/, '').replace(/\s/g, '')
    : input;
};

const UsersTableCopy = () => {
  const [TableRows, setTableRows] = useState([{}]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get(URI);
    setTableRows(res.data);
  };

  const tableRows = TableRows.map((usuario: any, index: number) => ({
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
        content: <div className="text-center">{usuario.correo}</div>,
      },
      {
        key: createKey('admin'), // va a cambiar
        content: (
          <div className="text-center">
            <p>{usuario.rol}</p>
          </div>
        ), // va a cambiar
      },
      {
        key: createKey('fullstack'),
        // va a cambiar
        content: <div className="text-center">{'Fullstack'}</div>, // va a cambiar
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

  return (
    <div className="max-w-[1125px] bg-white rounded-lg border-8 border-white">
      <DynamicTable
        head={TableHead}
        rows={tableRows}
        emptyView={<div className="text-3xl">No hay registros</div>}
        rowsPerPage={10}
      />
    </div>
  );
};

export default UsersTableCopy;
