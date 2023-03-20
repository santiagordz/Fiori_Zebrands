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
      <Cuestionario />
    </DesignTemplate>
  );
};

export default MisRetrospectivas;
