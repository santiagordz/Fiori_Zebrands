import { useContext } from 'react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { Main } from './containers';
import {
  FlagContainer,
  FlagProvider,
  UserContext,
  userDataContext,
} from './contexts';
import {
  Login,
  LoginError,
  LoginSuccess,
  NotFound404,
  NotRegistered,
  Unauthorized401,
} from './views';

function App() {
  const { user, sessionExpired, setSessionExpired } =
    useContext(userDataContext);

  const renderConditionalRoutes = () => {
    if (!user) {
      return (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/login/success" element={<LoginSuccess />} />
          <Route path="/login/error" element={<LoginError />} />
          <Route
            path="/usuario-no-registrado"
            element={<NotRegistered />}
          />
        </>
      );
    }
  };

  return (
    <UserContext>
      <FlagProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Navigate
                  to={user ? '/dashboard' : '/login'}
                  replace
                />
              }
            />
            {renderConditionalRoutes()}
            <Route path="/*" element={<NotFound404 />} />
            <Route path="/404" element={<NotFound404 />} />
            <Route path="/401" element={<Unauthorized401 />} />
          </Routes>
        </Router>
        <FlagContainer />
      </FlagProvider>
    </UserContext>
  );
}

export default App;
