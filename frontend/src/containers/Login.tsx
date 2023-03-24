import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { userDataContext } from '../contexts';
import { LoginView } from '../views';

const Login = ({}) => {
  const { user } = useContext(userDataContext);

  return (
    <Routes>
      <Route path="/*" element={<LoginView />} />
    </Routes>
  );
};

export default Login;
