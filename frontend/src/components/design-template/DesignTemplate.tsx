// Importa las dependencias necesarias para el componente DesignTemplate
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

// Definimos las propiedades necesarias para el designtemplate
interface DesignTemplateProps {
  children: React.ReactNode;
  buttons?: JSX.Element;
}

// Definimos un tipo de objeto que contiene a desplegar según la ruta
interface pathInfoType {
  [key: string]: {
    view: string;
    icon: React.ComponentType<GlyphProps>;
  };
}

// Definimos los iconos y los nombres para cada ruta
const pathInfo: pathInfoType = {
  '/': {
    view: 'Dashboard',
    icon: HomeIcon,
  },
  '/metricas': {
    view: 'Métricas',
    icon: GraphBarIcon,
  },
  '/mis-retrospectivas': {
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

// Definimos un componente de tipo función que recibe las props DesignTemplateProps
const DesignTemplate: FC<DesignTemplateProps> = ({
  children,
  buttons,
}) => {
  // Obtiene la ruta actual
  const location = useLocation().pathname;
  // Obtiene la primera parte de la ruta (antes del primer '/')
  const path = '/' + location.split('/')[1];
  // Definimos un nombre por defecto
  const name = 'Santiago';
  // Obtiene el icono que corresponde a la ruta actual
  const MainIcon: React.ComponentType<GlyphProps> =
    pathInfo[path].icon;
  return (
    <>
      <div className="flex flex-col items-center gap-7 w-auto h-screen mx-[6vw] my-[6vh] lg:ml-[9vw] lg:mr-[3vw]">
        {/* Incluimos el componente Sidebar */}
        <Sidebar idRol={1} name={'Santiago Rodríguez'} />
        {/* Mostramos un saludo con el nombre definido */}
        <p className="font-medium text-xl w-full text-left text-paragraph">
          Hola, {name}
        </p>
        <div className="flex justify-between items-center w-full mt-3">
          <div className="flex items-center gap-4">
            {/* Mostramos el icono de la ruta actual */}
            <div className="bg-selectBold flex p-2 rounded-xl w-fit">
              <MainIcon
                label={`${pathInfo[path].view.toLowerCase()}`}
                primaryColor="white"
              />
            </div>
            {/* Mostramos el título de la vista actual */}
            <h1 className="font-semibold text-2xl text-accentBolder">
              {pathInfo[path].view}
            </h1>
          </div>
          {/* Mostramos los botones opcionales que se pasan como prop */}
          <div className="flex gap-2">{buttons}</div>
        </div>
        {/* Mostramos el contenido principal del componente */}
        <div className="bg-background w-full h-auto rounded-lg p-7 text-paragraph">
          {children}
        </div>
      </div>
    </>
  );
};

// Exporta el componente DesignTemplate por defecto
export default DesignTemplate;
