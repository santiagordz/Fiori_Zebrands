import React, { FC, useEffect } from 'react'
import StackedBarChart from '../../components/charts/StackedBarchart';
import Piechart from '../../components/charts/Piechart';
import { useContext } from 'react';
import { userDataContext } from '../../contexts';
import { useState } from 'react';
import axios from 'axios';
import DropdownSprints from '../../components/charts/DropdownSprints';

interface MetricasPersonalesProps {
  
}



const MetricasPersonales: FC<MetricasPersonalesProps> = ({  }) => {
  const [sprintsSeleccionadas, setSprintsSeleccionadas] =
    useState<any>([]);

  const handleSprintSeleccionados = (sprints: any[]) => {
    setSprintsSeleccionadas(sprints);
  };

  const sprintsValuesArray = sprintsSeleccionadas.map((obj: any) => {
    return obj.value;
  });

  const {user} = useContext(userDataContext);
  const idjira = user?.id_jira;
  const name = user?.nombre;

  const [data, setData] = useState<any[]>([]);
  const [data2, setData2] = useState<any[]>([]);

  const getIssuesByUser = async () => {
    try {
      const urlPath = sprintsValuesArray.join(',');
      const response = await axios.get(`http://localhost:8000/sprintsdata/user/${idjira}/${urlPath}`);
      console.log(idjira);
      const data = response.data.issues[0];
      console.log(data);
      setData(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  // const getStoryPointsByUser = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:8000/sprintsdata/userstorypoints/${idjira}`);
  //     const data = response.data.issues[0];
  //     setData2(data);
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    getIssuesByUser();
    // getStoryPointsByUser();
  }, [sprintsSeleccionadas])

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
              Storypoints de {name}
            </label>
          </div>
          <div className="">
            {/* <StackedBarChart data={data2} /> */}
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
            <Piechart data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MetricasPersonales;