import React, { FC } from 'react';
import DesignTemplate from '../../components/design-template/DesignTemplate';
import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import MetricasSprint from './MetricasSprint';
import MetricasEpics from './MetricasEpics';
import MetricasPersonales from './MetricasPersonales';
import SameDataControlledChart from '../../components/charts/SameDataComposedChart';
import Button from '@atlaskit/button';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { Reporte } from '../../components';
import DownloadIcon from '@atlaskit/icon/glyph/download';

interface MetricasProps {}

export const Panel = ({
  children,
  testId,
}: {
  children: React.ReactNode;
  testId?: string;
}) => <div data-testid={testId}>{children}</div>;

const Metricas: FC<MetricasProps> = ({}) => {
  return (
    <DesignTemplate
      buttons={
        <>
          <Button
            appearance="link"
            iconBefore={<DownloadIcon label="descargar reporte" />}
          >
            <PDFDownloadLink
              document={<Reporte />}
              fileName="reporte.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : 'Descargar reporte'
              }
            </PDFDownloadLink>
          </Button>
        </>
      }
    >
      {/* !! BORRAR */}
      <PDFViewer height={1000} width={'100%'}>
        <Reporte />
      </PDFViewer>
      <Tabs
        onChange={(index) => console.log('Selected Tab', index + 1)}
        id="default"
      >
        <TabList>
          <Tab>Personales</Tab>
          <Tab>Sprint</Tab>
          <Tab>Epic</Tab>
        </TabList>
        <TabPanel>
          <Panel>
            <MetricasPersonales />
          </Panel>
        </TabPanel>
        <TabPanel>
          <MetricasSprint />
        </TabPanel>
        <TabPanel>
          <Panel>
            <MetricasEpics />
          </Panel>
        </TabPanel>
      </Tabs>
    </DesignTemplate>
  );
};

export default Metricas;
