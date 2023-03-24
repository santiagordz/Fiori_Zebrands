import HomeIcon from '@atlaskit/icon/glyph/home';
import GraphBarIcon from '@atlaskit/icon/glyph/graph-bar';
import PdfIcon from '@atlaskit/icon/glyph/pdf';
import StarFilledIcon from '@atlaskit/icon/glyph/star-filled';
import SwitcherIcon from '@atlaskit/icon/glyph/switcher';
import PeopleIcon from '@atlaskit/icon/glyph/people';
import type { GlyphProps } from '@atlaskit/icon/types';

interface rolesType {
  [key: number]: string;
}

export const roles: rolesType = {
  11: 'Administrador',
  12: 'Responsable',
  13: 'Squad Member',
};

// Definimos un tipo de objeto que contiene los datos para la sidebar
interface categoriesType {
  name: string;
  icon: React.ComponentType<GlyphProps>;
  path: string;
  roleIds?: Array<number>;
}

// Creamos una lista con las categorías y la información necesaria de cada una
export const categories: Array<categoriesType> = [
  { name: 'Dashboard', icon: HomeIcon, path: 'dashboard' },
  {
    name: 'Métricas',
    icon: GraphBarIcon,
    path: 'metricas',
  },
  {
    name: 'Mis retrospectivas',
    icon: PdfIcon,
    path: 'mis-retrospectivas',
  },
  {
    name: 'Mis accionables',
    icon: StarFilledIcon,
    path: 'mis-accionables',
  },
  {
    name: 'Gestionar retrospectivas',
    icon: SwitcherIcon,
    path: 'gestionar-retrospectivas',
    roleIds: [11, 12],
  },
  {
    name: 'Administrar usuarios',
    icon: PeopleIcon,
    path: 'administrar-usuarios',
    roleIds: [11],
  },
];

// Definimos un tipo de objeto que contiene a desplegar según la ruta
interface pathInfoType {
  [key: string]: {
    view: string;
    icon: React.ComponentType<GlyphProps>;
  };
}

// Definimos los iconos y los nombres para cada ruta
export const pathInfo: pathInfoType = {
  '/dashboard': {
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
    view: 'Gestionar retrospectivas',
    icon: SwitcherIcon,
  },
  '/administrar-usuarios': {
    view: 'Administrar usuarios',
    icon: PeopleIcon,
  },
};
