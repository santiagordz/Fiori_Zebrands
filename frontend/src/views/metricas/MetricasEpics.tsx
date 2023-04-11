import React, { FC, useEffect, useState } from 'react';
import DropdownSprints from '../../components/charts/DropdownSprints';
import SameDataComposedChart from '../../components/charts/SameDataComposedChart';
import Piechart from '../../components/charts/Piechart';
import DropdownEpics from '../../components/charts/DropdownEpics';
interface MetricasEpicsProps {}

const MetricasEpics: FC<MetricasEpicsProps> = ({}) => {
  const [sprintsSeleccionadas, setSprintsSeleccionadas] =
    useState<any>([]);
  const handleSprintSeleccionados = (sprints: string[]) => {
    setSprintsSeleccionadas(sprints);
  };
  const [epicsSeleccionadas, setEpicsSeleccionadas] = useState<any>(
    []
  );
  const handleEpicsSeleccionados = (epics: string[]) => {
    setEpicsSeleccionadas(epics);
  };

  const [chartData, setChartData] = useState<any[]>([]);

  const getData = async () => {
    const response = await fetch(
      `http://localhost:8000/sprintsdata/epic/${epicsSeleccionadas.value}`
    );
    const data = await response.json();
    setChartData(data.issues[0]);
  };

  useEffect(() => {
    getData();
    console.log(epicsSeleccionadas);
  }, [epicsSeleccionadas]);

  return (
    <div className="w-full">
      <div className="py-5 flex justify-left gap-6 border-b-2 border-zinc-200">
        <div className="flex items-center">
          <label className="text-lg pr-4">Epics: </label>
          <DropdownEpics
            epicsActuales={[]}
            onEpicsSeleccionadasChange={handleEpicsSeleccionados}
          />
        </div>
        <div className="flex items-center">
          <label className="text-lg pr-4">Sprints:</label>
          <DropdownSprints
            sprintsActuales={[]}
            onSprintsSeleccionadasChange={handleSprintSeleccionados}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-center pt-8">
        <div className="grid justify-items-center">
          <div className="">
            <label className="text-2xl">
              {' '}
              StoryPoints Del Sprint
            </label>
          </div>
          <div className="">
            {chartData.length === 0 && (
              <div className="text-center">
                <label className="text-lg">
                  {' '}
                  No hay datos para mostrar
                </label>
              </div>
            )}
            <Piechart data={chartData} />
          </div>
        </div>
        <div className="grid justify-items-center">
          <div className="">
            <label className="text-2xl">
              {' '}
              Comparacion de Sprints
            </label>
          </div>
          <div className="">{/* <SameDataComposedChart /> */}</div>
        </div>
        <div className="grid justify-items-center">
          <div>
            <label className="text-2xl">
              {' '}
              Issues Totales y Completados
            </label>
          </div>
          <div className="pl-20 pt-12">{/* <Piechart /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default MetricasEpics;
