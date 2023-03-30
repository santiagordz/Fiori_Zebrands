import React, { FC } from 'react';

interface UsersTableHeadProps {
  children: React.ReactNode;
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
      key: 'rol',
      content: <UsersTableHead>Rol</UsersTableHead>,
      isSortable: true,
      width: 15,
    },
    {
      key: 'etiqueta',
      content: <UsersTableHead>Etiqueta</UsersTableHead>,
      isSortable: false,
      width: 10,
    },
    {
      key: 'responsable',
      content: <UsersTableHead>Responsable</UsersTableHead>,
      isSortable: false,
      width: 5,
    },
    {
      key: 'borrar',
      isSortable: false,
      width: 5,
    },
    {
      key: 'editar',
      isSortable: false,
      width: 5,
    },
  ],
};

export default head;
