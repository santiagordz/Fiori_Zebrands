import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';

const URI = 'http://localhost:8000/colores';

interface Color {
  id: number;
  color: string;
}

interface DropdownColoresProps {
  onColorSeleccionadoChange: (valor: string) => void;
  colorActual: string;
}

const DropdownColores: FC<DropdownColoresProps> = ({
  onColorSeleccionadoChange,
  colorActual,
}) => {
  const [colores, setColores] = useState<Color[]>([]);
  const [color, setColor] = useState<string>(colorActual || '');

  const getColores = () => {
    const res = axios.get(URI);
    res.then((res) => {
      setColores(res.data);
    });
  };

  const handleColorChange = (e: any) => {
    const colorSeleccionado = e.target.value;
    setColor(colorSeleccionado);
    onColorSeleccionadoChange(colorSeleccionado);
  };

  useEffect(() => {
    getColores();
    console.log(color);
  }, []);

  return (
    <select
      onChange={handleColorChange}
      value={color}
      name="color"
      id="dropdown-colores"
      className={`w-44 h-8 bg-slate-100 rounded-md pl-2 hover:bg-gray-200 text-sm text-gray-600 font-medium focus:border-0`}
    >
      {colores.map((color) => (
        <option key={color.id} value={color.color}>
          {color.color}
        </option>
      ))}
    </select>
  );
};

export default DropdownColores;
