import React, { FC, useEffect, useState } from 'react';
import DropdownSprints from '../../components/charts/DropdownSprints';
import SameDataComposedChart from '../../components/charts/SameDataComposedChart';
import Piechart from '../../components/charts/Piechart';
import StackedBarChart from '../../components/charts/StackedBarchart';
import DropdownEpics from '../../components/charts/DropdownEpics';
import axios from 'axios';

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

  console.log(chart3Data);
  return (
    <div className="">
      <div className="py-5 flex justify-left gap-6 border-b-2 border-zinc-200 w-full">
        <div className="flex items-center">
          <label className="text-lg pr-4">Epics: </label>
          <DropdownEpics
            epicsActuales={[epicsSeleccionadas]}
            onEpicsSeleccionadasChange={handleEpicsSeleccionados}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-center pt-8">
        <div className="grid justify-items-center">
          <div className="">
            <label className="text-2xl"> StoryPoints Del Epic</label>
          </div>
          <div className="flex">
            {chartData.length === 0 && (
              <div className="text-center">
                <label className="text-lg">
                  {' '}
                  No hay datos para mostrar
                </label>
              </div>
            )}
            <StackedBarChart data={chart2Data} />{' '}
          </div>
        </div>
        <div className="grid justify-items-center">
          <div className="">
            <label className="text-2xl">
              {' '}
              Comparacion de Sprints
            </label>
          </div>
          <div className="">
            <Piechart data={chartData} />
          </div>
        </div>
        <div className="grid justify-items-center">
          <div className="">
            <label className="text-2xl">
              {' '}
              Storypoints en estado done por epic
            </label>
          </div>
          <div className="w-full">
            <SameDataComposedChart data={chart3Data} />
          </div>
        </div>
        <div className="grid justify-items-center">
          <div className="">
            <label className="text-2xl">
              {' '}
              Storypoints en estado to do por epic
            </label>
          </div>
          <div className="w-full">
            <SameDataComposedChart data={chart4Data} />
          </div>
        </div>
        <div className="grid justify-items-center">
          <div className="">
            <label className="text-2xl">
              {' '}
              Storypoints en estado to do por epic
            </label>
          </div>
          <div className="w-full">
            <SameDataComposedChart data={chart5Data} />
          </div>
        </div>
        <div className="grid justify-items-center">
          <div className="">
            <label className="text-2xl">
              {' '}
              Storypoints en estado to do por epic
            </label>
          </div>
          <div className="w-full">
            <SameDataComposedChart data={chart6Data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricasEpics;
