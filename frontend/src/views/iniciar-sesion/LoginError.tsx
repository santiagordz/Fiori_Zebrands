import React, { FC, useEffect, useContext } from 'react';

interface LoginErrorProps {}

const LoginError: FC<LoginErrorProps> = ({}) => {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 900);
  }, []);

  return (
    <div className="">
      Se presentó un error en la autentificación, intenta de nuevo más
      tarde...
    </div>
  );
};

export default LoginError;
