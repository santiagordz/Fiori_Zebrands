import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  AdministradorUsuarios,
  GestionarEtiquetas,
} from "../../components/administrar-usuarios";

interface AdministrarUsuariosProps {}

const AdministrarUsuarios: FC<AdministrarUsuariosProps> = ({}) => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/" element={<AdministradorUsuarios />} />
        <Route path="/gestionar-etiquetas" element={<GestionarEtiquetas />} />
      </Routes>
    </>
  );
};

export default AdministrarUsuarios;
