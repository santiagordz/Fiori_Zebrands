import Button from '@atlaskit/button';
import EmojiFrequentIcon from '@atlaskit/icon/glyph/emoji/frequent';
import RefreshIcon from '@atlaskit/icon/glyph/refresh';
import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { FC, useCallback, useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import DesignTemplate from '../../components/design-template/DesignTemplate';
import ModalLoading from '../../components/metricas/ModalLoading';
import ModalUpdateIssue from '../../components/metricas/ModalUpdateIssues';
import MetricasEpics from './MetricasEpics';
import MetricasPersonales from './MetricasPersonales';
import MetricasSprint from './MetricasSprint';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/issues`;

const Metricas: FC = ({}) => {
  const [isModalBackOpen, setIsModalBackOpen] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [lastFetch, setLastFetch] = useState<string>('');

  const getLastFetch = useCallback(async () => {
    try {
      const { data: fecha } = await axios.get(`${URI}/last-fetch`);
      const fechaParsed = parseISO(fecha);

      const userTimeZone =
        Intl.DateTimeFormat().resolvedOptions().timeZone;
      const localDate = utcToZonedTime(fechaParsed, userTimeZone);

      const formattedDate = format(localDate, 'dd/MM/yyyy HH:mm');
      setLastFetch(formattedDate);
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
        buttons={
          <>
            <div className="flex flex-col justify-center gap-1 lg:p-0 p-10">
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
                    className="text-xs bg-deepBlue z-20"
                  />
                </a>
              ) : null}
            </div>
          </>
        }
      >
        {!isModalLoading && (
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
        )}
      </DesignTemplate>
    </>
  );
};

export default Metricas;
