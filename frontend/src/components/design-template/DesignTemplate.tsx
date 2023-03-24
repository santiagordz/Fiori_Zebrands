import type { GlyphProps } from '@atlaskit/icon/types';
import React, { FC, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { userDataContext } from '../../contexts';
import Sidebar from './Sidebar';

import { pathInfo } from '../../utils/templateData';

interface DesignTemplateProps {
  children: React.ReactNode;
  buttons?: JSX.Element;
}

const DesignTemplate: FC<DesignTemplateProps> = ({
  children,
  buttons,
}) => {
  const { user } = useContext(userDataContext);
  const location = useLocation().pathname;
  const path = '/' + location.split('/')[1];
  const name = user?.nombre || 'Usuario';
  const MainIcon: React.ComponentType<GlyphProps> =
    pathInfo[path].icon;

  return (
    <>
      <div className="flex flex-col items-center gap-7 w-auto mx-[6vw] my-[6vh] lg:ml-[9vw] lg:mr-[3vw]">
        <Sidebar />
        <p className="font-medium text-xl w-full h-fit text-left text-paragraph">
          Hola, {name}
        </p>
        <div className="flex justify-between items-center w-full mt-3">
          <div className="flex items-center gap-4">
            <div className="bg-selectBold flex p-2 rounded-xl w-fit">
              <MainIcon
                label={`${pathInfo[path].view.toLowerCase()}`}
                primaryColor="white"
                secondaryColor="#0C66E4"
              />
            </div>
            <h1 className="font-semibold text-2xl text-accentBolder">
              {pathInfo[path].view}
            </h1>
          </div>
          <div className="flex gap-2">{buttons}</div>
        </div>
        <div className="bg-background w-full h-auto rounded-lg p-7 text-paragraph">
          {children}
        </div>
      </div>
    </>
  );
};

export default DesignTemplate;
