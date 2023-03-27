import React, { FC } from 'react';
import Button from '@atlaskit/button';

interface BotonGestionarEtiquetasProps {
  texto: string;
}

const BotonGestionarEtiquetas: FC<BotonGestionarEtiquetasProps> = ({
  texto,
}) => {
  return (
    <div>
      <Button appearance="link">Gestionar {texto}</Button>
    </div>
  );
};

export default BotonGestionarEtiquetas;
