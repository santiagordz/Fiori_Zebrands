import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import React, { FC } from 'react';
import DesignTemplate from '../../components/design-template/DesignTemplate';
import MetricasEpics from './MetricasEpics';
import MetricasPersonales from './MetricasPersonales';
import MetricasSprint from './MetricasSprint';

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
    <DesignTemplate tab={<div className="mt-5"></div>}>
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
  );
};

export default Metricas;
