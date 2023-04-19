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
  align?: 'left' | 'right' | 'center';
}

const UsersTableHead: FC<UsersTableHeadProps> = ({
  children,
  align,
}) => {
  return (
    <p
      className={`!normal-case text-${
        align || 'left'
      } px-3 font-semibold text-[0.8rem] text-textNormal`}
    >
      {children}
    </p>
  );
};

const head = {
  cells: [
    {
      key: 'checkbox',
      content: (
        <UsersTableHead align="center">Seleccionar</UsersTableHead>
      ),
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
      content: (
        <UsersTableHead align="center">Etiquetas</UsersTableHead>
      ),
      isSortable: false,
      width: 10,
    },
  ],
};

interface TablaUsuariosProps {
  selectedTags: EtiquetaType[];
  selectedUsers: UsuarioType[];
  setSelectedUsers: (selectedUsers: UsuarioType[]) => void;
}

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
    const res = await axios.get(
      `${import.meta.env.VITE_APP_BACKEND_URI}/usuarios/info`
    );
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
          key: `nombre-${usuario.nombre}-${usuario.id}`,
          content: (
            <span className="flex items-center gap-2 ml-3 w-full">
              <Avatar src={usuario.foto} size="small" />
              <p className="text-sm w-full">{usuario.nombre}</p>
            </span>
          ),
        },
        {
          key: `correo-${usuario.correo}`,
          content: (
            <p className="text-sm w-full ml-3">{usuario.correo}</p>
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
