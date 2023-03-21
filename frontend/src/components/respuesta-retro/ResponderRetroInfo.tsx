import React, { FC, useCallback, useState } from 'react';
import Team from '../../assets/team.png';
import { Link, useNavigate } from 'react-router-dom';
import Button, { ButtonGroup } from '@atlaskit/button';
import Aviso from './Aviso';

interface ReponderRetroInfoProps {}

const ReponderRetroInfo: FC<ReponderRetroInfoProps> = ({}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openAviso = useCallback(() => setIsOpen(true), []);

  const [goBack, setGoBack] = useState<boolean>(false);
  const backRetros = useCallback(() => setIsOpen(true), []);

  return (
    <>
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
          <Button appearance="link" onClick={() => navigate(-1)}>
            Regresar a mis retrospectivas
          </Button>
          <Button appearance="primary" onClick={openAviso}>
            Iniciar retrospectiva
          </Button>
        </div>
      </div>
      {isOpen && <Aviso isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default ReponderRetroInfo;
