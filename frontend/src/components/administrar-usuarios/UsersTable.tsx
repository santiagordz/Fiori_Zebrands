import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import DynamicTable from '@atlaskit/dynamic-table';
import ResponsableIcon from './ResponsableIcon';

import BorrarIcon from './BorrarIcon';
import EditarIcon from './EditarIcon';
import RolIcon from './RolIcon';
import Avatar from '@atlaskit/avatar';

import TableHead from './TableHead';
// import RolesIcon from './RolesIcon';

import './css/table.css';
import EtiquetaIcon from './EtiquetaIcon';

const URI = 'http://localhost:8000/usuarios/info';

interface Etiqueta {
  etiqueta: string;
  color: string;
}

interface Usuario {
  id: number;
  correo: string;
  password: string;
  nombre: string;
  foto: string;
  roles: string[];
  etiquetas: Etiqueta[];
}

const createKey = (input: string) => {
  return input
    ? input.replace(/^(the|a|an)/, '').replace(/\s/g, '')
    : input;
};

const UsersTable = () => {
  const [TableRows, setTableRows] = useState([{}]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get(URI);
    const usuariosConPrimerRol = res.data.usuarios.map(
      (usuario: any) => ({
        ...usuario,
        primerRol: usuario.roles.shift(),
      })
    );
    setTableRows(usuariosConPrimerRol);
  };

  console.log(TableRows);

  const tableRows = TableRows.map((usuario: any) => ({
    key: usuario.id,
    isHighlighted: false,
    cells: [
      {
        key: usuario.nombre,
        content: (
          <span className="flex items-center">
            <Avatar src={usuario.foto} />
            <p>{usuario.nombre}</p>
          </span>
        ),
      },
      {
        key: usuario.correo,
        content: <div className="text-center">{usuario.correo}</div>,
      },
      {
        key: usuario.primerRol,
        content: (
          <div className="text-center">
            <RolIcon rol={usuario.primerRol} />
          </div>
        ),
      },
      {
        key: usuario.etiqueta,
        content: (
          <div>
            <EtiquetaIcon etiquetas={usuario.etiquetas} />
          </div>
        ),
        // va a cambiar
      },
      {
        key: `responsable-${usuario.id}`,
        //Va a cambiar
        content: (
          <div className="flex justify-center">
            <ResponsableIcon />
          </div>
        ),
      },
      {
        key: `editar-${usuario.id}`,
        //Va a cambiar
        content: (
          <div className="flex justify-center">
            <EditarIcon />
          </div>
        ),
      },
      {
        key: `borrar-${usuario.id}`,
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
    <div className="bg-white rounded-lg border-8 border-white">
      <DynamicTable
        head={TableHead}
        rows={tableRows}
        emptyView={<div className="text-3xl">No hay registros</div>}
        rowsPerPage={10}
      />
    </div>
  );
};

export default UsersTable;
