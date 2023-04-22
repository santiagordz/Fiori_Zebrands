import Avatar from '@atlaskit/avatar';
import SignOutIcon from '@atlaskit/icon/glyph/sign-out';
import axios from 'axios';
import { motion } from 'framer-motion';
import Cookies from 'js-cookie';
import { useContext, memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import zebrandsLogo from '../../assets/zebrandsLogo.svg';
import { userDataContext } from '../../contexts';
import { categories } from '../../utils/templateData';
import ConfirmLink from './ConfirmLink';
import CrossIcon from '@atlaskit/icon/glyph/cross';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/logout`;

const buttonActiveStyles =
  'bg-[#E9F2FF] px-[2vmin] py-[0.8vmin] flex justify-start w-full items-center rounded-md gap-5';
const buttonStyles =
  'px-[2vmin] py-[0.8vmin] flex justify-start w-full items-center rounded-md gap-5 hover:bg-[#E9F2FF]';
const textStyle = 'link font-medium text-[0.85rem]';
const textNotActiveStyles = `${textStyle} text-paragraph`;
const textActiveStyles = `${textStyle} text-selectBold`;

interface SidebarProps {
  isSidebarOpen: boolean;
  handleMenu: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  handleMenu,
}) => {
  const { user, setUser } = useContext(userDataContext);
  const navigate = useNavigate();
  const idRol = user?.id_rol || -1;
  const name = user?.nombre || 'Usuario';
  const location = useLocation();
  const pColor = '#44546F';
  const sColor = '#0C66E4';
  const iconSize = 'medium';
  const onProtectedRoute = (path: string) => {
    const protectedRoutes = [
      '/mis-retrospectivas/responder/:id/preguntas/',
      '/gestionar-retrospectivas/nueva-retrospectiva',
    ];

    return protectedRoutes.some((route) => {
      const routeMatcher = new RegExp(
        route.replace(/:[^\s/]+/g, '([\\w-]+)')
      );
      return routeMatcher.test(path);
    });
  };

  const isOnProtectedRoute = onProtectedRoute(location.pathname);

  const handleLogout = async () => {
    await axios.get(URI, {
      withCredentials: true,
    });
    setUser(null);
    Cookies.remove('user');
    navigate('/login');
  };

  const sidebarVariants = {
    mobile: {
      width: '100vw',
    },
    mobileOff: { width: '0vw' },
  };

  const linksVariants = {
    mobile: {
      opacity: 1,
      display: 'block',
    },
    mobileOff: { opacity: 0, display: 'none' },
  };

  return (
    <>
      <motion.div
        layout
        animate={isSidebarOpen ? 'mobile' : 'mobileOff'}
        initial="mobileOff"
        transition={{ type: 'spring', stiffness: 50 }}
        variants={sidebarVariants}
        className={`overflow-hidden whitespace-nowrap flex flex-col bg-white h-[100vh] items-center drop-shadow py-16 fixed left-0 top-0 z-50`}
      >
        <div className="flex flex-col gap-12  h-full">
          <button onClick={handleMenu}>
            <CrossIcon label="close" size="medium" />
          </button>
          <div className="flex items-center py-1 px-6 justify-center gap-3 border-gray-100 border-solid border-2 bg-white rounded-full  w-full">
            <Avatar
              src={(user?.foto as string) || undefined}
              appearance="circle"
              name={name}
            />
            <motion.p
              className={textNotActiveStyles}
              variants={linksVariants}
            >
              {name && name.length > 22
                ? `${name.slice(0, 22)}...`
                : name}
              {!name && user?.nombre === undefined && 'Usuario'}
            </motion.p>
          </div>

          <div className="flex flex-col justify-center items-center gap-24 w-full pt-10">
            {categories.slice(0, 3).map((category, i) => {
              const Icon = category.icon;
              const isActive = location.pathname.includes(
                `/${category.path}`
              );

              const textStyles = isActive
                ? textActiveStyles
                : textNotActiveStyles;
              const activeStyles = isActive
                ? buttonActiveStyles
                : buttonStyles;
              const iconStyles = isActive ? sColor : pColor;
              const showLink =
                !category.roleIds || category.roleIds.includes(idRol);

              return showLink ? (
                <ConfirmLink
                  className={activeStyles}
                  to={`/${category.path}`}
                  message={
                    isOnProtectedRoute
                      ? '¿Estás seguro de que deseas salir? Perderás los cambios no guardados.'
                      : ''
                  }
                  key={i}
                >
                  <Icon
                    label={category.name}
                    primaryColor={iconStyles}
                    size={iconSize}
                  />
                  <motion.p
                    className={textStyles}
                    variants={linksVariants}
                  >
                    {category.name}
                  </motion.p>
                </ConfirmLink>
              ) : null;
            })}
            <button
              className={`justify-center`}
              onClick={handleLogout}
            >
              <SignOutIcon
                label="cerrar sesión"
                primaryColor={pColor}
                size={'medium'}
              />
              <motion.p
                className="link font-medium text-[0.85rem]"
                variants={linksVariants}
              ></motion.p>
            </button>
          </div>
        </div>

        <img
          src={zebrandsLogo}
          alt="zebrands"
          className="w-24 mt-8 opacity-60"
        />
      </motion.div>
    </>
  );
};

export default Sidebar;
