import { useContext, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { userDataContext } from '../contexts';
import {
  AdministrarUsuarios,
  Dashboard,
  GestionarRetrospectivas,
  Metricas,
  MisAccionables,
  MisRetrospectivas,
} from '../views';
import Spinner from '../components/design-template/spinner/Spinner';

const Main = () => {
  const { user, setUser, hasAttemptedFetch } =
    useContext(userDataContext);
  const idRol = user?.id_rol || -1;

  /*  11 = admin
      12 = responsable
  */
  const adminAllowed = idRol === 11 || false;
  const responsableAllowed = idRol === 12 || false;

  if (!hasAttemptedFetch) {
    return (
      <div className="w-full h-full flex">
        <Spinner message="Cargando, por favor espera un momento mientras preparamos todo para ti..." />
      </div>
    );
  }

  return (
    <>
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
                  <Navigate to={'/401'} replace />
                )
              }
            />
            <Route
              path="/administrar-usuarios/*"
              element={
                adminAllowed ? (
                  <AdministrarUsuarios />
                ) : (
                  <Navigate to={'/401'} replace />
                )
              }
            />
          </>
        )}
        <Route path="*" element={<Navigate to={'/404'} replace />} />
      </Routes>
    </>
  );
};

export default Main;
