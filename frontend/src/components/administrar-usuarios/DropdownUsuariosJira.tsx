import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';

const URI = 'http://localhost:8000/usuarios_jira';

interface UsuarioJira {
  id_jira: string;
  nombre_jira: string;
}

interface DropdownUsuariosJiraProps {
  onUsuarioSeleccionadoChange: (valor: any) => void;
}

const DropdownUsuariosJira: FC<DropdownUsuariosJiraProps> = ({
  onUsuarioSeleccionadoChange,
}) => {
  const [usuarios, setUsuarios] = useState<UsuarioJira[]>([]);
  const [usuario, setUsuario] = useState('');

  const getUsuariosJira = () => {
    try {
      const res = axios.get(URI);
      res.then((res) => {
        setUsuarios(res.data);
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
    const colorSeleccionado = value;
    setUsuario(colorSeleccionado);
    onUsuarioSeleccionadoChange(colorSeleccionado);
  };

  useEffect(() => {
    getUsuariosJira();
  }, []);

  return (
    <select
      required
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
