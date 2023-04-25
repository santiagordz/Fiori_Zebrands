import axios from 'axios';
import { FC, memo, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLogo from '@/assets/Google__G__Logo.svg';
import Geometry from '@/assets/geometry.png';
import zebrandsLogo from '@/assets/zebrandsLogo.svg';
import { userDataContext } from '../../contexts';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/login/google`;
const URI_JIRA = `${
  import.meta.env.VITE_APP_BACKEND_URI
}/issues/post`;

const Login: FC = () => {
  const navigate = useNavigate();
  const { user, getUser, setSessionExpired } =
    useContext(userDataContext);

  const postIssues = async () => {
    try {
      await axios.post(URI_JIRA);
    } catch (error) {
      console.log(error);
    }
  };

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
          postIssues();
          if (timer) {
            clearInterval(timer);
          }
        }
      }, 500);
    }
  };

  useEffect(() => {
    const handleAuthMessage = (event: MessageEvent) => {
      if (event.data.error === 'User not registered') {
        navigate('/usuario-no-registrado');
      }
    };

    window.addEventListener('message', handleAuthMessage);

    return () => {
      window.removeEventListener('message', handleAuthMessage);
    };
  }, []);

  useEffect(() => {
    if (user) {
      getUser();
      navigate('/dashboard', { replace: true });
    }

    if (!user) {
      setSessionExpired(false);
    }
  }, [user]);

  return (
    <div className="grid items-center w-screen h-screen overflow-hidden md:grid-cols-3">
      <div className="md:col-span-1">
        <div className="flex items-center absolute top-5 left-9 w-3/12">
          <img
            src={zebrandsLogo}
            alt="Zebrands"
            className="w-24 py-1"
          />
          <div className="w-8 h-1 rounded-full bg-discovery text-white pointer-events-none">
            .
          </div>
          <p className="text-base font-semibold pl-2 w-full text-textNormal">
            RetroZeb
          </p>
        </div>
        <div className="w-full flex flex-col md:gap-9 items-center justify-center px-16 relative">
          <div className="flex flex-col gap-6 md:gap-3">
            <h1 className="text-5xl font-medium w-full text-selectBold">
              Te damos la bienvenida
            </h1>
            <p className="text-paragraph text-left md:text-left">
              Inicia sesión con tu cuenta registrada en RetroZeb de
              Google para continuar.
            </p>
          </div>
          <div className="w-full pt-10">
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
      </div>

      <div className="hidden md:block md:col-span-2 h-full overflow-hidden pointer-events-none">
        <img
          src={Geometry}
          alt="Geometry"
          className="w-full h-full scale-[1.7] relative object-cover object-center"
        />
      </div>
    </div>
  );
};

export default memo(Login);
