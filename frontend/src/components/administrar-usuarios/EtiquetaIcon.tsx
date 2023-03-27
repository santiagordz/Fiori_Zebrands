import React, { FC, useEffect, useState } from 'react';
import { SimpleTag as Tag } from '@atlaskit/tag';
import TagGroup from '@atlaskit/tag-group';

interface EtiquetaIconProps {
  etiquetas: {
    nombre: string;
    color: any;
  }[];
}

const EtiquetaIcon: FC<EtiquetaIconProps> = ({ etiquetas }) => {
  if (etiquetas) {
    const etiquetasRender =
      etiquetas &&
      etiquetas.map((etiqueta, index) => (
        <Tag
          key={index}
          text={etiqueta.nombre}
          color={etiqueta.color}
        />
      ));
    return <TagGroup>{etiquetasRender}</TagGroup>;
  } else {
    return <Tag text="NULL" color="standard" />;
  }
};

export default EtiquetaIcon;
