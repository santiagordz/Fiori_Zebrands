import React, { FC } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import DynamicTable from '@atlaskit/dynamic-table';
import Tag from '@atlaskit/tag';

import './css/etiquetasTable.css';
import EditarEtiquetaIcon from './EditarEtiquetaIcon';
import BorrarEtiquetaIcon from './BorrarEtiquetarIcon';

const URI = 'http://localhost:8000/etiquetas';

interface EtiquetasTableProps {}

const EtiquetasTable: FC<EtiquetasTableProps> = ({}) => {
  const [Etiquetas, setEtiquetas] = useState([{}]);

  const getEtiquetas = () => {
    try {
      const res = axios.get(`${URI}`);
      res.then((res) => {
        setEtiquetas(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEtiquetas();
  }, []);

  const tableHead = {
    cells: [
      {
        key: 'etiqueta',
        content: 'Etiqueta',
        isSortable: false,
      },
      {
        key: 'etiqueta',
        content: 'Nombre',
        isSortable: false,
      },
      {
        key: 'etiqueta',
        content: 'color',
        isSortable: false,
      },
      {
        key: 'editar',
        isSortable: false,
      },
      {
        key: 'eliminar',
        isSortable: false,
      },
    ],
  };

  const tableRows = Etiquetas.map((etiqueta: any) => ({
    key: etiqueta.id,
    isHighlighted: false,
    cells: [
      {
        key: etiqueta.id,
        content: (
          <Tag
            text={etiqueta.nombre}
            isRemovable={false}
            color={etiqueta.color}
          />
        ),
      },
      {
        key: etiqueta.id,
        content: <div className="text-sm">{etiqueta.nombre}</div>,
      },
      {
        key: etiqueta.id,
        content: (
          <div className={`text-sm bg-${etiqueta.color}`}>
            {etiqueta.color}
          </div>
        ),
      },
      {
        key: etiqueta.id,
        content: <EditarEtiquetaIcon etiqueta={etiqueta} />,
      },
      {
        key: etiqueta.id,
        content: <BorrarEtiquetaIcon etiqueta={etiqueta} />,
      },
    ],
  }));

  return (
    <div className="flex">
      <DynamicTable
        emptyView={<div>NO HAY NADA</div>}
        head={tableHead}
        rows={tableRows}
      />
    </div>
  );
};

export default EtiquetasTable;
