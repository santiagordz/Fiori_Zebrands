import Avatar from '@atlaskit/avatar';
import DynamicTable from '@atlaskit/dynamic-table';
import type { RowType } from '@atlaskit/dynamic-table/dist/types/types';
import { TagColor } from '@atlaskit/tag';
import React, { FC, useContext } from 'react';
import EtiquetaIcon from '../../../../administrar-usuarios/icons/EtiquetaIcon';
import { newRetroContext } from '../../local-contexts';

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
      key: 'etiqueta',
      content: (
        <UsersTableHead align="center">Etiquetas</UsersTableHead>
      ),
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

const TablaUsuarios: FC = () => {
  const { newRetro } = useContext(newRetroContext);
  const tableRows: RowType[] = [];

  newRetro?.usuarios &&
    newRetro!.usuarios.map((usuario, i) =>
      tableRows.push({
        key: usuario.id.toString(),
        isHighlighted: false,
        cells: [
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
            key: usuario.etiquetas[0]?.nombre + usuario.id,
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
