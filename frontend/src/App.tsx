import { useContext } from 'react';
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';
import { Login, Main } from './containers';
import { UserContext, userDataContext } from './contexts';
import { LoginSuccess, NotFound404 } from './views';

function App() {
  const { user } = useContext(userDataContext);

  return (
    <UserContext>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Navigate
                to={!user ? '/login' : '/dashboard'}
                replace
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Main />} />
          {!user && (
            <>
              <Route
                path="/login/success"
                element={<LoginSuccess />}
              />
              <Route path="/login/error">
                Error al iniciar sesión, por favor intente nuevamente
                o contacte al administrador.
              </Route>
            </>
          )}
          <Route
            path="*"
            element={<Navigate to={'/404'} replace />}
          />
          <Route path="/404" element={<NotFound404 />} />
        </Routes>
      </Router>
    </UserContext>
  );
}

export default App;
