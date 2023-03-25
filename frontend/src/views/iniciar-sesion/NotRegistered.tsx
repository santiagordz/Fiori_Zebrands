import React, { FC, useContext, useEffect } from 'react';
import Button from '@atlaskit/button/standard-button';

import EmptyState from '@atlaskit/empty-state';
import { useNavigate } from 'react-router-dom';
import { userDataContext } from '../../contexts';
import LockClosedImage from '../../assets/lockClosed.png';

interface NotRegisteredProps {}

const NotRegistered: FC<NotRegisteredProps> = ({}) => {
  const { user } = useContext(userDataContext);
  const navigate = useNavigate();

  if (user) {
    navigate('/dashboard');
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <EmptyState
        header="¡Oh no! Parece que no tienes acceso a la plataforma."
        description="Pídele al administrador que registre tus credenciales para poder acceder al contenido."
        primaryAction={
          <Button
            appearance="primary"
            onClick={() => navigate('/login')}
          >
            Volver a inicio de sesión
          </Button>
        }
        imageUrl={LockClosedImage}
      />
    </div>
  );
};

export default NotRegistered;
