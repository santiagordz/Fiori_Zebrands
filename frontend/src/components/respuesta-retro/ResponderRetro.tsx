import React, { FC, useCallback, useEffect, useState } from 'react';
import RetrospectivaGeneral from './RetrospectivaGeneral';
import { Route, Routes, useLocation } from 'react-router-dom';
import Aviso from './Aviso';
import Cuestionario from './formulario-retro/Cuestionario';
import ResponderRetroInfo from './ResponderRetroInfo';
import FormDataProvider, {
  formDataContext,
} from './formulario-retro/FormDataProvider';
import Answers from './formulario-retro/Answers';

interface ResponderRetroProps {}

const ResponderRetro: FC<ResponderRetroProps> = ({ }) => {
  const location = useLocation();
  const [isRespuestas, setIsRespuestas] = useState<boolean>(false)  

 //Use efect tiene un array de dependencias, quiere decir que va a hacer algo cada que ese algo cambie, en este caso cada vez que location cambia
  useEffect(() => { 
    if (location.pathname.includes('respuestas')) {
      setIsRespuestas(true);
    } else {
      setIsRespuestas(false);
    }
  }, [location])
  
  return (
    <>
      { !isRespuestas && <RetrospectivaGeneral  />}
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
        <Route path="/:retroId/respuestas/" element={<Answers />} />
      </Routes>
    </>
  );
};

export default ResponderRetro;
