import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Piechart from '../../components/charts/Piechart';
import DropdownSprints from '../../components/charts/DropdownSprints';
import StackedBarChart from '../../components/charts/StackedBarchart';

interface MetricasSprintProps {}
const URI = 'http://localhost:8000/sprintsdata';

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
      console.log(chart2Data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDataSprintsById();
    getDataStoryPointsById();
  }, [sprintsSeleccionadas]);

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
      </div>
    </div>
  );
};

export default MetricasSprint;
