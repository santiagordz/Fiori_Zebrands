import React, { FC, useEffect, useContext } from 'react';

interface LoginErrorProps {}

const LoginError: FC<LoginErrorProps> = ({}) => {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 900);
  }, []);

  return <div className="">Usuario no existe...</div>;
};

export default LoginError;
