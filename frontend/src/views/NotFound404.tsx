import React, { FC } from 'react';
import { Sidebar } from '../components';
import Lottie from 'lottie-react';
import Astronaut from '../assets/lotties/astronaut_empty.json';
import Button from '@atlaskit/button';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import { useNavigate } from 'react-router-dom';

interface NotFound404Props {}

const NotFound404: FC<NotFound404Props> = ({}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-7 w-auto h-screen mx-[6vw] lg:ml-[9vw] lg:mr-[3vw]">
      <Sidebar />
      <div className="flex items-center justify-center w-full h-screen gap-8">
        <div className="w-full">
          <Lottie
            animationData={Astronaut}
            loop={true}
            className="w-full"
          />
        </div>
        <div className="w-full flex flex-col gap-11">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-information">
              Oops, parece que no hemos encontrado la página que estás
              buscando.
            </h2>
            <p className="text-paragraph text-base font-medium">
              Tal vez haya sido eliminada, movida o nunca existió. Por
              favor, verifica la dirección URL que ingresaste y
              asegúrate de que sea correcta. Si llegaste aquí haciendo
              clic en un enlace, por favor, ponte en contacto con el
              propietario del sitio para informarle del error.
            </p>
          </div>
          <div>
            <Button
              onClick={() => {
                navigate('/login');
              }}
              appearance="primary"
              iconBefore={
                <ArrowLeftIcon
                  label="volver al dashboard"
                  primaryColor="white"
                />
              }
            >
              Volver al Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
