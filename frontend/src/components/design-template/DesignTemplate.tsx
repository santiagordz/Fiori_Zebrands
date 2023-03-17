import React, { FC } from 'react';
import Sidebar from './Sidebar';
import HomeIcon from '@atlaskit/icon/glyph/home';

interface DesignTemplateProps {
  children: React.ReactNode;
  buttons?: JSX.Element;
  view: string;
}

const DesignTemplate: FC<DesignTemplateProps> = ({
  children,
  buttons,
  view,
}) => {
  const name = 'Santiago';
  const iconSize = 'medium';
  const icon = (
    <HomeIcon label="home" primaryColor={'white'} size={iconSize} />
  );
  return (
    <>
      <div className="flex flex-col items-center gap-7 w-auto h-screen mx-[6vw] my-[6vh] lg:ml-[9vw] lg:mr-[3vw]">
        <Sidebar
          idRol={1}
          view={'Dashboard'}
          name={'Santiago Rodríguez'}
        />
        <p className="font-medium text-xl w-full text-left">
          Hola, {name}
        </p>
        <div className="flex justify-between items-center w-full mt-3">
          <div className="flex items-center gap-4">
            <div className="bg-selectBold flex p-2 rounded-xl w-fit">
              {icon}
            </div>
            <h1 className="font-semibold text-2xl">{view}</h1>
          </div>
          <div className="flex gap-2">{buttons}</div>
        </div>
        <div className="bg-background w-full h-auto rounded-lg p-7">
          {children}
        </div>
      </div>
    </>
  );
};

export default DesignTemplate;
