import { FC, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DesignTemplate from '../../components/design-template/DesignTemplate';
import { userDataContext } from '../../contexts';
import BannerRetro from '../../components/respuesta-retro/reusable/BannerRetro';
import type { Retrospectiva } from '../mis-retrospectivas/MisRetrospectivas';
import ArrowRightIcon from '@atlaskit/icon/glyph/arrow-right';
import axios from 'axios';
import Button from '@atlaskit/button';
import CarouselDash from './CarouselDash';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/retrospectivas`;


interface DashboardProps {
  retroPendientes: Retrospectiva[];
  getRetrospectivas: () => void;
}


const Dashboard: FC<DashboardProps> = ({
  
}) => {
  const { user, setUser } = useContext(userDataContext);
  const navigate = useNavigate();
  const { retroId } = useParams();
  const [retroPendientes, setRetroPendientes] = useState<
    Array<Retrospectiva>
    >([]);
  
  const getRetrospectivas = async () => {
    const response = await axios.get(`${URI}/panelRetrosByUser`, {
      params: { id_usuario: user?.id_usuario || -1 },
    });

    const pendientes = response.data.filter(
      (
        retro: Retrospectiva & {
          asignada: boolean;
          en_curso: boolean;
        }
      ) => !retro.completada && retro.asignada && retro.en_curso
    );

    setRetroPendientes(pendientes);

  };
    useEffect(() => {
      getRetrospectivas();
    }, []);

  if (!user) {
    navigate('/login');
  }
  return (
    <DesignTemplate>
      <div className="flex gap-5">
        {/* Div de todo */}
        <div className="flex bg-[#ffffff] py-5 px-5 rounded-sm shadow-sm w-6/12 flex-col">
          {/* Div de metricas */}
          <h2 className="text-lg font-semibold">Métricas</h2>
          <CarouselDash />
        </div>
        <div className="flex flex-col gap-5 w-6/12">
          {/* Div de lo de la derecha */}
          <div className="flex bg-[#ffffff] py-5 px-5 rounded-sm shadow-sm h-[50%]">
            <h2 className="text-lg font-semibold w-full">
              Mis Accionables
            </h2>
            <div className='flex justify-end self-end w-full'>
              <Button
                className="z-0"
                appearance="subtle-link"
                iconBefore={
                  <ArrowRightIcon
                    label="volver a gestionar retrospectivas"
                    primaryColor="#1D7AFC"
                  />
                }
                onClick={() => navigate(`/mis-accionables`)}
              ></Button>
            </div>
          </div>
          <div className="flex flex-col bg-[#ffffff] py-5 px-5 rounded-sm gap-5 shadow-sm h-[50%]">
            <h2 className="text-lg font-semibold">
              Retrospectivas pendientes
            </h2>
            <div className="flex flex-col gap-5 w-full">
              {retroPendientes.map(
                (retro) =>
                  Number(retroId) !== retro.id && (
                    <BannerRetro
                      key={retro.id}
                      titulo={retro.titulo}
                      fechaInicio={retro.fecha_inicio}
                      idRetrospectiva={retro.id}
                      tags={retro.tags}
                    />
                  )
              )}
            </div>
            <div className='flex justify-end self-end'>
              <Button
                className="z-0"
                appearance="subtle-link"
                iconBefore={
                  <ArrowRightIcon
                    label="volver a gestionar retrospectivas"
                    primaryColor="#1D7AFC"
                  />
                }
                onClick={() => navigate(`/mis-retrospectivas`)}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </DesignTemplate>
  );
};

export default Dashboard;