import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import React, { FC, useState } from 'react';
import DesignTemplate from '../../components/design-template/DesignTemplate';
import MetricasEpics from './MetricasEpics';
import MetricasPersonales from './MetricasPersonales';
import MetricasSprint from './MetricasSprint';

import Button from '@atlaskit/button';
import RefreshIcon from '@atlaskit/icon/glyph/refresh'
import ModalUpdateIssue from '../../components/metricas/modalUpdateIssues';

interface MetricasProps {}

export const Panel = ({
  children,
  testId,
}: {
  children: React.ReactNode;
  testId?: string;
}) => <div data-testid={testId}>{children}</div>;

const Metricas: FC<MetricasProps> = ({}) => {
  const [isModalBackOpen, setIsModalBackOpen] = useState(false);
  return (
    <>
    <div className="flex flex-col gap-5 bg-[#ffffff] py-5 px-5 rounded-sm shadow-sm">
        {isModalBackOpen && (
          <ModalUpdateIssue setIsModalOpen={setIsModalBackOpen} />
        )}
    </div>
    <DesignTemplate 
      tab={<div className="mt-5"></div>} 
      buttons={<>
      <Button onClick={() => setIsModalBackOpen(true)} appearance='primary' iconBefore={<RefreshIcon label='Refresh'/>} className=''>
        Actualizar Issues
      </Button>
      </>}
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
