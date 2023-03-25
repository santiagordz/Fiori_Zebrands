import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DesignTemplate from '../../components/design-template/DesignTemplate';
import { userDataContext } from '../../contexts';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
  const { user, setUser } = useContext(userDataContext);
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
  }
  return <DesignTemplate>Estoy en Dashboard</DesignTemplate>;
};

export default Dashboard;
