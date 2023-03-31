import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DesignTemplate from '../../components/design-template/DesignTemplate';
import { PanelGestionarRetro } from '../../components';

interface GestionarRetrospectivasProps {}

const GestionarRetrospectivas: FC<
  GestionarRetrospectivasProps
> = ({}) => {
  return (
    <DesignTemplate>
      <Routes>
        <Route path="/" element={<PanelGestionarRetro />} />
      </Routes>
    </DesignTemplate>
  );
};

export default GestionarRetrospectivas;
