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

export default function TabsDefaultExample() {
  const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/sprintsdata`;
  const { user } = useContext(userDataContext);
  const idjira = user?.id_jira;
  const [data4, setData4] = useState<any[]>([]);
  const [chart3Data, setChart3Data] = useState<any[]>([]);

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

  const getStoryPointsDoneLastSprints = async () => {
    try {
      const response = await axios.get(`${URI}/sprintsdoneglobal`);
      const data = response.data.sprints[0];
      setChart3Data(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLastSprintsToDoStorypoints();
    getStoryPointsDoneLastSprints();
  }, []);

  return (
    <Tabs id="default">
      <div className="w-full">
        <TabList>
          <Tab>Metricas Personales</Tab>
          <Tab>Metricas Sprint Mas Reciente</Tab>
        </TabList>
      </div>
      <TabPanel>
        <div className="w-full">
          <div className="grid grid-cols-1 justify-center w-full h-auto md:h-[28rem] p-5">
            <h3 className="text-lg text-center underline-offset-1	underline">
              Story Points en To Do
            </h3>
            <SameDataComposedChart data={data4} />
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="w-full">
          <div className="grid grid-cols-1 justify-center w-full h-auto md:h-[28rem] p-5">
            <h3 className="text-lg text-center underline-offset-1	underline">
              Storypoints completados en los ultimos sprint
            </h3>
            <SameDataComposedChart data={chart3Data} />
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
}
