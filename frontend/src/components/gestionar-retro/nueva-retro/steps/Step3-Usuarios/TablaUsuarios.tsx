import React, { FC, useContext, useEffect, useState } from 'react';
import Avatar from '@atlaskit/avatar';
import DynamicTable from '@atlaskit/dynamic-table';
import type { RowType } from '@atlaskit/dynamic-table/dist/types/types';
import { SimpleTag, TagColor } from '@atlaskit/tag';
import axios from 'axios';
import { newRetroContext, EtiquetaType } from '../../local-contexts';
import { SimpleTag as Tag } from '@atlaskit/tag';
import EtiquetaIcon from '../../../../administrar-usuarios/icons/EtiquetaIcon';
import { Checkbox } from '@atlaskit/checkbox';


interface UsersTableHeadProps {
  children: React.ReactNode;
}

interface TablaUsuariosProps {
  selectedTags: EtiquetaType[];
  onSelectedUsersChange: (selectedUsers: number[]) => void;
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

const TablaUsuarios: FC<TablaUsuariosProps> = ({
  selectedTags,
  onSelectedUsersChange,
}) => {
  const context = useContext(newRetroContext);
  const [userRow, setUserRow] = useState<Array<Usuario>>([]);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]); //Aqui se guardan los usuarios seleccionados
  const tableRows: RowType[] = [];

  useEffect(() => {
    getUsers();
  }, [selectedTags]);

  const getUsers = async () => {
    const res = await axios.get(
      'http://localhost:8000/usuarios/info'
    );
    const usuarios = res.data.usuarios
      .map((usuario: Usuario) => ({
        ...usuario,
      }))
      .filter((usuario: Usuario) => {
        const userTagIds = usuario.etiquetas.map((tag) => tag.id);
        return !selectedTags.some((tag) =>
          userTagIds.includes(tag.id)
        );
      });
    setUserRow(usuarios);
  };

  const handleUserSelection = (
    userId: number,
    isChecked: boolean
  ) => {
    if (isChecked) {
      setSelectedUsers((prevSelectedUsers) => [
        ...prevSelectedUsers,
        userId,
      ]);
    } else {
      setSelectedUsers((prevSelectedUsers) =>
        prevSelectedUsers.filter((id) => id !== userId)
      );
    }
    onSelectedUsersChange(selectedUsers);
  };

  userRow.map((usuario, i) =>
    tableRows.push({
      key: usuario.id.toString(),
      isHighlighted: false,
      cells: [
        {
          key: `checkbox-${usuario.id}`,
          content: (
            <Checkbox
              onChange={(e) =>
                handleUserSelection(
                  usuario.id,
                  e.currentTarget.checked
                )
              }
            />
          ),
        },
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
      isLoading={userRow.length === 0}
      isFixedSize
      onSort={() => {}}
      defaultSortKey="nombre"
      defaultSortOrder="ASC"
    />
  );
};

export default TablaUsuarios;