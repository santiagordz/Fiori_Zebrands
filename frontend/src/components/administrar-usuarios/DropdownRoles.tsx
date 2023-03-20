import { useState, useEffect } from 'react';
import axios from 'axios';

interface Rol {
  id: number;
  rol: string;
}

interface Props {
  onRolSeleccionadoChange: (valor: string) => void;
}

const URI = 'http://localhost:8000/roles';

const DropdowRoles = ({ onRolSeleccionadoChange }: Props) => {
  const [roles, setRoles] = useState<Rol[]>([]);
  const [rol, setRol] = useState<string>('');

  function hanldeRolChange(e: any) {
    const rolSeleccionado = e.target.value;
    setRol(rolSeleccionado);
    onRolSeleccionadoChange(rolSeleccionado);
  }

  useEffect(() => {
    axios
      .get<Rol[]>(URI)
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <select
      required
      value={rol}
      onChange={hanldeRolChange}
      name="rol"
      id="dropdown-rol"
      className="w-44 h-8 bg-slate-100 rounded-md pl-2 hover:bg-gray-200 text-sm text-gray-600 font-medium"
    >
      <option disabled={true} value="">
        Selecciona un Rol
      </option>
      {roles.map((role) => (
        <option key={role.id} value={role.id}>
          {role.rol}
        </option>
      ))}
    </select>
  );
};

export default DropdowRoles;
