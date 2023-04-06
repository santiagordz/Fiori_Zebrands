import React, { FC, useState } from 'react';
import Piechart from '../../components/charts/Piechart';
import DropdownSprints from '../../components/charts/DropdownSprints';
import StackedBarChart from '../../components/charts/StackedBarchart';

interface MetricasSprintProps {}

const MetricasSprint: FC<MetricasSprintProps> = ({}) => {
  const [sprintsSeleccionadas, setSprintsSeleccionadas] =
    useState<any>([]);
  const handleSprintSeleccionados = (sprints: string[]) => {
    setSprintsSeleccionadas(sprints);
  };

  return (
    <div className="w-full">
      <div className="p-6 flex justify-end">
        <DropdownSprints
          sprintsActuales={[]}
          onSprintsSeleccionadasChange={handleSprintSeleccionados}
        />
      </div>
      <div className="grid grid-cols-2 justify-center">
        <div className="grid justify-items-center">
          <div className="">
            <label className="text-2xl">
              {' '}
              Storypoints Totales y Completados
            </label>
          </div>
          <div className="">
            <StackedBarChart />
          </div>
        </div>
        <div className="grid justify-items-center">
          <div>
            <label className="text-2xl">
              {' '}
              Issues Totales y Completados
            </label>
          </div>
          <div className='pl-20 pt-12'>
            <Piechart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricasSprint;
