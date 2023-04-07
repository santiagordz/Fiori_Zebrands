import Avatar from '@atlaskit/avatar';
import { Checkbox } from '@atlaskit/checkbox';
import DynamicTable from '@atlaskit/dynamic-table';
import type { RowType } from '@atlaskit/dynamic-table/dist/types/types';
import { TagColor } from '@atlaskit/tag';
import axios from 'axios';
import React, { FC, useContext, useEffect, useState } from 'react';
import EtiquetaIcon from '../../../../administrar-usuarios/icons/EtiquetaIcon';
import { EtiquetaType, newRetroContext } from '../../local-contexts';

interface UsersTableHeadProps {
  children: React.ReactNode;
}

interface TablaUsuariosProps {}

const UsersTableHead: FC<UsersTableHeadProps> = ({ children }) => {
  return (
    <p className="!normal-case text-left px-3 font-semibold text-[0.8rem] text-textNormal">
      {children}
    </p>
  );
};

const head = {
  cells: [
    {
      key: 'nombre',
      content: <UsersTableHead>Nombre</UsersTableHead>,
      isSortable: true,
      width: 20,
    },
    {
      key: 'email',
      content: <UsersTableHead>Email</UsersTableHead>,
      isSortable: true,
      width: 15,
    },
    {
      key: 'etiqueta',
      content: <UsersTableHead>Etiqueta</UsersTableHead>,
      isSortable: false,
      width: 10,
    },
  ],
};

interface Etiqueta {
  id: number;
  nombre: string;
  color: TagColor;
  id_color: number;
}

interface Usuario {
  id: number;
  correo: string;
  password: string;
  nombre: string;
  foto: string;
  rol: number;
  etiquetas: Etiqueta[];
}

const TablaUsuarios: FC<TablaUsuariosProps> = () => {
  const { newRetro } = useContext(newRetroContext);
  const tableRows: RowType[] = [];

  newRetro?.usuarios &&
    newRetro!.usuarios.map((usuario, i) =>
      tableRows.push({
        key: usuario.id.toString(),
        isHighlighted: false,
        cells: [
          {
            key: usuario.nombre,
            content: (
              <span className="flex items-center gap-2 ml-5 w-full">
                <Avatar src={usuario.foto} size="small" />
                <div className="w-full">
                  <p>{usuario.nombre || 'Nuevo usuario'} </p>
                </div>
              </span>
            ),
          },
          {
            key: usuario.correo,
            content: (
              <p className="!normal-case text-left px-3 font-semibold text-[0.8rem] text-textNormal">
                {usuario.correo}
              </p>
            ),
          },
          {
            key: usuario.etiquetas[0]?.nombre,
            content: <EtiquetaIcon etiquetas={usuario.etiquetas} />,
          },
        ],
      })
    );

  return (
    <DynamicTable
      head={head}
      rows={tableRows}
      isFixedSize
      onSort={() => {}}
      defaultSortKey="nombre"
      defaultSortOrder="ASC"
    />
  );
};

export default TablaUsuarios;
