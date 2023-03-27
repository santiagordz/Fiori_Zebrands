import React, { FC, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './css/ModalRegistrarUsuarios.css';

import CrossIcon from '@atlaskit/icon/glyph/cross';
import DropdowRoles from './DropdownRoles';
import DropdownEtiquetas from './DropdownEtiquetas';
import DropdownColores from './DropdownColores';

const URI = 'http://localhost:8000/etiquetas/';

interface Etiqueta {
  id: number;
  nombre: string;
  id_color: number;
  color: string;
}

interface RegistrarEtiquetaProps {
  show: boolean;
  onClose: () => void;
}

const ModalRegistrarEtiqueta: FC<RegistrarEtiquetaProps> = ({
  show,
  onClose,
}) => {
  const [nombre, setNombre] = useState('');
  const [color, setColor] = useState('');

  const handleColorSeleccionado = (color: string) => {
    setColor(color);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const res = axios.post(URI, { etiqueta: nombre, color: color });
    res.then((response) => {
      window.location.reload();
    });
    onClose();
  };

  const handleClose = () => {
    setNombre('');
    setColor('');
    onClose();
  };

  if (!show) {
    return null;
  }
  return (
    <>
      <div className="modal-content px-10 py-10">
        <div className="modal-header">
          <div className="modal-title">
            <h4>Registrar etiqueta</h4>
            <button className="flex" onClick={handleClose}>
              <CrossIcon label="Cross Icon" />
            </button>
          </div>
          <div className="modal-subtitle">
            Registra una nueva etiqueta, esta podá ser asignada a un
            usuario.
          </div>
        </div>
        <div className="modal-body">
          <p className="font-bold text-left mb-4">
            Detalles de la nueva etiqueta
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-full"
            id="RegistrarEtiquetaForm"
          >
            <div className="flex gap-10">
              <div className="flex flex-col">
                <label
                  htmlFor="nombre"
                  className="text-sm text-slate-700 font-semibold after:content-['*'] after:text-red-700"
                >
                  Nombre
                </label>
                <input
                  required
                  name="nombre"
                  className="h-8 border-2 border-gray-300 rounded-sm p-2 focus:outline-gray-400 hover:bg-gray-100"
                  autoComplete="off"
                  id="nombre"
                  type="text"
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="color"
                  className="text-sm text-slate-700 font-semibold after:content-['*'] after:text-red-700"
                >
                  Color
                </label>
                <DropdownColores
                  colorActual=""
                  onColorSeleccionadoChange={handleColorSeleccionado}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <div className="flex gap-10 mt-12">
            <button
              className="rounded-none hover:text-blue-500 text-sm"
              onClick={handleClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              form="RegistrarEtiquetaForm"
              className="rounded-sm bg-jiraBlue text-white px-2 py-1 hover:bg-blue-500"
            >
              <p className="text-sm">Registrar Etiqueta</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalRegistrarEtiqueta;
