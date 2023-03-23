import { FC, useEffect } from 'react';
import Geometry from '../assets/geometry.png';
import zebrandsLogo from '../assets/zebrandsLogo.svg';
interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  return (
    <div
      className="grid items-center w-screen h-screen overflow-hidden"
      style={{ gridTemplateColumns: '1fr 2fr' }}
    >
      <div className="flex items-center absolute top-5 left-9 w-3/12">
        <img
          src={zebrandsLogo}
          alt="Zebrands"
          className="w-3/12 py-1"
        />
        <div className="w-1/12 h-1 rounded-full bg-discovery text-white pointer-events-none">
          .
        </div>
        <p className="text-base font-semibold pl-2 w-full text-textNormal">
          RetroZeb
        </p>
      </div>
      <div className="w-full flex flex-col gap-3 items-center justify-center px-16 relative">
        <h1 className="text-5xl font-medium w-full text-selectBold">
          Te damos la bienvenida
        </h1>
        <p className="text-paragraph">
          Inicia sesión con tu cuenta registrada @zeb.mx de Google
          para continuar.
        </p>
        <div id="buttonDiv"></div>
      </div>

      <div className="h-full overflow-hidden pointer-events-none">
        <img
          src={Geometry}
          alt="Geometry"
          className="w-full h-full scale-[1.5] relative object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Login;
