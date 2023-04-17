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
  return <DesignTemplate>
    <div>
      <div className='bg-[#FFFFFF] rounded-md p-5 border border-solid border-[rgba(9, 30, 66, 0.141176)]'>
        <h1>
          Metricas
        </h1>
      </div>
    </div>
  </DesignTemplate>;
};

export default Dashboard;
