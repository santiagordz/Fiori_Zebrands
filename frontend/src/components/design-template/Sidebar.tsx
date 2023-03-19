// Importamos las librerías y componentes necesarios para el sidebar
import React, { FC, useState } from 'react';
import Avatar from '@atlaskit/avatar';
import SignOutIcon from '@atlaskit/icon/glyph/sign-out';
import MenuIcon from '@atlaskit/icon/glyph/menu';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { categories } from '../../utils/templateData';

// Importamos la imagen del logo de la empresa
import zebrandsLogo from '../../assets/zebrandsLogo.svg';

// Definimos las propiedades necesarias para el sidebar
interface SidebarProps {
  idRol: number;
  name: string;
}

// Definimos los estilos para los botones y texto en el sidebar
const buttonActiveStyles =
  'bg-[#E9F2FF] px-[2vmin] py-[0.8vmin] flex justify-start w-full items-center rounded-md gap-5';

const buttonStyles =
  'px-[2vmin] py-[0.8vmin] flex justify-start w-full items-center rounded-md gap-5 hover:bg-[#E9F2FF]';

const textStyle = 'link font-bold text-[0.85rem]';

const textNotActiveStyles = `${textStyle} text-paragraph`;

const textActiveStyles = `${textStyle} text-selectBold`;

// Creamos el componente Sidebar
const Sidebar: FC<SidebarProps> = ({ idRol, name }) => {
  // Definimos los estados necesarios para el sidebar
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  const location = useLocation();
  const pColor = '#44546F';
  const sColor = '#0C66E4';
  const iconSize = 'medium';

  // Definimos las animaciones necesarias para el sidebar
  const sidebarVariants = {
    hovered: {
      width: '21vw',
    },
    collapsed: { width: '6vw' },
  };

  const linksVariants = {
    hovered: {
      opacity: 1,
      display: 'block',
    },
    collapsed: { opacity: 0, display: 'none' },
  };

  const logoVariants = {
    hovered: { width: '30%' },
    collapsed: { width: '70%' },
  };

  // Renderizamos el componente Sidebar
  return (
    <>
      {/* Creamos un botón que se muestra solo en dispositivos móviles */}
      <button
        className="lg:hidden w-full"
        onClick={() => setToggleSidebar(true)}
      >
        <MenuIcon label="menu" primaryColor={pColor} size={'large'} />
      </button>
      {/* Creamos el sidebar con animaciones */}
      <motion.div
        layout
        initial="collapsed"
        whileHover="hovered"
        transition={{ type: 'spring', stiffness: 50 }}
        variants={sidebarVariants}
        className={`invisible overflow-hidden whitespace-nowrap flex flex-col bg-white h-[100vh] items-center drop-shadow py-12 fixed left-0 lg:visible top-0`}
      >
        <div className="flex flex-col justify-between h-full">
          {/* Mostramos el avatar del usuario y su nombre */}
          <div className="flex items-center justify-center gap-3 border-gray-100 border-solid border-2 bg-white rounded-full py-[0.2vmin] w-full">
            <Avatar />
            <motion.p
              className={textNotActiveStyles}
              variants={linksVariants}
            >
              {name}
            </motion.p>
          </div>

          {/* Mostramos las categorías del sidebar */}
          <div className="flex flex-col justify-center items-center gap-7 w-full">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive =
                location.pathname === `/${category.path}`;
              const textStyles = isActive
                ? textActiveStyles
                : textNotActiveStyles;
              const activeStyles = isActive
                ? buttonActiveStyles
                : buttonStyles;
              const iconStyles = isActive ? sColor : pColor;
              const showLink =
                !category.roleIds || category.roleIds.includes(idRol);

              // Mostramos el link solo si el usuario tiene los permisos necesarios
              return showLink ? (
                <Link
                  className={activeStyles}
                  to={`/${category.path}`}
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
                </Link>
              ) : null;
            })}
          </div>

          {/* Creamos un botón para cerrar sesión */}
          <button className={`${buttonStyles} justify-center`}>
            <SignOutIcon
              label="cerrar sesión"
              primaryColor={pColor}
              size={'small'}
            />
            <motion.p
              className="link font-medium text-[1.7vmin] text-[#44546F]"
              variants={linksVariants}
            >
              Cerrar sesión
            </motion.p>
          </button>
        </div>

        {/* Mostramos el logo de la empresa */}
        <motion.img
          src={zebrandsLogo}
          alt="zebrands"
          variants={logoVariants}
          className="mt-8 opacity-60"
        />
      </motion.div>
    </>
  );
};

// Exportamos el componente Sidebar
export default Sidebar;
