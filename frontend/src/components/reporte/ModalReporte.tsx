import Blanket from '@atlaskit/blanket';
import Button from '@atlaskit/button';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import { PDFDownloadLink, usePDF } from '@react-pdf/renderer';
import { motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import Reporte from './Reporte';
import { DropdownRetros } from './selections';

// https://udithajanadara.medium.com/export-react-component-as-a-pdf-5afba8ba02ee

interface ModalReporteProps {
  setIsModalReporteOpen: (value: boolean) => void;
}

const labelStyle = 'text-xs font-semibold text-label';

const ModalReporte: FC<ModalReporteProps> = ({
  setIsModalReporteOpen,
}) => {
  const [selectedRetroId, setSelectedRetroId] = useState<number>(0);
  useEffect(() => {
    document.body.classList.add('modal-open');

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  return (
    <Blanket isTinted>
      <motion.div
        animate={{ opacity: 1 }}
        className="flex flex-col w-full h-full items-center justify-center opacity-0"
      >
        <div className="flex flex-col bg-white rounded p-10 gap-8 items-center justify-center drop-shadow-lg min-w-[50vw] max-w-[65vw]">
          <div className="flex w-full justify-between items-baseline gap-12">
            <div>
              <p className="text-textNormal font-semibold text-base">
                Descargar reporte
              </p>
              <div className="w-full text-xs text-[#44546f] mb-5">
                Elige los elementos que deseas incluir en el reporte.
              </div>
            </div>
            <div
              className="flex items-center justify-center cursor-pointer p-1"
              onClick={() => setIsModalReporteOpen(false)}
            >
              <CrossIcon label="cerrar modal" size="small" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-6 h-fit max-h-[55vh] px-3 overflow-y-auto pb-2">
            <div className="flex flex-col gap-2">
              <p className={labelStyle}>Retrospectiva</p>
              <DropdownRetros
                setSelectedRetroId={setSelectedRetroId}
                selectedRetroId={selectedRetroId}
              />
            </div>
          </div>

          <div
            className="flex items-center justify-end
            w-full gap-5 mt-2"
          >
            <Button
              appearance="subtle"
              onClick={() => setIsModalReporteOpen(false)}
            >
              Cancelar
            </Button>
            <Button appearance="primary">
              <PDFDownloadLink
                document={
                  <Reporte idRetrospectiva={selectedRetroId} />
                }
                fileName="reporte.pdf"
              >
                {({ blob, url, loading, error }) =>
                  loading
                    ? 'Cargando reporte...'
                    : 'Descargar reporte'
                }
              </PDFDownloadLink>
            </Button>
          </div>
        </div>
      </motion.div>
    </Blanket>
  );
};

export default ModalReporte;
