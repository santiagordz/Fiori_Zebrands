import Avatar from '@atlaskit/avatar';
import { Checkbox } from '@atlaskit/checkbox';
import DynamicTable from '@atlaskit/dynamic-table';
import type { RowType } from '@atlaskit/dynamic-table/dist/types/types';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import EtiquetaIcon from '../../../../administrar-usuarios/icons/EtiquetaIcon';
import {
  type EtiquetaType,
  type UsuarioType,
} from '../../local-contexts';

interface UsersTableHeadProps {
  children: React.ReactNode;
}

interface TablaUsuariosProps {
  selectedTags: EtiquetaType[];
  selectedUsers: UsuarioType[];
  setSelectedUsers: (selectedUsers: UsuarioType[]) => void;
}

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
      key: 'checkbox',
      content: <UsersTableHead>Seleccionar</UsersTableHead>,
      isSortable: false,
      width: 5,
    },
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

const TablaUsuarios: FC<TablaUsuariosProps> = ({
  selectedTags,
  setSelectedUsers,
  selectedUsers,
}) => {
  const [userRow, setUserRow] = useState<Array<UsuarioType>>([]);
  const tableRows: RowType[] = [];

  useEffect(() => {
    getUsers();
  }, [selectedTags]);

  const getUsers = async () => {
    const res = await axios.get(`/api/usuarios/info`);
    const usuarios = res.data.usuarios
      .map((usuario: UsuarioType) => ({
        ...usuario,
      }))
      .filter((usuario: UsuarioType) => {
        const userTagIds = usuario.etiquetas.map((tag) => tag.id);
        return !selectedTags.some((tag) =>
          userTagIds.includes(tag.id)
        );
      });
    setUserRow(usuarios);
  };

  const handleUserSelection = (
    user: UsuarioType,
    isChecked: boolean
  ) => {
    if (isChecked) {
      return [...selectedUsers, user];
    } else {
      return selectedUsers.filter(
        (selectedUser) => selectedUser.id !== user.id
      );
    }
  };

  userRow.map((usuario, i) =>
    tableRows.push({
      key: usuario.id.toString(),
      isHighlighted: false,
      cells: [
        {
          key: `checkbox-${usuario.id}`,
          content: (
            <div className="w-full flex items-center justify-center">
              <Checkbox
                onChange={(e) =>
                  setSelectedUsers(
                    handleUserSelection(
                      usuario,
                      e.currentTarget.checked
                    )
                  )
                }
              />
            </div>
          ),
        },
        {
          key: `nombre-${usuario.id}`,
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
          key: `correo-${usuario.id}`,
          content: (
            <p className="!normal-case text-left px-3 font-semibold text-[0.8rem] text-textNormal">
              {usuario.correo}
            </p>
          ),
        },
        {
          key: usuario.etiquetas[0]?.id + usuario.id,
          content: <EtiquetaIcon etiquetas={usuario.etiquetas} />,
        },
      ],
    })
  );

  return (
    <DynamicTable
      head={head}
      rows={tableRows}
      isLoading={userRow.length === 0}
      isFixedSize
      onSort={() => {}}
      defaultSortKey="nombre"
      defaultSortOrder="ASC"
    />
  );
};

export default TablaUsuarios;
