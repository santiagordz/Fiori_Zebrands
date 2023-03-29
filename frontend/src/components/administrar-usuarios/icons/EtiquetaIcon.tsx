import React, { FC, useEffect, useState } from 'react';
import { SimpleTag as Tag } from '@atlaskit/tag';
import TagGroup from '@atlaskit/tag-group';
import type { Etiqueta } from '../UsersTable';

interface EtiquetaIconProps {
  etiquetas: Array<Etiqueta>;
}

const EtiquetaIcon: FC<EtiquetaIconProps> = ({ etiquetas }) => {
  if (etiquetas) {
    const etiquetasRender =
      etiquetas &&
      etiquetas.map((etiqueta, index) => (
        <div id="tag" key={index}>
          <Tag text={etiqueta.nombre} color={etiqueta.color} />
        </div>
      ));
    return <TagGroup>{etiquetasRender}</TagGroup>;
  } else {
    return <Tag text="NULL" color="standard" />;
  }
};

export default EtiquetaIcon;
