import React, { FC } from 'react';
import {
  DesignTemplate,
  PanelRetros,
  RetrospectivaGeneral,
} from '../../components';
import ResponderRetro from '../../components/respuesta-retro/ResponderRetro';
import { retrospective } from '../../components/respuesta-retro/RetroDomi';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cuestionario from '../../components/respuesta-retro/formulario-retro/Cuestionario';

interface MisRetrospectivasProps {}

const MisRetrospectivas: FC<MisRetrospectivasProps> = ({}) => {
  return (
    <DesignTemplate>
      <Routes>
        {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
        <Route path="/" element={<PanelRetros />} />
        <Route path="/responder/*" element={<ResponderRetro />} />
      </Routes>
    </DesignTemplate>
  );
};

export default MisRetrospectivas;
