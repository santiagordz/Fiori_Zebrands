import React, { FC, useState } from 'react';
import { Checkbox } from '@atlaskit/checkbox';
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled';
import MoreVerticalIcon from '@atlaskit/icon/glyph/more-vertical';
import { SimpleTag } from '@atlaskit/tag';
import ListaPreguntas from './ListaPreguntas';

interface PreguntaProps {
  pregunta: any
}

const handleOnChange = () => {

}

const Pregunta: FC<PreguntaProps> = ({pregunta}) => {

  return (
    <div className='space-y-[2vmin]'>
      {pregunta.map((pregunta: any)=>(
      <div key={pregunta.id_pregunta} className="px-[2vmax] py-[2vmin] flex flex-row items-center bg-[rgb(233,242,255)] justify-between font-bold rounded-lg ">
          <div className="flex flex-row gap-[1vmax] items-center">
            <Checkbox
              isChecked={pregunta.predeterminada}
              size="large"
              onChange={handleOnChange}
            />
            {pregunta.id_pregunta}
            {pregunta.pregunta}
          </div>
          <div className="flex items-center gap-[4vmin]">
            <div>
              <SimpleTag text={`Tipo: ${pregunta.id_tipo_pregunta} `} color="greenLight" />
            </div>
            <button className="flex items-center" >
              <EditFilledIcon label="" size="medium" />
            </button>
            <button className="flex items-center">
              <MoreVerticalIcon label="" size="medium" />
            </button>
          </div>
        </div>
      ))}
      
      </div>
  );
};

export default Pregunta;
