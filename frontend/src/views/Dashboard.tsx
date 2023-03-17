import React, { FC } from 'react';
import DesignTemplate from '../components/design-template/DesignTemplate';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
  return (
    <DesignTemplate view="Dashboard">
      Estoy en Dashboard
    </DesignTemplate>
  );
};

export default Dashboard;
