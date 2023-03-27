import React, { FC } from 'react';
import Button from '@atlaskit/button';
import AddIcon from '@atlaskit/icon/glyph/add';

interface BotonRegistrarEtiquetaProps {}

const BotonRegistrarEtiqueta: FC<
  BotonRegistrarEtiquetaProps
> = ({}) => {
  return (
    <div>
      <Button appearance="primary" iconBefore={<AddIcon label="" />}>
        Registrar Etiqueta
      </Button>
    </div>
  );
};

export default BotonRegistrarEtiqueta;
