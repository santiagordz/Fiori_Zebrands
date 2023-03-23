import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';
import { useContext } from 'react';
import {
  Dashboard,
  Metricas,
  MisAccionables,
  MisRetrospectivas,
  GestionarRetrospectivas,
  AdministrarUsuarios,
  NotFound404,
  Login,
} from './views';
import { UserContext, userDataContext } from './contexts';

function App() {
  const { user } = useContext(userDataContext);

  return (
    <UserContext>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          {!user ? (
            <Route
              path="/*"
              element={<Navigate to="/login" replace />}
            />
          ) : (
            <>
              <Route
                path="/"
                element={<Navigate to="/dashboard" replace />}
              />
              <Route
                path="*"
                element={<Navigate to={'/404'} replace />}
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/metricas/*" element={<Metricas />} />
              <Route
                path="/mis-retrospectivas/*"
                element={<MisRetrospectivas />}
              />
              <Route
                path="/mis-accionables/*"
                element={<MisAccionables />}
              />
              <Route
                path="/gestionar-retrospectivas/*"
                element={<GestionarRetrospectivas />}
              />
              <Route
                path="/administrar-usuarios/*"
                element={<AdministrarUsuarios />}
              />
            </>
          )}
          <Route path="/404" element={<NotFound404 />} />
        </Routes>
      </Router>
    </UserContext>
  );
}

export default App;
