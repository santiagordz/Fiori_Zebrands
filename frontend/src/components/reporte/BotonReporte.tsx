import Button from '@atlaskit/button';
import DownloadIcon from '@atlaskit/icon/glyph/download';
import { FC, useState } from 'react';

const BotonReporte: FC = ({}) => {
  return (
    <>
      <Button
        appearance="link"
        iconBefore={<DownloadIcon label="descargar reporte" />}
      >
        Descargar reporte
      </Button>
    </>
  );
};

export default BotonReporte;
