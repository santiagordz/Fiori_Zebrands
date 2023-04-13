import React, {
  FC,
  createContext,
  useCallback,
  useState,
  useEffect,
} from 'react';
import axios from 'axios';
import type { TagColor } from '@atlaskit/tag';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/etiquetas`;

export interface Etiqueta {
  id: number;
  nombre: string;
  color: TagColor;
  id_color: number;
}

interface ContextProps {
  getEtiquetas: () => void;
  etiquetas: Array<Etiqueta>;
}

export const getEtiquetasContext = createContext<ContextProps>({
  etiquetas: [],
  getEtiquetas: () => {},
});

interface GetEtiquetasProviderProps {
  children: React.ReactNode;
}

const GetEtiquetasProvider: FC<GetEtiquetasProviderProps> = ({
  children,
}) => {
  const [etiquetas, setEtiquetas] = useState<Array<Etiqueta>>([]);

  const getEtiquetas = useCallback(async () => {
    try {
      const res = await axios.get(`${URI}`);
      setEtiquetas(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getEtiquetas();
  }, []);
  return (
    <getEtiquetasContext.Provider
      value={{ etiquetas: etiquetas, getEtiquetas: getEtiquetas }}
    >
      {children}
    </getEtiquetasContext.Provider>
  );
};

export default GetEtiquetasProvider;
