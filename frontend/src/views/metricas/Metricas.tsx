import React, { FC } from 'react';
import DesignTemplate from '../../components/design-template/DesignTemplate';
import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import Piechart from '../../components/charts/Piechart';
import MetricasSprint from './MetricasSprint';

interface MetricasProps {}


export const Panel = ({
  children,
  testId,
}: {
  children: React.ReactNode;
  testId?: string;
}) => (
  <div data-testid={testId}>
    {children}
  </div>
);

const Metricas: FC<MetricasProps> = ({}) => {
  return <DesignTemplate>
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
        <Piechart></Piechart>
        </Panel>
      </TabPanel>
      <TabPanel>
          <MetricasSprint />
      </TabPanel>
      <TabPanel>
        <Panel>
          Epic
        </Panel>
      </TabPanel>
    </Tabs>
  </DesignTemplate>;
};

export default Metricas;
