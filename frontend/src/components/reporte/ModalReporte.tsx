import Blanket from '@atlaskit/blanket';
import Button from '@atlaskit/button';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import axios from 'axios';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import { FC, useEffect, useRef, useState, useCallback } from 'react';
import SameDataComposedChart from '../charts/SameDataComposedChart';
import Reporte from './Reporte';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/metricas`;

interface ModalReporteProps {
  setIsOpen: (isOpen: boolean) => void;
}

const ModalReporte: FC<ModalReporteProps> = ({ setIsOpen }) => {
  const [isReady, setIsReady] = useState(11111111);
  const chartRef = useRef<HTMLDivElement>(null!);
  const [canvas, setCanvas] = useState<string>('');
  const [dataDoneAcumS, setDataDoneAcumS] = useState<any[]>([]);

  const getStoryPointsDoneLastSprintsProgressive = async () => {
    try {
      const response = await axios.get(`${URI}/SUMdoneglobal`);
      const data = response.data.sprints[0];
      setDataDoneAcumS(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleCanvas = useCallback(async () => {
    const canvasTemp = await html2canvas(chartRef.current);
    const newChartImageUrl = canvasTemp.toDataURL('image/jpeg', 1.0);
    setCanvas(newChartImageUrl);
  }, []);

  useEffect(() => {
    getStoryPointsDoneLastSprintsProgressive();
  }, []);

  useEffect(() => {
    if (dataDoneAcumS.length > 0) {
      handleCanvas();
    }
  }, [dataDoneAcumS]);

  useEffect(() => {
    document.body.classList.add('modal-open');

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  return (
    <>
      <Blanket isTinted={true}>
        <motion.div
          animate={{ opacity: 1 }}
          className="flex flex-col w-full h-full items-center justify-center opacity-0"
        >
          <div className="flex flex-col bg-white rounded p-10 gap-7 items-center justify-center drop-shadow-lg w-[70vw] h-[85vh]">
            <div className="flex w-full justify-between items-center">
              <p className="text-textNormal font-semibold text-base">
                Reporte
              </p>
              <div
                className="flex items-center justify-center cursor-pointer p-1"
                onClick={() => setIsOpen(false)}
              >
                <CrossIcon label="cerrar modal" size="small" />
              </div>
            </div>
            <div className="w-[98%] h-5/6 overflow-y-auto border-[1rem] border-slate-300 rounded py-5 px-4 ">
              {/* !BORRAR! */}
              <PDFViewer width="100%" height="100%">
                <Reporte canvasURL={canvas} />
              </PDFViewer>

              {/* AGREGAR LABEL EN EJE X */}
              <div className="w-[25rem] h-[20rem]" ref={chartRef}>
                <SameDataComposedChart data={dataDoneAcumS} />
              </div>
            </div>
            <div
              className="flex items-center justify-center
            w-full gap-10"
            >
              <Button
                appearance="default"
                onClick={() => setIsOpen(false)}
              >
                Cancelar
              </Button>
              <Button appearance="primary">
                <PDFDownloadLink
                  document={<Reporte canvasURL={canvas} />}
                  fileName="reporte.pdf"
                >
                  {({ blob, url, loading, error }) =>
                    loading
                      ? 'Cargando documento...'
                      : 'Descargar reporte'
                  }
                </PDFDownloadLink>
              </Button>
            </div>
          </div>
        </motion.div>
      </Blanket>
    </>
  );
};

export default ModalReporte;
