import { ReactNode } from 'react';
import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ChartCards } from '../../components';
import SameDataComposedChart from '../../components/charts/SameDataComposedChart';
import { userDataContext } from '../../contexts';

export const Panel = ({
  children,
  testId,
}: {
  children: ReactNode;
  testId?: string;
}) => <div data-testid={testId}>{children}</div>;

export default function TabsDefaultExample2() {
  const { user } = useContext(userDataContext);
  const idjira = user?.id_jira;

  const [data4, setData4] = useState<any[]>([]);

  const getLastSprintsToDoStorypoints = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/sprintsdata/lastsprintstodostorypoints/${idjira}`
      );
      const data = response.data.issues[0];
      setData4(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLastSprintsToDoStorypoints();
  }, []);

  return (
    <Tabs id="default">
      <TabList>
        <Tab>Todo</Tab>
        <Tab>Completado</Tab>
      </TabList>
      <TabPanel>
        <Panel>
          <div className='w-full'>
            <ChartCards title="Storypoints pendientes">
              <SameDataComposedChart data={data4} />
            </ChartCards>
          </div>
        </Panel>
      </TabPanel>
      <TabPanel>
        <Panel>
          <div>
            <ChartCards title="Storypoints pendientes">
              <SameDataComposedChart data={data4} />
            </ChartCards>
          </div>
        </Panel>
      </TabPanel>
    </Tabs>
  );
}
