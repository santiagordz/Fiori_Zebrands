import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Piechart from '../../components/charts/Piechart';
import DropdownSprints from '../../components/charts/DropdownSprints';
import StackedBarChart from '../../components/charts/StackedBarchart';
import SameDataComposedChart from '../../components/charts/SameDataComposedChart';

interface MetricasSprintProps {}
const URI = 'http://localhost:8000/sprintsdata';


const data5 = [
  { nombre: 'Sprint 1', total_story_points: 12 },
  { nombre: 'Sprint 2', total_story_points: 4 },
  { nombre: 'Sprint 3', total_story_points: 2 },
  { nombre: 'Sprint 4', total_story_points: 2 },
  { nombre: 'Sprint 5', total_story_points: 8 },
  { nombre: 'Sprint 6', total_story_points: 3 },
];
const MetricasSprint: FC<MetricasSprintProps> = ({}) => {
  const [sprintsSeleccionadas, setSprintsSeleccionadas] =
    useState<any>([]);

  const handleSprintSeleccionados = (sprints: any[]) => {
    setSprintsSeleccionadas(sprints);
  };

  const sprintsValuesArray = sprintsSeleccionadas.map((obj: any) => {
    return obj.value;
  });

  const [chartData, setChartData] = useState<any[]>([]);
  const [chart2Data, setChart2Data] = useState<any[]>([]);
  const [chart3Data, setChart3Data] = useState<any[]>([]);
  const [chart4Data, setChart4Data] = useState<any[]>([]);

  const getDataSprintsById = async () => {
    if (sprintsValuesArray.length === 0) {
      return setChartData([]);
    }

    try {
      const urlPath = sprintsValuesArray.join(',');
      const response = await axios.get(`${URI}/${urlPath}`);
      const data = response.data.sprints[0];
      setChartData(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getDataStoryPointsById = async () => {
    if (sprintsValuesArray.length === 0) {
      return setChart2Data([]);
    }

    try {
      const urlPath = sprintsValuesArray.join(',');
      const response = await axios.get(
        `${URI}/storypoints/${urlPath}`
      );
      const data = response.data.sprints[0];
      setChart2Data(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getStoryPointsDoneLastSprints = async () => {
    try {
      const response = await axios.get(
        `${URI}/sprintsdoneglobal`
      );
      const data = response.data.sprints[0];
      setChart3Data(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getStoryPointsToDoLastSprints = async () => {
    try {
      const response = await axios.get(
        `${URI}/sprintstodoglobal`
      );
      const data = response.data.sprints[0];
      setChart4Data(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDataSprintsById();
    getDataStoryPointsById();
    getStoryPointsDoneLastSprints();
    getStoryPointsToDoLastSprints();
  }, [sprintsSeleccionadas]);

  console.log(chart3Data)
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
            <label className="text-2xl">
              {' '}
              Storypoints Del Sprint
            </label>
          </div>
          <div className="">
            <StackedBarChart data={chart2Data} />
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
            <Piechart data={chartData} />
          </div>
        </div>
        <div className="grid justify-items-center">
        <div>
          <label className="text-2xl">
            {' '}
            Storypoints completados en los ultimos sprints
          </label>
          <div className="pl-20 pt-12">
            <SameDataComposedChart data={chart3Data} />
            </div>
            </div>
            </div>
            <div className="grid justify-items-center">
        <div>
          <label className="text-2xl">
            {' '}
            Storypoints completados en los ultimos sprints
          </label>
          <div className="pl-20 pt-12">
            <SameDataComposedChart data={chart4Data} />
            </div>
            </div>
            </div>
      </div>
    </div>
  );
};

export default MetricasSprint;
