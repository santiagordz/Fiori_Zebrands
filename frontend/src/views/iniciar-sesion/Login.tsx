import axios from 'axios';
import { FC, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLogo from '../../assets/Google__G__Logo.svg';
import Geometry from '../../assets/geometry.png';
import zebrandsLogo from '../../assets/zebrandsLogo.svg';
import { userDataContext } from '../../contexts';
import { motion } from 'framer-motion';
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';

interface LoginProps {}

const URI = 'http://localhost:8000/login/google';
const URI_LOGIN = 'http://localhost:8000/user';

const SECRET_KEY_1 =
  import.meta.env.VITE_APP_COOKIE_KEY_1 || 'secret1';
const SECRET_KEY_2 =
  import.meta.env.VITE_APP_COOKIE_KEY_2 || 'secret2';

const Login: FC<LoginProps> = ({}) => {
  const navigate = useNavigate();
  const { user, setUser, setHasAttemptedFetch } =
    useContext(userDataContext);
  const [error, setError] = useState(false);

  const redirectToGoogleSSO = async () => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    const width = 600;
    const height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    const popUp = window.open(
      URI,
      '_blank',
      `width=${width}, height=${height}, left=${left}, top=${top}`
    );
    if (popUp) {
      timer = setInterval(() => {
        if (popUp.closed) {
          getUser();
          if (timer) {
            clearInterval(timer);
          }
        }
      }, 500);
    }
  };

  // Enfoque de cifrado en cascada, en el que los datos se cifran con varias claves de cifrado en secuencia.
  const encryptData = (
    data: string,
    key1: string,
    key2: string
  ): string => {
    const encryptedData1 = CryptoJS.AES.encrypt(
      data,
      key1
    ).toString();
    const encryptedData2 = CryptoJS.AES.encrypt(
      encryptedData1,
      key2
    ).toString();
    return encryptedData2;
  };

  const getUser = async () => {
    try {
      const response = await axios.get(`${URI_LOGIN}/auth/`, {
        withCredentials: true,
      });

      if (response && response.data) {
        setUser(response.data);

        const encryptedData = encryptData(
          JSON.stringify(response.data),
          SECRET_KEY_1,
          SECRET_KEY_2
        );
        Cookies.set('user', encryptedData);

        navigate('/dashboard');
      }
    } catch (err) {
      console.log('No se autenticó correctamente', err);
    } finally {
      setHasAttemptedFetch(true);
    }
  };

  useEffect(() => {
    const handleAuthMessage = (event: MessageEvent) => {
      if (event.data.error === 'User not registered') {
        navigate('/usernotregistered');
      } else if (event.data.error) {
        setError(true);
      } else {
        getUser();
      }
    };

    window.addEventListener('message', handleAuthMessage);

    return () => {
      window.removeEventListener('message', handleAuthMessage);
    };
  }, []);

  if (user) {
    navigate('/dashboard');
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
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
      <div className="w-full flex flex-col gap-9 items-center justify-center px-16 relative">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-medium w-full text-selectBold">
            Te damos la bienvenida
          </h1>
          <p className="text-paragraph">
            Inicia sesión con tu cuenta registrada @zeb.mx de Google
            para continuar.
          </p>
        </div>
        <div className="w-full">
          <button
            onClick={redirectToGoogleSSO}
            className="flex items-center justify-evenly rounded-full w-full  border border-solid border-slate-300 text-sm py-2 px-3 text-slate-900 hover:bg-[#f8faff] hover:border-[#d2e3fc]"
          >
            <div className="w-fit">
              <img
                src={GoogleLogo}
                alt="Google"
                className="w-[1.15rem]"
              />
            </div>
            <div className="w-full flex items-center justify-center">
              Continuar con Google
            </div>
          </button>
        </div>
      </div>

      <div className="h-full overflow-hidden pointer-events-none">
        <img
          src={Geometry}
          alt="Geometry"
          className="w-full h-full scale-[1.6] relative object-cover object-center"
        />
      </div>
    </motion.div>
  );
};

export default Login;