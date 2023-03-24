import React, { FC, useEffect } from 'react';

interface LoginSuccessProps {}

const LoginSuccess: FC<LoginSuccessProps> = ({}) => {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 900);
  }, []);

  return (
    <div className="">
      Se ha iniciado sesión correctamente, redireccionando...
    </div>
  );
};

export default LoginSuccess;
