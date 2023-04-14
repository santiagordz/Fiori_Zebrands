import React, { FC, useEffect } from 'react';
import StackedBarChart from '../../components/charts/StackedBarchart';
import Piechart from '../../components/charts/Piechart';
import { useContext } from 'react';
import { userDataContext } from '../../contexts';
import { useState } from 'react';
import axios from 'axios';
import DropdownSprints from '../../components/charts/DropdownSprints';
import SameDataComposedChart from '../../components/charts/SameDataComposedChart';

interface MetricasPersonalesProps {}

const MetricasPersonales: FC<MetricasPersonalesProps> = ({}) => {
  const [sprintsSeleccionadas, setSprintsSeleccionadas] =
    useState<any>([]);

  const handleSprintSeleccionados = (sprints: any[]) => {
    setSprintsSeleccionadas(sprints);
  };

  const sprintsValuesArray = sprintsSeleccionadas.map((obj: any) => {
    return obj.value;
  });

  const { user } = useContext(userDataContext);
  const idjira = user?.id_jira;
  const name = user?.nombre;

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
          `${
            import.meta.env.VITE_APP_BACKEND_URI
          }/sprintsdata/user/${idjira}/${urlPath}`
        );
        const data = response.data.issues[0];
        setData(data);
        return data;
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_APP_BACKEND_URI
          }/sprintsdata/user/${idjira}`
        );
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
          `${
            import.meta.env.VITE_APP_BACKEND_URI
          }/sprintsdata/userstorypoints/${idjira}/${urlPath}`
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
          `${
            import.meta.env.VITE_APP_BACKEND_URI
          }/sprintsdata/userstorypoints/${idjira}`
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
        `http://localhost:8000/sprintsdata/lastsprintsstorypoints/${idjira}`
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
        `http://localhost:8000/sprintsdata/lastsprintstodostorypoints/${idjira}`
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
        `http://localhost:8000/sprintsdata/personalSUM/${idjira}`
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
        `http://localhost:8000/sprintsdata/personalSUMtodo/${idjira}`
      );
      const data = response.data.issues[0];
      setData6(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getIssuesByUser();
    getStoryPointsByUser();
    getLastSprintsStorypoints();
    getLastSprintsToDoStorypoints();
    getPersonalStorypointsProgressive();
    getPersonalStorypointsProgressive2();
  }, [sprintsSeleccionadas]);

  console.log(data3);
  return (
    <div className="w-full">
      <div className="py-5 flex justify-left gap-6 border-b-2 border-zinc-200">
        <div className="flex items-center">
          <label className="text-lg pr-4">Sprint:</label>
          <DropdownSprints
            sprintsActuales={[]}
            onSprintsSeleccionadasChange={handleSprintSeleccionados}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-center pt-10">
        <div className="grid justify-items-center">
          <div className="">
            <label className="text-2xl"> Storypoints de {name}</label>
          </div>
          <div className="">
            <StackedBarChart data={data2} />
          </div>
        </div>
        <div className="grid justify-items-center">
          <div>
            <label className="text-2xl">
              {' '}
              Issues Totales y Completados
            </label>
          </div>
          <div className="pl-20 pt-12">
            <Piechart data={data} />
          </div>
        </div>
        <div className="grid justify-items-center">
          <div>
            <label className="text-2xl">
              {' '}
              Storypoints completados por {name}
            </label>
            <div className="pl-20 pt-12">
              <SameDataComposedChart data={data3} />
            </div>
          </div>
        </div>
        <div className="grid justify-items-center">
          <div>
            <label className="text-2xl">
              {' '}
              Storypoints pendientes por {name}
            </label>
            <div className="pl-20 pt-12">
              <SameDataComposedChart data={data4} />
            </div>
          </div>
        </div>
        <div className="grid justify-items-center">
          <div>
            <label className="text-2xl">
              {' '}
              Storypoints done acumulados por sprint de {name}
            </label>
            <div className="pl-20 pt-12">
              <SameDataComposedChart data={data5} />
            </div>
          </div>
        </div>
        <div className="grid justify-items-center">
          <div>
            <label className="text-2xl">
              {' '}
              Storypoints to do acumulados por sprint de {name}
            </label>
            <div className="pl-20 pt-12">
              <SameDataComposedChart data={data6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricasPersonales;
