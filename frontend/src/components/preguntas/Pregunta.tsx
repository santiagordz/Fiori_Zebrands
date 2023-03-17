import React, { FC } from 'react';
import { Checkbox } from '@atlaskit/checkbox';
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled';
import MoreVerticalIcon from '@atlaskit/icon/glyph/more-vertical';
import { SimpleTag } from '@atlaskit/tag';
import { useCallback } from 'react';
import { css, jsx } from '@emotion/react';

interface PreguntaProps {
  /*     id_pregunta: number,
        predeterminada: boolean,
        pregunta: string,
        id_tipo_pregunta: number,
        tipo_pregunta: string
     */
}

const predeterminada = true;
const id = 1;
const pred = true;
const pregunta = '¿Que mejorarias del proceso de retrospectiva?';
const id_preg = 2;
const label = 'Abierta';

const Pregunta: FC<PreguntaProps> = ({ }) => {
  
  const [predeterminada, setPredeterminada] =
    React.useState<boolean>(true);

  const handleButtonOnChange = () => {
    setPredeterminada(!predeterminada);
  };

  return (
    <div className=" py-2 px-10">
      <div className="px-[4vmin] py-[2vmin] flex flex-row items-center bg-[rgb(233,242,255)] justify-between font-bold rounded-lg">
        <div className="flex flex-row gap-[3vmin] items-center">
          <Checkbox
            isChecked={predeterminada}
            size="medium"
            onChange={handleButtonOnChange}
          />
          {pregunta}
        </div>
        <div className="flex items-center gap-[4vmin]">
          <div>
            <SimpleTag text={`Tipo: ${label}`} color="greenLight" />
          </div>
          <button className="flex items-center">
            <EditFilledIcon label="" size="medium" />
          </button>
          <button className="flex items-center">
            <MoreVerticalIcon label="" size="medium" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pregunta;
