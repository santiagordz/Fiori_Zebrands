import React, { FC, useCallback, useState, useEffect } from 'react';
import DesignTemplate from '../../components/design-template/DesignTemplate';
import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import MetricasSprint from './MetricasSprint';
import MetricasEpics from './MetricasEpics';
import MetricasPersonales from './MetricasPersonales';
import SameDataControlledChart from '../../components/charts/SameDataComposedChart';
import Button from '@atlaskit/button';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { BotonReporte, Reporte } from '../../components';
import DownloadIcon from '@atlaskit/icon/glyph/download';
import axios from 'axios';
import RefreshIcon from '@atlaskit/icon/glyph/refresh';
import ModalLoading from '../../components/metricas/ModalLoading';
import ModalUpdateIssue from '../../components/metricas/ModalUpdateIssues';
import EmojiFrequentIcon from '@atlaskit/icon/glyph/emoji/frequent';
import { Tooltip } from 'react-tooltip';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/issues`;

export const Panel = ({
  children,
  testId,
}: {
  children: React.ReactNode;
  testId?: string;
}) => <div data-testid={testId}>{children}</div>;

const Metricas: FC = ({}) => {
  const [isModalBackOpen, setIsModalBackOpen] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [lastFetch, setLastFetch] = useState<string>('');

  const getLastFetch = useCallback(async () => {
    try {
      const { data: fecha } = await axios.get(`${URI}/last-fetch`);
      const fechaParsed = new Date(fecha);

      const dia = fechaParsed
        .getUTCDate()
        .toString()
        .padStart(2, '0');
      const mes = (fechaParsed.getUTCMonth() + 1)
        .toString()
        .padStart(2, '0');
      const anio = fechaParsed.getUTCFullYear().toString();
      const hora = fechaParsed.getHours();
      const minutos = fechaParsed.getMinutes();

      setLastFetch(`${dia}/${mes}/${anio} ${hora}:${minutos}`);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getLastFetch();

    return () => {
      setLastFetch('');
    };
  }, []);

  return (
    <>
      {isModalBackOpen && (
        <ModalUpdateIssue
          getLastFetch={getLastFetch}
          setIsModalOpen={setIsModalBackOpen}
          setModalLoading={setIsModalLoading}
        />
      )}
      {isModalLoading && <ModalLoading />}
      <DesignTemplate
        tab={<div className="mt-5"></div>}
        buttons={
          <>
            <BotonReporte />
            <div className="flex flex-col justify-center gap-1">
              <Button
                onClick={() => setIsModalBackOpen(true)}
                appearance="primary"
                iconBefore={<RefreshIcon label="Refresh" />}
              >
                Sincronizar datos
              </Button>
              {lastFetch ? (
                <a
                  data-tooltip-id="anon-tooltip"
                  data-tooltip-content={
                    'Fecha de la última sincronización.'
                  }
                >
                  <p className="text-[0.7rem] text-gray-500 items-center flex w-full gap-1">
                    <EmojiFrequentIcon
                      label="Fecha de última sincronización"
                      primaryColor="#6a7890"
                      size="small"
                    />
                    {lastFetch}
                  </p>
                  <Tooltip
                    id="anon-tooltip"
                    place="bottom"
                    className="text-xs bg-deepBlue"
                  />
                </a>
              ) : null}
            </div>
          </>
        }
      >
        <Tabs id="default">
          <div className="absolute top-[-64px] w-full">
            <TabList>
              <Tab>Personales</Tab>
              <Tab>Sprint</Tab>
              <Tab>Epic</Tab>
            </TabList>
          </div>
          <TabPanel>
            <div className="w-full">
              <MetricasPersonales />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="w-full">
              <MetricasSprint />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="w-full">
              <MetricasEpics />
            </div>
          </TabPanel>
        </Tabs>
      </DesignTemplate>
    </>
  );
};

export default Metricas;
