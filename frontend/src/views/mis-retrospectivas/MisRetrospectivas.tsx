import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  DesignTemplate,
  PanelRetros,
  ResponderRetro,
} from '../../components';

interface MisRetrospectivasProps {}

const MisRetrospectivas: FC<MisRetrospectivasProps> = ({}) => {
  return (
    <DesignTemplate>
      <Routes>
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/" element={<PanelRetros />} />
        <Route
          path="/responder/:retroId/*"
          element={<ResponderRetro />}
        />
      </Routes>
    </DesignTemplate>
  );
};

export default MisRetrospectivas;
