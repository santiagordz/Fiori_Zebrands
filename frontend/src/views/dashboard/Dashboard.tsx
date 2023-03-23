import React, { FC, useEffect, useContext } from 'react';
import DesignTemplate from '../../components/design-template/DesignTemplate';
import { userDataContext } from '../../contexts';
import axios from 'axios';

interface DashboardProps {}

const URI = 'http://localhost:8000/auth/google';

const Dashboard: FC<DashboardProps> = ({}) => {
  const { user, setUser } = useContext(userDataContext);

  const getRetrospectivas = async () => {
    const response = await axios.get(`${URI}/success/`, {
      withCredentials: true,
    });
    setUser(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getRetrospectivas();
  }, []);

  return <DesignTemplate>Estoy en Dashboard</DesignTemplate>;
};

export default Dashboard;
