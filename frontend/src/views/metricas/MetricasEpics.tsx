import React, { FC, useState } from 'react';
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
  return (
    <div className="w-full">
      <div className="py-5 flex justify-left gap-6 border-b-2 border-zinc-200">
        <div className="flex items-center">
          <label className="text-lg pr-4">Sprints:</label>
          <DropdownSprints
            sprintsActuales={[]}
            onSprintsSeleccionadasChange={handleSprintSeleccionados}
          />
        </div>
        <div className="flex items-center">
          <label className="text-lg pr-4">Epics: </label>
          <DropdownEpics
            epicsActuales={[]}
            onEpicsSeleccionadasChange={handleEpicsSeleccionados}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-center pt-8">
        <div className="grid justify-items-center">
          <div className="">
            <label className="text-2xl">
              {' '}
              Comparacion de Sprints
            </label>
          </div>
          <div className="">
            <SameDataComposedChart />
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
            <Piechart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricasEpics;
