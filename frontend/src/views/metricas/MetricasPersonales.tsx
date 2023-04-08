import React, { FC } from 'react'
import StackedBarChart from '../../components/charts/StackedBarchart';
import Piechart from '../../components/charts/Piechart';
interface MetricasPersonalesProps {
  
}

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  }
];

const MetricasPersonales: FC<MetricasPersonalesProps> = ({  }) => {
  return (
    <div className='pt-10'>
     <div className="w-full">
      <div className="grid grid-cols-2 justify-center">
        <div className="grid justify-items-center">
          <div className="">
            <label className="text-2xl">
              {' '}
              Storypoints Personales
            </label>
          </div>
          <div className="">
            {/* <StackedBarChart data={data}/> */}
          </div>
        </div>
        <div className="grid justify-items-center">
          <div>
            <label className="text-2xl">
              {' '}
              Issues Personales
            </label>
          </div>
          <div className='pl-20 pt-12'>
            {/* <Piechart /> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MetricasPersonales;