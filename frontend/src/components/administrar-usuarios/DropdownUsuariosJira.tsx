import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/usuarios_jira`;

interface UsuarioJira {
  id_jira: string;
  nombre_jira: string;
}

interface DropdownUsuariosJiraProps {
  onUsuarioSeleccionadoChange: (valor: any) => void;
  usuarioActual?: any;
  isRequired?: boolean;
}

const DropdownUsuariosJira: FC<DropdownUsuariosJiraProps> = ({
  onUsuarioSeleccionadoChange,
  usuarioActual,
  isRequired = true,
}) => {
  const [usuarios, setUsuarios] = useState<UsuarioJira[]>([]);
  const [usuario, setUsuario] = useState(
    usuarioActual ? usuarioActual : ''
  );

  const getUsuariosJira = () => {
    try {
      const one = usuarioActual
        ? axios.get(`${URI}/one/${usuarioActual}`)
        : null;
      const res = axios.get(URI);
      res.then((res) => {
        if (one) {
          one.then((one) => {
            setUsuarios([...one.data, ...res.data]);
          });
        } else {
          setUsuarios(res.data);
        }
      });
    } catch {
      console.log('Error al obtener los usuarios');
    }
  };

  const handleUsuarioChange = (
    e: React.FormEvent<HTMLSelectElement>
  ) => {
    const target = e.target as HTMLSelectElement;
    const value = target.value as any;
    const id_jira = value;
    setUsuario(id_jira);
    onUsuarioSeleccionadoChange(id_jira);
  };

  useEffect(() => {
    getUsuariosJira();
  }, []);

  useEffect(() => {
    if (usuarioActual) {
      setUsuario(usuarioActual);
    } else {
      setUsuario('');
    }
  }, [usuarioActual]);

  return (
    <select
      required={isRequired}
      onChange={handleUsuarioChange}
      value={usuario}
      name="usuarios-jira"
      id="usuarios-jira"
      className={`w-full h-8 bg-[#F1F2F4] rounded-md pl-2 hover:bg-gray-200 text-sm text-gray-600 font-medium focus:border-0`}
    >
      <option disabled value="">
        Selecciona un usuario
      </option>
      {usuarios.map((usuario) => (
        <option key={usuario.id_jira} value={usuario.id_jira}>
          {usuario.nombre_jira}
        </option>
      ))}
    </select>
  );
};

export default DropdownUsuariosJira;
