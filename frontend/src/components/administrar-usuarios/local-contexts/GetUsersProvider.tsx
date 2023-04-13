import React, {
  FC,
  createContext,
  useCallback,
  useState,
  useEffect,
} from 'react';
import axios from 'axios';
import type { TagColor } from '@atlaskit/tag';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/usuarios/info`;

export interface Etiqueta {
  id: number;
  nombre: string;
  color: TagColor;
  id_color: number;
}

export interface Usuario {
  id: number;
  correo: string;
  password: string;
  nombre: string;
  foto: string;
  rol: number;
  etiquetas: Etiqueta[];
}

interface ContextProps {
  getUsers: () => void;
  userRows: Array<Usuario>;
}

export const getUsersContext = createContext<ContextProps>({
  userRows: [],
  getUsers: () => {},
});

interface GetUsersProviderProps {
  children: React.ReactNode;
}

const GetUsersProvider: FC<GetUsersProviderProps> = ({
  children,
}) => {
  const [userRow, setUserRow] = useState<Array<Usuario>>([]);
  const getUsers = useCallback(async () => {
    const res = await axios.get(URI);
    const usuarios = res.data.usuarios.map((usuario: Usuario) => ({
      ...usuario,
    }));
    setUserRow(usuarios);
  }, []);

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <getUsersContext.Provider
      value={{ userRows: userRow, getUsers: getUsers }}
    >
      {children}
    </getUsersContext.Provider>
  );
};

export default GetUsersProvider;
