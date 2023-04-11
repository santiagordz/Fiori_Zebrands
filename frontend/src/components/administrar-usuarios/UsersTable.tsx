import Avatar from '@atlaskit/avatar';
import DynamicTable from '@atlaskit/dynamic-table';
import type { RowType } from '@atlaskit/dynamic-table/dist/types/types';
import { FC, useContext } from 'react';
import { userDataContext } from '../../contexts';
import RolIcon from './RolIcon';
import TableHead from './UsersTableHead';
import {
  BorrarIcon,
  EditarIcon,
  EtiquetaIcon,
  ResponsableIcon,
} from './icons';
import { getUsersContext } from './local-contexts';

interface UsersTableProps {}

const UsersTable: FC<UsersTableProps> = ({}) => {
  const { userRows } = useContext(getUsersContext);
  const { user } = useContext(userDataContext);
  const tableRows: RowType[] = [];

  userRows.map((usuario, i) =>
    tableRows.push({
      key: usuario.id.toString(),
      isHighlighted: false,
      cells: [
        {
          key: `nombre-${usuario.id}`,
          content: (
            <span className="flex items-center gap-2 ml-5 w-full">
              <Avatar src={usuario.foto} size="small" />
              <div className="w-full">
                <p>
                  {usuario.nombre ||
                    'Nuevo usuario (sin registrar con Google)'}
                  {user?.id_usuario === usuario.id ? '(Tú)' : ''}
                </p>
              </div>
            </span>
          ),
        },
        {
          key: `correo-${usuario.correo}`,
          content: <div className="text-left">{usuario.correo}</div>,
        },
        {
          key: `rol-${usuario.rol}`,
          content: (
            <div className="text-left">
              <RolIcon rol={usuario.rol} />
            </div>
          ),
        },
        {
          key: `tag-${i}`,
          content: (
            <div className="flex justify-start">
              <EtiquetaIcon etiquetas={usuario.etiquetas} />
            </div>
          ),
        },
        {
          key: `rol-${usuario.id}`,
          content: (
            <div className="flex justify-center">
              <ResponsableIcon
                usuario={{
                  id: usuario.id,
                  rol: usuario.rol,
                  nombre: usuario.nombre,
                  correo: usuario.correo,
                }}
              />
            </div>
          ),
        },
        {
          key: `editar-${usuario.id}`,

          content: (
            <div className="flex justify-center">
              <EditarIcon id={usuario.id} />
            </div>
          ),
        },
        {
          key: `borrar-${usuario.id}`,

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
