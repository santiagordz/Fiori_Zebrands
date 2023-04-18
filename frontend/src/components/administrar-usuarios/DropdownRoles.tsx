import { useState, useEffect } from 'react';
import axios from 'axios';

interface Rol {
  id: number;
  rol: string;
}

interface Props {
  onRolSeleccionadoChange: (valor: string) => void;
  rolActual: string;
  active?: boolean;
}

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/roles`;

const DropdowRoles = ({
  onRolSeleccionadoChange,
  rolActual,
  active = false,
}: Props) => {
  const [roles, setRoles] = useState<Rol[]>([]);
  const [rol, setRol] = useState<string>(rolActual || '');

  function hanldeRolChange(e: React.FormEvent<HTMLSelectElement>) {
    const target = e.target as HTMLSelectElement;
    const value = target.value;
    const rolSeleccionado = value;
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

  if (rolActual == '1') {
    rolActual = 'Administrador';
  } else if (rolActual == '2') {
    rolActual = 'Responsable';
  } else if (rolActual == '3') {
    rolActual = 'Squad Member';
  }

  return (
    <>
      <select
        disabled={active}
        required
        value={rol}
        onChange={hanldeRolChange}
        name="rol"
        id="dropdown-rol"
        className="w-44 h-8 bg-[#F1F2F4] rounded-md pl-2 hover:bg-gray-200 text-sm text-gray-600 font-medium"
      >
        {!rolActual && (
          <option disabled={true} value="">
            Selecciona un Rol
          </option>
        )}
        {rolActual && (
          <option disabled value="">
            {rolActual}
          </option>
        )}
        {roles.map((role) => (
          <option key={role.id} value={role.id}>
            {role.rol}
          </option>
        ))}
      </select>
      {active && (
        <p className="text-xs text-danger">
          No puedes cambiar tu propio rol
        </p>
      )}
    </>
  );
};

export default DropdowRoles;
