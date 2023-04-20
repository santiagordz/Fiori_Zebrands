import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Piechart from '../../components/charts/Piechart';
import DropdownSprints from '../../components/charts/DropdownSprints';
import StackedBarChart from '../../components/charts/StackedBarchart';
import SameDataComposedChart from '../../components/charts/SameDataComposedChart';
import { ChartCards } from '../../components';

const URI = `/api/metricas`;

const MetricasSprint: FC = ({}) => {
  const [sprintsSeleccionadas, setSprintsSeleccionadas] =
    useState<any>([]);

  const [sprintsValuesArray, setSprintsValuesArray] = useState([]);

  const handleSprintSeleccionados = (sprints: any[]) => {
    setSprintsSeleccionadas(sprints);
  };

  const [chartData, setChartData] = useState<any[]>([]);
  const [chart2Data, setChart2Data] = useState<any[]>([]);
  const [chart3Data, setChart3Data] = useState<any[]>([]);
  const [chart4Data, setChart4Data] = useState<any[]>([]);
  const [chart5Data, setChart5Data] = useState<any[]>([]);
  const [chart6Data, setChart6Data] = useState<any[]>([]);

  const getDataSprintsById = async () => {
    if (sprintsValuesArray.length === 0) {
      return setChartData([]);
    }

    try {
      const urlPath = sprintsValuesArray.join(',');
      const response = await axios.get(`${URI}/sprints/${urlPath}`);
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

  const getStoryPointsToDoLastSprints = async () => {
    try {
      const response = await axios.get(`${URI}/sprintstodoglobal`);
      const data = response.data.sprints[0];
      setChart4Data(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getStoryPointsDoneLastSprintsProgressive = async () => {
    try {
      const response = await axios.get(`${URI}/SUMdoneglobal`);
      const data = response.data.sprints[0];
      setChart5Data(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getStoryPointsToDoLastSprintsProgressive = async () => {
    try {
      const response = await axios.get(`${URI}/SUMtodoglobal`);
      const data = response.data.sprints[0];
      setChart6Data(data);
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

    getDataSprintsById();
    getDataStoryPointsById();
    getStoryPointsDoneLastSprints();
    getStoryPointsToDoLastSprints();
    getStoryPointsDoneLastSprintsProgressive();
    getStoryPointsToDoLastSprintsProgressive();
  }, [sprintsSeleccionadas]);

  return (
    <div className="flex flex-col gap-5">
      <div className="gap-4 flex flex-col justify-left p-7 w-full rounded border border-gray-200 bg-white items-center">
        <h2 className="flex-nowrap w-full font-medium text-sm text-information">
          Métricas generales por sprint
        </h2>
        <div className="flex flex-col items-baseline gap-1 w-full">
          <p className="font-semibold text-xs text-label">Sprints</p>
          <DropdownSprints
            onSprintsSeleccionadasChange={handleSprintSeleccionados}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 justify-center gap-7 w-full h-auto md:h-[70rem]">
        <div className="md:col-span-3">
          <ChartCards title="Story points en Done acumulados en los ultimos sprints">
            <SameDataComposedChart data={chart5Data} />
          </ChartCards>
        </div>

        <ChartCards title="Story points completados en los ultimos sprint">
          <SameDataComposedChart
            data={chart3Data}
            barColor="#8838ff"
            lineColor="#388bff"
          />
        </ChartCards>

        <ChartCards title="Story points en To Do de los ultimos sprints">
          <SameDataComposedChart data={chart4Data} />
        </ChartCards>

        <ChartCards title="Story points en To Do acumulados por los ultimos sprints">
          <SameDataComposedChart
            data={chart6Data}
            barColor="#8838ff"
            lineColor="#388bff"
          />
        </ChartCards>

        <div className="md:col-span-3 flex flex-col md:flex-row gap-7">
          <ChartCards title="Story points del sprint">
            {chart2Data && chart2Data.length > 0 ? (
              <StackedBarChart data={chart2Data} />
            ) : (
              <p className="text-xs">
                No hay datos para graficar con el sprint elegido
              </p>
            )}
          </ChartCards>

          <ChartCards title="Issues totales y completado">
            {chartData && chartData.length > 0 ? (
              <Piechart data={chartData} />
            ) : (
              <p className="text-xs">
                No hay datos para graficar con el sprint elegido
              </p>
            )}
          </ChartCards>
        </div>
      </div>
    </div>
  );
};

export default MetricasSprint;
