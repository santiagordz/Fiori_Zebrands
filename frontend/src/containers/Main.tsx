import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { userDataContext } from '../contexts';
import {
  AdministrarUsuarios,
  Dashboard,
  GestionarRetrospectivas,
  Metricas,
  MisAccionables,
  MisRetrospectivas,
  NotFound404,
} from '../views';

const Main = ({}) => {
  const { user } = useContext(userDataContext);

  return (
    <Routes>
      {user ? (
        <>
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
          <Route path="/404" element={<NotFound404 />} />
        </>
      ) : (
        <Route
          path="*"
          element={<Navigate to={'/login'} replace />}
        />
      )}
    </Routes>
  );
};

export default Main;
