import axios from 'axios';
import { FC, useContext, useEffect, useState } from 'react';
import DropdownSprints from '../../components/charts/DropdownSprints';
import Piechart from '../../components/charts/Piechart';
import SameDataComposedChart from '../../components/charts/SameDataComposedChart';
import StackedBarChart from '../../components/charts/StackedBarchart';
import { userDataContext } from '../../contexts';
import { ChartCards } from '../../components';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/metricas`;

const MetricasPersonales: FC = ({}) => {
  const [sprintsSeleccionadas, setSprintsSeleccionadas] =
    useState<any>([]);
  const [sprintsValuesArray, setSprintsValuesArray] = useState([]);

  const handleSprintSeleccionados = (sprints: any[]) => {
    setSprintsSeleccionadas(sprints);
  };

  const { user } = useContext(userDataContext);
  const idjira = user?.id_jira;

  const [data, setData] = useState<any[]>([]);
  const [data2, setData2] = useState<any[]>([]);
  const [data3, setData3] = useState<any[]>([]);
  const [data4, setData4] = useState<any[]>([]);
  const [data5, setData5] = useState<any[]>([]);
  const [data6, setData6] = useState<any[]>([]);

  const getIssuesByUser = async () => {
    if (sprintsValuesArray.length != 0) {
      try {
        const urlPath = sprintsValuesArray.join(',');
        const response = await axios.get(
          `${URI}/user/${idjira}/${urlPath}`
        );
        const data = response.data.issues[0];
        setData(data);
        return data;
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const response = await axios.get(`${URI}/user/${idjira}`);
        const data = response.data.issues[0];
        setData(data);
        return data;
      } catch (error) {
        console.error(error);
      }
    }
  };

  const getStoryPointsByUser = async () => {
    if (sprintsValuesArray.length != 0) {
      try {
        const urlPath = sprintsValuesArray.join(',');
        const response = await axios.get(
          `${URI}/userstorypoints/${idjira}/${urlPath}`
        );
        const data = response.data.issues[0];
        setData2(data);
        return data;
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const response = await axios.get(
          `${URI}/userstorypoints/${idjira}`
        );
        const data = response.data.issues[0];
        setData2(data);
        return data;
      } catch (error) {
        console.error(error);
      }
    }
  };

  const getLastSprintsStorypoints = async () => {
    try {
      const response = await axios.get(
        `${URI}/lastsprintsstorypoints/${idjira}`
      );
      const data = response.data.issues[0];
      setData3(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

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

  const getPersonalStorypointsProgressive = async () => {
    try {
      const response = await axios.get(
        `${URI}/personalSUM/${idjira}`
      );
      const data = response.data.issues[0];
      setData5(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getPersonalStorypointsProgressive2 = async () => {
    try {
      const response = await axios.get(
        `${URI}/personalSUMtodo/${idjira}`
      );
      const data = response.data.issues[0];
      setData6(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setSprintsValuesArray(
      sprintsSeleccionadas.map((obj: any) => {
        return obj.value;
      })
    );

    getIssuesByUser();
    getStoryPointsByUser();
    getLastSprintsStorypoints();
    getLastSprintsToDoStorypoints();
    getPersonalStorypointsProgressive();
    getPersonalStorypointsProgressive2();
  }, [sprintsSeleccionadas]);

  return (
    <div className="flex flex-col gap-5">
      <div className="gap-4 flex flex-col justify-left p-7 w-full rounded border border-gray-200 bg-white items-center">
        <h2 className="flex-nowrap w-full font-medium text-sm text-information">
          Mis métricas
        </h2>
        <div className="flex flex-col items-baseline gap-1 w-full">
          <p className="font-semibold text-xs text-label">Sprints</p>
          <DropdownSprints
            onSprintsSeleccionadasChange={handleSprintSeleccionados}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 justify-center gap-7 w-full h-auto md:h-[70rem]">
        <div className="md:col-span-3 flex flex-col md:flex-row gap-7">
          <ChartCards title="Storypoint#cda3efs en Done acumulados por sprint">
            <SameDataComposedChart
              data={data5}
              barColor="#8838ff"
              lineColor="#388bff"
            />
          </ChartCards>
          <ChartCards title="Storypoints en To Do acumulados por sprint">
            <SameDataComposedChart data={data6} />
          </ChartCards>
        </div>

        <div className="md:col-span-3 flex flex-col md:flex-row gap-7">
          <ChartCards title="Storypoints pendientes">
            <SameDataComposedChart data={data4} />
          </ChartCards>
          <ChartCards title="Storypoints completados">
            <SameDataComposedChart
              data={data3}
              barColor="#8838ff"
              lineColor="#388bff"
            />
          </ChartCards>
        </div>

        <div className="md:col-span-2">
          <ChartCards title="Story points">
            {data2 && data2.length > 0 ? (
              <StackedBarChart data={data2} />
            ) : (
              <p className="text-xs">
                No hay datos para graficar con el sprint elegido
              </p>
            )}
          </ChartCards>
        </div>
        <ChartCards title="Issues totales y completados">
          {data && data.length > 0 ? (
            <Piechart data={data} />
          ) : (
            <p className="text-xs">
              No hay datos para graficar con el sprint elegido
            </p>
          )}
        </ChartCards>
      </div>
    </div>
  );
};

export default MetricasPersonales;
