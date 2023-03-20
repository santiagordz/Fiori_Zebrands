import React, { FC } from 'react';
import { DesignTemplate, RetrospectivaGeneral } from '../../components'; {/* De esta manera mandamos a llamar a los componentes */}

interface MisRetrospectivasProps { }

const MisRetrospectivas: FC<MisRetrospectivasProps> = ({}) => {
  return (
    <DesignTemplate>
      <h2 className='text-lg font-bold text-information'>Retrospectivas pendientes de responder</h2>
      <RetrospectivaGeneral />  {/* De esta manera mandamos a llamar a los componentes */}
    </DesignTemplate>
  );
};

export default MisRetrospectivas;
