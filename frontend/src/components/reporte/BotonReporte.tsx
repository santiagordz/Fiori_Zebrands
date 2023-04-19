import Button from '@atlaskit/button';
import DownloadIcon from '@atlaskit/icon/glyph/download';
import { FC, useState } from 'react';
import ModalReporte from './ModalReporte';

const BotonReporte: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && <ModalReporte setIsOpen={setIsModalOpen} />}
      <Button
        appearance="link"
        onClick={() => {
          setIsModalOpen(true);
        }}
        iconBefore={<DownloadIcon label="descargar reporte" />}
      >
        Descargar reporte
      </Button>
    </>
  );
};

export default BotonReporte;
