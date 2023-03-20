import React, { FC } from 'react';
import { DesignTemplate, RetrospectivaGeneral } from '../../components';
import ResponderRetro from '../../components/respuesta-retro/ResponderRetro';

interface MisRetrospectivasProps { }

const MisRetrospectivas: FC<MisRetrospectivasProps> = ({ }) => {
  return (
    <DesignTemplate>
      {/* <h2 className='text-lg font-bold text-information'>Retrospectivas pendientes de responder</h2>
      <RetrospectivaGeneral /> 
      <h2 className='text-lg font-bold text-information'> Otras Retrospectivas</h2> */}
      <ResponderRetro />
    </DesignTemplate>
  );
};

export default MisRetrospectivas;
