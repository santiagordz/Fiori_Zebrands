import { SimpleTag as Tag } from '@atlaskit/tag';
import TagGroup from '@atlaskit/tag-group';
import { FC } from 'react';

interface EtiquetaIconProps {
  etiquetas: Array<any>;
}

const EtiquetaIcon: FC<EtiquetaIconProps> = ({ etiquetas }) => {
  if (etiquetas) {
    const etiquetasRender =
      etiquetas &&
      etiquetas.map((etiqueta, index) => (
        <div id="tag" key={index}>
          <Tag
            text={etiqueta.nombre}
            color={etiqueta.color}
            appearance="rounded"
          />
        </div>
      ));
    return <TagGroup>{etiquetasRender}</TagGroup>;
  } else {
    return <Tag text="NULL" color="standard" appearance="rounded" />;
  }
};

export default EtiquetaIcon;
