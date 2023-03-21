import React, { FC, useCallback, useState } from 'react';
import RetrospectivaGeneral from './RetrospectivaGeneral';
import { Route, Routes } from 'react-router-dom';
import Aviso from './Aviso';
import Cuestionario from './formulario-retro/Cuestionario';
import ResponderRetroInfo from './ResponderRetroInfo';
import FormDataProvider, {
  formDataContext,
} from './formulario-retro/FormDataProvider';

interface ResponderRetroProps {}

const ResponderRetro: FC<ResponderRetroProps> = ({}) => {
  return (
    <>
      <RetrospectivaGeneral />
      <Routes>
        {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
        <Route path="/:retroId/" element={<ResponderRetroInfo />} />
        <Route
          path="/:retroId/preguntas/"
          element={
            <FormDataProvider>
              <Cuestionario />
            </FormDataProvider>
          }
        />
      </Routes>
    </>
  );
};

export default ResponderRetro;
