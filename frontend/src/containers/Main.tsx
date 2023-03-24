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
  const idRol = user?.id_rol || -1;

  /*  11 = admin
      12 = responsable
  */
  const adminAllowed = idRol === 11 || false;
  const responsableAllowed = idRol === 12 || false;

  return (
    <Routes>
      {user && (
        <>
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
            element={
              adminAllowed || responsableAllowed ? (
                <GestionarRetrospectivas />
              ) : (
                <Navigate to={'/404'} replace />
              )
            }
          />
          <Route
            path="/administrar-usuarios/*"
            element={
              adminAllowed ? (
                <AdministrarUsuarios />
              ) : (
                <Navigate to={'/404'} replace />
              )
            }
          />
        </>
      )}
      <Route path="*" element={<Navigate to={'/404'} replace />} />
    </Routes>
  );
};

export default Main;
