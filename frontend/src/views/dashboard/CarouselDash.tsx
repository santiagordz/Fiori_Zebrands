import { ReactNode } from 'react';
import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ChartCards } from '../../components';
import SameDataComposedChart from '../../components/charts/SameDataComposedChart';
import { userDataContext } from '../../contexts';
import Button from '@atlaskit/button';
import ArrowRightIcon from '@atlaskit/icon/glyph/arrow-right';
import { useNavigate, useParams } from 'react-router-dom';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/metricas`;

export const Panel = ({
  children,
  testId,
}: {
  children: ReactNode;
  testId?: string;
}) => <div data-testid={testId}>{children}</div>;

export default function TabsDefaultExample() {
  const navigate = useNavigate();
  const { user } = useContext(userDataContext);
  const idjira = user?.id_jira;
  const [data4, setData4] = useState<any[]>([]);
  const [chart3Data, setChart3Data] = useState<any[]>([]);

  const getLastSprintsToDoStorypoints = async () => {
    try {
      const response = await axios.get(
        `${URI}/lastsprintstodostorypoints/${idjira}`
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
    <div className="w-auto h-auto">
      <Tabs id="default">
        <div className="w-full h-auto">
          <TabList>
            <Tab>Metricas personales</Tab>
            <Tab>Metricas sprint mas reciente</Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className="w-full">
            <div className="flex flex-col justify-center w-full lg:h-[28rem] h-[18rem] lg:p-5 p-2">
              <h3 className="lg:text-lg text-md text-center underline-offset-1	underline">
                Story Points en To Do
              </h3>
              <SameDataComposedChart data={data4} />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="w-full">
            <div className="flex flex-col justify-center w-full lg:h-[28rem] h-[18rem] lg:p-5 p-2">
              <h3 className="lg:text-lg text-md text-center underline-offset-1	underline">
                Storypoints completados en los ultimos sprint
              </h3>
              <SameDataComposedChart data={chart3Data} />
            </div>
          </div>
        </TabPanel>
      </Tabs>
      <div className="w-full justify-end self-end">
        <Button
          shouldFitContainer
          className="flex justify-end self-end"
          appearance="subtle-link"
          iconAfter={
            <ArrowRightIcon
              label="volver a gestionar retrospectivas"
              primaryColor="#1D7AFC"
            />
          }
          onClick={() => navigate(`/metricas`)}
        >
          {' '}
        </Button>
      </div>
    </div>
  );
}
