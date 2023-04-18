import Button from '@atlaskit/button';
import DownloadIcon from '@atlaskit/icon/glyph/download';
import { FC, useState } from 'react';
import ModalReporte from './ModalReporte';

const BotonReporte: FC = ({}) => {
  const [isModalReporteOpen, setIsModalReporteOpen] =
    useState<boolean>(false);
  return (
    <>
      {isModalReporteOpen && (
        <ModalReporte setIsModalReporteOpen={setIsModalReporteOpen} />
      )}
      <Button
        onClick={() => setIsModalReporteOpen(true)}
        appearance="link"
        iconBefore={<DownloadIcon label="descargar reporte" />}
      >
        Descargar reporte
      </Button>
    </>
  );
};

export default BotonReporte;
