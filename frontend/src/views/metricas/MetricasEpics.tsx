import React, { FC, useEffect, useState } from 'react';
import DropdownSprints from '../../components/charts/DropdownSprints';
import SameDataComposedChart from '../../components/charts/SameDataComposedChart';
import Piechart from '../../components/charts/Piechart';
import StackedBarChart from '../../components/charts/StackedBarchart';
import DropdownEpics from '../../components/charts/DropdownEpics';
import axios from 'axios';
import { ChartCards } from '../../components';

interface MetricasEpicsProps {}

const MetricasEpics: FC<MetricasEpicsProps> = ({}) => {
  const [epicsSeleccionadas, setEpicsSeleccionadas] = useState<any>({
    value: 'TPECG-3202',
    label: 'Implementar secciones de la aplicación',
  });
  const handleEpicsSeleccionados = (epics: string[]) => {
    setEpicsSeleccionadas(epics);
  };

  const [chartData, setChartData] = useState<any[]>([]);
  const [chart2Data, setChart2Data] = useState<any[]>([]);
  const [chart3Data, setChart3Data] = useState<any[]>([]);
  const [chart4Data, setChart4Data] = useState<any[]>([]);
  const [chart5Data, setChart5Data] = useState<any[]>([]);
  const [chart6Data, setChart6Data] = useState<any[]>([]);

  const getData = async () => {
    const response = await fetch(
      `http://localhost:8000/sprintsdata/epic/${epicsSeleccionadas.value}`
    );
    const data = await response.json();
    const response2 = await fetch(
      `http://localhost:8000/sprintsdata/epic/storypoints/${epicsSeleccionadas.value}`
    );
    const data2 = await response2.json();

    setChartData(data.issues[0]);
    setChart2Data(data2.issues[0]);
  };

  const getEpicsDoneGlobal = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/sprintsdata/epicsdoneglobal`
      );
      const data = response.data.sprints[0];
      setChart3Data(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getToDoEpicsDoneGlobal = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/sprintsdata/epicstodoglobal`
      );
      const data = response.data.sprints[0];
      setChart4Data(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getEpicsDone = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/sprintsdata/epicsSUMdoneglobal`
      );
      const data = response.data.sprints[0];
      setChart5Data(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getToDoEpicsDone = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/sprintsdata/epicsSUMtodoglobal`
      );
      const data = response.data.sprints[0];
      setChart6Data(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
    getEpicsDoneGlobal();
    getToDoEpicsDoneGlobal();
    getEpicsDone();
    getToDoEpicsDone();
  }, [epicsSeleccionadas]);

  return (
    <div className="flex flex-col gap-5">
      <div className="gap-4 flex flex-col justify-left p-7 w-full rounded border border-gray-200 bg-white items-center">
        <h2 className="flex-nowrap w-full font-medium text-sm text-information">
          Métricas generales por epic
        </h2>
        <div className="flex flex-col items-baseline gap-1 w-full">
          <p className="font-semibold text-xs text-label">Epics</p>
          <DropdownEpics
            onEpicsSeleccionadasChange={handleEpicsSeleccionados}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 justify-center gap-7 w-full h-auto md:h-[70rem]">
        <div className="md:col-span-3 flex flex-col md:flex-row gap-7">
          <ChartCards title="Story points en Done por epic">
            <SameDataComposedChart data={chart3Data} />
          </ChartCards>

          <ChartCards title="Story points en To Do por epic">
            <SameDataComposedChart data={chart4Data} />
          </ChartCards>
        </div>

        <ChartCards title="Story points en Done acumulados por epic">
          <SameDataComposedChart data={chart5Data} />
        </ChartCards>
        <ChartCards title="Story points en To Do acumulados por epic">
          <SameDataComposedChart data={chart6Data} />
        </ChartCards>

        <div className="md:col-span-2 ">
          <ChartCards title="Story points del epic">
            {chart2Data && chart2Data.length > 0 ? (
              <StackedBarChart data={chart2Data} />
            ) : (
              <p className="text-xs">
                No hay datos para graficar con el epic elegido
              </p>
            )}
          </ChartCards>
        </div>

        <ChartCards title="Comparación de sprints">
          {chartData && chartData.length > 0 ? (
            <Piechart data={chartData} />
          ) : (
            <p className="text-xs">
              No hay datos para graficar con el epic elegido
            </p>
          )}
        </ChartCards>
      </div>
    </div>
  );
};

export default MetricasEpics;
