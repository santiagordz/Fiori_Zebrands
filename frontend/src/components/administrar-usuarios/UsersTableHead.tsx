import React, { FC } from 'react';

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
      content: <UsersTableHead align="center">Rol</UsersTableHead>,
      isSortable: true,
      width: 10,
    },
    {
      key: 'etiqueta',
      content: (
        <UsersTableHead align="center">Etiquetas</UsersTableHead>
      ),
      isSortable: false,
      width: 15,
    },
    {
      key: 'responsable',
      content: (
        <UsersTableHead align="center">Responsable</UsersTableHead>
      ),
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
