import { FC, useContext } from 'react';
import DesignTemplate from '../../components/design-template/DesignTemplate';
import { userDataContext } from '../../contexts';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
  const { user, setUser } = useContext(userDataContext);

  return <DesignTemplate>Estoy en Dashboard</DesignTemplate>;
};

export default Dashboard;
