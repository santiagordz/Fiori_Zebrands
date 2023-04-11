import DynamicTable from '@atlaskit/dynamic-table';
import type { RowType } from '@atlaskit/dynamic-table/dist/types/types';
import Tag from '@atlaskit/tag';
import axios from 'axios';
import { FC, useEffect, useState, useContext } from 'react';
import './css/etiquetasTable.css';
import { BorrarEtiquetaIcon, EditarEtiquetaIcon } from './icons';
import { getEtiquetasContext } from './local-contexts';

interface EtiquetasTableProps {}

interface EtiquetasTableHeadProps {
  children: React.ReactNode;
}

const EtiquetasTableHead: FC<EtiquetasTableHeadProps> = ({
  children,
}) => {
  return (
    <p className="!normal-case text-left px-3 font-semibold text-[0.8rem] text-textNormal">
      {children}
    </p>
  );
};

const EtiquetasTable: FC<EtiquetasTableProps> = ({}) => {
  const { etiquetas } = useContext(getEtiquetasContext);
  const tableRows: RowType[] = [];

  const tableHead = {
    cells: [
      {
        key: 'etiqueta',
        content: <EtiquetasTableHead>Etiqueta</EtiquetasTableHead>,
        isSortable: true,
      },
      {
        key: 'nombre',
        content: <EtiquetasTableHead>Nombre</EtiquetasTableHead>,
        isSortable: true,
      },
      {
        key: 'color',
        content: <EtiquetasTableHead>Color</EtiquetasTableHead>,
        isSortable: false,
      },
      {
        key: 'editar',
        isSortable: false,
        width: 5,
      },
      {
        key: 'eliminar',
        isSortable: false,
        width: 5,
      },
    ],
  };

  etiquetas.map((etiqueta) =>
    tableRows.push({
      key: etiqueta.id.toString(),
      isHighlighted: false,
      cells: [
        {
          key: `tag-${etiqueta.id}`,
          content: (
            <div id="tag" className="w-full flex justify-center">
              <Tag
                text={etiqueta.nombre}
                appearance="rounded"
                isRemovable={false}
                color={etiqueta.color}
              />
            </div>
          ),
        },
        {
          key: `nombre-${etiqueta.id}`,
          content: (
            <div className="text-sm w-full text-center">
              {etiqueta.nombre}
            </div>
          ),
        },
        {
          key: `color-${etiqueta.id}`,
          content: (
            <div
              className={`text-sm w-full text-center bg-${etiqueta.color}`}
            >
              {etiqueta.color}
            </div>
          ),
        },
        {
          key: `editar-${etiqueta.id}`,
          content: <EditarEtiquetaIcon etiqueta={etiqueta} />,
        },
        {
          key: `borrar-${etiqueta.id}`,
          content: <BorrarEtiquetaIcon etiqueta={etiqueta} />,
        },
      ],
    })
  );

  return (
    <div className="bg-white rounded-sm w-full px-12 py-6">
      <DynamicTable
        emptyView={<div>No hay etiquetas para mostrar</div>}
        head={tableHead}
        rows={tableRows}
      />
    </div>
  );
};

export default EtiquetasTable;
