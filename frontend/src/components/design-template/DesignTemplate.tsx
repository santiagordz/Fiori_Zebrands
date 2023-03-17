import React, { FC } from 'react';
import Sidebar from './Sidebar';
import HomeIcon from '@atlaskit/icon/glyph/home';
import GraphBarIcon from '@atlaskit/icon/glyph/graph-bar';
import PdfIcon from '@atlaskit/icon/glyph/pdf';
import StarFilledIcon from '@atlaskit/icon/glyph/star-filled';
import SwitcherIcon from '@atlaskit/icon/glyph/switcher';
import PeopleIcon from '@atlaskit/icon/glyph/people';
import { useLocation } from 'react-router-dom';
import type { GlyphProps } from '@atlaskit/icon/types';

interface DesignTemplateProps {
  children: React.ReactNode;
  buttons?: JSX.Element;
}

interface pathInfoType {
  [key: string]: {
    view: string;
    icon: React.ComponentType<GlyphProps>;
  };
}

const pathInfo: pathInfoType = {
  '/': {
    view: 'Dashboard',
    icon: HomeIcon,
  },
  '/metricas': {
    view: 'Métricas',
    icon: GraphBarIcon,
  },

  'mis-retrospectivas': {
    view: 'Mis retrospectivas',
    icon: PdfIcon,
  },
  '/mis-accionables': {
    view: 'Mis accionables',
    icon: StarFilledIcon,
  },
  '/gestionar-retrospectivas': {
    view: 'Gestionar Retrospectivas',
    icon: SwitcherIcon,
  },
  '/administrar-usuarios': {
    view: 'Administrar usuarios',
    icon: PeopleIcon,
  },
};

const DesignTemplate: FC<DesignTemplateProps> = ({
  children,
  buttons,
}) => {
  const location = useLocation().pathname;
  const path = '/' + location.split('/')[1];
  const name = 'Santiago';
  const MainIcon: React.ComponentType<GlyphProps> =
    pathInfo[path].icon;
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
              <MainIcon
                label={`${pathInfo[path].view.toLowerCase()}`}
                primaryColor="white"
              />
            </div>
            <h1 className="font-semibold text-2xl">
              {pathInfo[path].view}
            </h1>
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
