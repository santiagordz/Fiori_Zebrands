import React, { FC } from 'react';
import FlagFilledIcon from '@atlaskit/icon/glyph/flag-filled';
import { SimpleTag as Tag } from '@atlaskit/tag';
import ChevronRightLargeIcon from '@atlaskit/icon/glyph/chevron-right-large';
import { retrospective } from './preguntasdummy';

interface RetrospectivaGeneralProps {}

const RetrospectivaGeneral: FC<RetrospectivaGeneralProps> = ({}) => {
  return (
    <div className="flex py-6 ">
      {' '}
      {/* Div de todo lo que va adentro de la parte azul */}
      <div className="flex flex-col py-3 px-5 w-full rounded bg-white border border-solid border-gray-300 border-collapse">
        {' '}
        {/* Div del rectángulo blanco */}
        <div className="flex w-full justify-between ">
          {' '}
          {/* Div de la parte superior */}
          <div className="gap-4 flex flex-row">
            {/* Div del Icono y título */}
            <FlagFilledIcon
              label="retrospectiva-pendiente"
              primaryColor="#8270DB"
            />
            <h3 className="font-bold">{retrospective.titulo}</h3>
          </div>
          <div className="flex flex-row gap-4 ml-auto">
            {/* Div de el tag */}
            <Tag
              text="back-end"
              appearance="rounded"
              color="yellowLight"
            />
          </div>
        </div>
        <div className="flex py-5 text-sm">
          <p>{retrospective.descripcion}</p>
        </div>
        <div className="flex flex-row text-xs justify-between">
          {/* Div de la parte de hasta abajo */}
          <p>Fecha de Inicio: {retrospective.fechaInicio} </p>
          <ChevronRightLargeIcon
            label="flecha"
            primaryColor="#1D7AFC"
          />
        </div>
      </div>
    </div>
  );
};

export default RetrospectivaGeneral;
