import React, { FC, useEffect } from 'react'
import StackedBarChart from '../../components/charts/StackedBarchart';
import Piechart from '../../components/charts/Piechart';
import { useContext } from 'react';
import { userDataContext } from '../../contexts';
import { useState } from 'react';
import axios from 'axios';

interface MetricasPersonalesProps {
  
}



const MetricasPersonales: FC<MetricasPersonalesProps> = ({  }) => {
  const {user} = useContext(userDataContext);
  const idjira = user?.id_jira;
  const name = user?.nombre;

  const [data, setData] = useState<any[]>([]);
  const [data2, setData2] = useState<any[]>([]);

  const getIssuesByUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/sprintsdata/user/${idjira}`);
      console.log(idjira);
      const data = response.data.issues[0];
      console.log(data);
      setData(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getStoryPointsByUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/sprintsdata/userstorypoints/${idjira}`);
      const data = response.data.issues[0];
      setData2(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getIssuesByUser();
    getStoryPointsByUser();
  }, [])

  return (
    <div className='pt-10'>
     <div className="w-full">
      <div className="grid grid-cols-2 justify-center">
        <div className="grid justify-items-center">
          <div className="">
            <label className="text-2xl">
              {' '}
              Story points de {name}
            </label>
          </div>
          <div className="">
            <StackedBarChart data={data2}/>
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
            <Piechart data={data}/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MetricasPersonales;