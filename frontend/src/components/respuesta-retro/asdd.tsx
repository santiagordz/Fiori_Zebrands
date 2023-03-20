import React, { FC } from 'react';
import Team from '../../assets/team.png';
import { Link, useNavigate } from 'react-router-dom';
import Button, { ButtonGroup } from '@atlaskit/button';

interface ReponderRetroInfoProps {}

const ReponderRetroInfo: FC<ReponderRetroInfoProps> = ({}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col py-8  w-full rounded bg-white border border-solid border-gray-300 border-collapse justify-center items-center px-20 gap-10">
      <h2 className="flex font-bold w-full">
        Responder pregunta de retrospectiva
      </h2>
      <div className="flex w-full bg-purple-100 py-10 px-8 h-fit gap-10 items-center justify-center">
        <img src={Team} className="h-36" />
        <div className="flex gap-5 flex-col">
          <h3 className="font-bold w-full text-discovery">
            ¡Hemos concluido con un Sprint, bien hecho!
          </h3>
          <p className="text-sm">
            Es hora de mirar hacia atrás y reflexionar sobre lo que
            logramos en el Sprint. Antes de responder algunas
            preguntas, te recomendamos que{' '}
            <Link to="/metricas" className="text-link underline">
              revises tus métricas
            </Link>{' '}
            para que puedas responder con confianza y precisión.
            ¡Vamos a ello!
          </p>
        </div>
      </div>
      <div className="flex gap-14">
        <Button appearance="link">
          Regresar a mis retrospectivas
        </Button>
        <Button
          appearance="primary"
          onClick={() => navigate(`/responder/:retroId/preguntas/`)}
        >
          Iniciar retrospectiva
        </Button>
      </div>
    </div>
  );
};

export default ReponderRetroInfo;
