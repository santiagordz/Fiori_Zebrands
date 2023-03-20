import React, { FC } from 'react';
import {
  DesignTemplate,
  PanelRetros,
  RetrospectivaGeneral,
} from '../../components';
import ResponderRetro from '../../components/respuesta-retro/ResponderRetro';
import { retrospective } from '../../components/respuesta-retro/RetroDomi';
import { Routes, Route } from 'react-router-dom';
import NotFound404 from '../NotFound404';

interface MisRetrospectivasProps {}

const MisRetrospectivas: FC<MisRetrospectivasProps> = ({}) => {
  return (
    <DesignTemplate>
      <Routes>
        <Route path="*" element={<NotFound404 />} />
        <Route path="/" element={<PanelRetros />} />
        <Route
          path="/responder/:retroId"
          element={<ResponderRetro />}
        />
      </Routes>
    </DesignTemplate>
  );
};

export default MisRetrospectivas;
