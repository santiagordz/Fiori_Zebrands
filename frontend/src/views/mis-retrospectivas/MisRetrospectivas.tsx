import React, { FC } from 'react';
import {
  DesignTemplate,
  RetrospectivaGeneral,
} from '../../components';
import Cuestionario from '../../components/respuesta-retro/Cuestionario';
{
  /* De esta manera mandamos a llamar a los componentes */
}

interface MisRetrospectivasProps {}

const MisRetrospectivas: FC<MisRetrospectivasProps> = ({}) => {
  return (
    <DesignTemplate>
      {/* <Cuestionario /> */}
      <h2 className="text-lg font-bold text-information">
        Retrospectivas pendientes de responder
      </h2>
      <RetrospectivaGeneral />
      <h2 className="text-lg font-bold text-information">
        {' '}
        Otras Retrospectivas
      </h2>
    </DesignTemplate>
  );
};

export default MisRetrospectivas;
