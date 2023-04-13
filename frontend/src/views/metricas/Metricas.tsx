import React, { FC } from 'react';
import DesignTemplate from '../../components/design-template/DesignTemplate';
import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import MetricasSprint from './MetricasSprint';
import MetricasEpics from './MetricasEpics';
import MetricasPersonales from './MetricasPersonales';
import SameDataControlledChart from '../../components/charts/SameDataComposedChart';

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
    <DesignTemplate>
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
            <div className="w-full">
              <MetricasEpics />
            </div>
          </Panel>
        </TabPanel>
      </Tabs>
    </DesignTemplate>
  );
};

export default Metricas;
