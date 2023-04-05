import React, { FC, createContext, useState } from 'react';

export interface PreguntaType {
  id: number;
  pregunta: string;
  predeterminada: boolean;
  id_tipo_pregunta: number;
  opciones?: string | null;
}

export interface newRetroType {
  id?: number;
  titulo?: string;
  descripcion?: string;
  predeterminadas?: PreguntaType[];
  otras?: PreguntaType[];
  usuarios?: any;
  // etiquetas?: any;
}

interface ContextProps {
  newRetro: newRetroType | null;
  setNewRetro: (prevNewRetro: newRetroType) => newRetroType | void;
}

export const newRetroContext = createContext<ContextProps>({
  newRetro: null,
  setNewRetro: (prevNewRetro: newRetroType) => {},
});

interface newRetroContextProps {
  children: React.ReactNode;
}

const NewRetroProvider: FC<newRetroContextProps> = ({ children }) => {
  const [newRetro, setNewRetro] = useState<newRetroType>({
    id: 0,
    titulo: '',
    descripcion: '',
    predeterminadas: [],
    otras: [],
    usuarios: [],
  });

  return (
    <newRetroContext.Provider value={{ newRetro, setNewRetro }}>
      {children}
    </newRetroContext.Provider>
  );
};

export default NewRetroProvider;
