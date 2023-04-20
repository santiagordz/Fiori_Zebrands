import Button from '@atlaskit/button';
import ArrowRightIcon from '@atlaskit/icon/glyph/arrow-right';
import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ComposedChart, PieChart } from '../../components/charts';
import { userDataContext } from '../../contexts';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/metricas`;

export default function TabsDefaultExample() {
  const navigate = useNavigate();
  const { user } = useContext(userDataContext);
  const idjira = user?.id_jira;
  const [data4, setData4] = useState<any[]>([]);
  const [chart3Data, setChart3Data] = useState<any[]>([]);
  const [personalBackupData, setPersonalBackupData] = useState<any[]>(
    []
  );

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

  const getIssuesByUser = async () => {
    try {
      const response = await axios.get(`${URI}/user/${idjira}`);
      const data = response.data.issues[0];
      setPersonalBackupData(data);
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
    getIssuesByUser();
  }, []);

  return (
    <div className="w-auto h-auto">
      <Tabs id="default">
        <div className="w-full h-auto my-3">
          <TabList>
            <Tab>
              <p className="text-xs">Métricas personales</p>
            </Tab>
            <Tab>
              <p className="text-xs">Métricas sprint más reciente</p>
            </Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className="flex flex-col justify-center w-full lg:h-[28rem] h-[18rem] lg:p-5 p-2">
            {data4 && data4.length > 0 ? (
              <>
                <h3 className="lg:text-base text-md text-center font-medium">
                  Story points en To Do
                </h3>
                <ComposedChart data={data4} />
              </>
            ) : (
              <>
                <h3 className="lg:text-base text-md text-center font-medium">
                  Issues totales y completados
                </h3>
                <PieChart data={personalBackupData} />
              </>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="w-full">
            <div className="flex flex-col justify-center w-full lg:h-[28rem] h-[18rem] lg:p-5 p-2">
              <h3 className="lg:text-base text-md text-center font-medium">
                Story points completados en los últimos sprints
              </h3>
              <ComposedChart data={chart3Data} />
            </div>
          </div>
        </TabPanel>
      </Tabs>
      <div className="w-full flex justify-end">
        <Button
          appearance="link"
          className="scale-90"
          iconAfter={
            <ArrowRightIcon
              label="ir a métricas"
              primaryColor="#1D7AFC"
            />
          }
          onClick={() => navigate(`/metricas`)}
        >
          Ir a métricas
        </Button>
      </div>
    </div>
  );
}
