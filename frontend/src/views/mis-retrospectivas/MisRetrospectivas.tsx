import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DesignTemplate, PanelRetros } from '../../components';
import ResponderRetro from '../../components/respuesta-retro/ResponderRetro';

interface MisRetrospectivasProps {}

const MisRetrospectivas: FC<MisRetrospectivasProps> = ({}) => {
  return (
    <DesignTemplate>
      <Routes>
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/" element={<PanelRetros />} />
        <Route path="/responder/*" element={<ResponderRetro />} />
      </Routes>
    </DesignTemplate>
  );
};

export default MisRetrospectivas;
