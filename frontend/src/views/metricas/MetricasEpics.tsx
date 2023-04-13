import React, { FC, useEffect, useState } from 'react';
import DropdownSprints from '../../components/charts/DropdownSprints';
import SameDataComposedChart from '../../components/charts/SameDataComposedChart';
import Piechart from '../../components/charts/Piechart';
import StackedBarChart from '../../components/charts/StackedBarchart';
import DropdownEpics from '../../components/charts/DropdownEpics';
interface MetricasEpicsProps {}

const MetricasEpics: FC<MetricasEpicsProps> = ({}) => {
  const [epicsSeleccionadas, setEpicsSeleccionadas] = useState<any>({
    value: 'TPECG-3202',
    label: 'Implementar secciones de la aplicación',
  });

  console.log(epicsSeleccionadas);
  const handleEpicsSeleccionados = (epics: string[]) => {
    setEpicsSeleccionadas(epics);
  };

  const [chartData, setChartData] = useState<any[]>([]);
  const [chart2Data, setChart2Data] = useState<any[]>([]);

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

  useEffect(() => {
    getData();
    console.log(epicsSeleccionadas);
  }, [epicsSeleccionadas]);

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
