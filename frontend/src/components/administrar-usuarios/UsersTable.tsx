import Avatar from '@atlaskit/avatar';
import DynamicTable from '@atlaskit/dynamic-table';
import type { RowType } from '@atlaskit/dynamic-table/dist/types/types';
import type { TagColor } from '@atlaskit/tag';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import RolIcon from './RolIcon';
import TableHead from './UsersTableHead';
import {
  BorrarIcon,
  EditarIcon,
  EtiquetaIcon,
  ResponsableIcon,
} from './icons';
import { userDataContext } from '../../contexts';

const URI = 'http://localhost:8000/usuarios/info';

export interface Etiqueta {
  id: number;
  nombre: string;
  color: TagColor;
  id_color: number;
}

interface Usuario {
  id: number;
  correo: string;
  password: string;
  nombre: string;
  foto: string;
  rol: number;
  etiquetas: Etiqueta[];
}

const UsersTable = () => {
  const { user } = useContext(userDataContext);
  const [userRow, setUserRow] = useState<Array<Usuario>>([]);
  const tableRows: RowType[] = [];

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get(URI);
    const usuarios = res.data.usuarios.map((usuario: Usuario) => ({
      ...usuario,
    }));
    setUserRow(usuarios);
  };

  userRow.map((usuario, i) =>
    tableRows.push({
      key: usuario.id.toString(),
      isHighlighted: false,
      cells: [
        {
          key: usuario?.nombre || 'Nuevo usuario',
          content: (
            <span className="flex items-center gap-2 ml-5 w-full">
              <Avatar src={usuario.foto} size="small" />
              <div className="w-full">
                <p>
                  {usuario.nombre ||
                    'Nuevo usuario (sin registrar con google)'}{' '}
                  {user?.id_usuario === usuario.id ? '(Tú)' : ''}
                </p>
              </div>
            </span>
          ),
        },
        {
          key: usuario.correo,
          content: <div className="text-left">{usuario.correo}</div>,
        },
        {
          key: usuario.rol,
          content: (
            <div className="text-left">
              <RolIcon rol={usuario.rol} />
            </div>
          ),
        },
        {
          key: i,
          content: (
            <div className="flex justify-start">
              <EtiquetaIcon etiquetas={usuario.etiquetas} />
            </div>
          ),
        },
        {
          key: `${usuario.id}`,

          content: (
            <div className="flex justify-center">
              <ResponsableIcon idUsuario={usuario.id} />
            </div>
          ),
        },
        {
          key: `${usuario.id}`,

          content: (
            <div className="flex justify-center">
              <EditarIcon id={usuario.id} />
            </div>
          ),
        },
        {
          key: usuario.id,

          content: (
            <div className="flex justify-center">
              <BorrarIcon idUsuario={usuario.id} />
            </div>
          ),
        },
      ],
    })
  );

  return (
    <div className="bg-white rounded-sm w-full px-12 py-6 text-sm">
      <DynamicTable
        head={TableHead}
        rows={tableRows}
        emptyView={
          <div className="text-3xl">No hay usuarios para mostrar</div>
        }
        rowsPerPage={20}
      />
    </div>
  );
};

export default UsersTable;
