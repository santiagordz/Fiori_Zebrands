import type { GlyphProps } from '@atlaskit/icon/types';
import React, { FC, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { userDataContext } from '../../contexts';
import Sidebar from './Sidebar';
import MenuExpandIcon from '@atlaskit/icon/glyph/menu-expand';
import { pathInfo } from '../../utils/templateData';
import SidebarMobile from './SidebarMobile';

interface DesignTemplateProps {
  children: React.ReactNode;
  buttons?: JSX.Element;
}

const DesignTemplate: FC<DesignTemplateProps> = ({
  children,
  buttons,
}) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { user } = useContext(userDataContext);
  const location = useLocation().pathname;
  const path = '/' + location.split('/')[1];
  const name = user?.nombre.split(' ')[0] || 'Usuario';
  const MainIcon: React.ComponentType<GlyphProps> =
    pathInfo[path].icon;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    const width = window.innerWidth;
    setScreenWidth(width);
  }, [window.innerWidth]);

  return (
    <>
      <div className="flex flex-col gap-5 lg:gap-6 w-auto lg:mx-[6vw] lg:my-[1vh] lg:ml-[9vw] lg:mr-[3vw]">
        <div className="visible lg:invisible">
          <SidebarMobile
            isSidebarOpen={mobileMenu}
            handleMenu={handleMenu}
          />
        </div>

        <div className="invisible lg:visible">
          <Sidebar />
        </div>
        <div className="flex flex-row justify-between items-center lg:px-0 px-10">
          <p className="font-medium text-[1.09rem] h-full text-left text-paragraph">
            Hola, {name}
          </p>
          <div>
            <button
              onClick={handleMenu}
              className="lg:invisible visible"
            >
              <MenuExpandIcon label="menu" size="xlarge" />
            </button>
          </div>
        </div>
        <div className="lg:flex lg:flex-row justify-center lg:justify-between items-center w-full">
          <div className="flex flex-row justify-center lg:justify-start items-center gap-2 lg:gap-4">
            <div className="bg-selectBold flex p-2 rounded-xl w-fit scale-[0.85]">
              <MainIcon
                label={`${pathInfo[path].view.toLowerCase()}`}
                primaryColor="white"
                secondaryColor="#0C66E4"
              />
            </div>
            <h1 className="font-semibold text-[1.18rem] text-accentBolder">
              {pathInfo[path].view}
            </h1>
          </div>
          <div className="flex py-10 lg:py-0 flex-col items-center justify-center lg:items-baseline lg:flex-row gap-8">
            {buttons}
          </div>
        </div>
        <div className="bg-background w-auto h-auto rounded-lg p-2 lg:p-7 text-paragraph m-2">
          {children}
        </div>
      </div>
    </>
  );
};

export default DesignTemplate;
