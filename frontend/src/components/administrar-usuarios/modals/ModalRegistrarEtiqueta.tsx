import CrossIcon from '@atlaskit/icon/glyph/cross';
import axios from 'axios';
import { FC, FormEvent, useState } from 'react';
import DropdownColores from '../DropdownColores';
import '../css/ModalRegistrarUsuarios.css';
import type { TagColor } from '@atlaskit/tag';

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
  const [color, setColor] = useState<TagColor>('standard');

  const handleColorSeleccionado = (color: TagColor) => {
    setColor(color);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const res = axios.post(URI, { etiqueta: nombre, color: color });
    res.then((response) => {
      window.location.reload();
    });
    onClose();
  };

  const handleClose = () => {
    setNombre('');
    setColor('standard');
    onClose();
  };

  if (!show) {
    return null;
  }
  return (
    <>
      <div className="modal z-[1000] bg-blueRGBA">
        <div className="modal-content px-10 py-10">
          <div className="modal-header">
            <div className="modal-title">
              <h4>Registrar etiqueta</h4>
              <button className="flex" onClick={handleClose}>
                <CrossIcon label="Cross Icon" />
              </button>
            </div>
            <div className="modal-subtitle">
              Registra una nueva etiqueta, esta podrá ser asignada a
              un usuario para agilizar el proceso de asignación de
              retrospectivas.
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
                    pattern="^[a-zA-Z0-9!@#$%^&*()_+\-]{1,15}$"
                    title="El nombre de la etiqueta debe tener entre 1 y 15 caracteres alfanuméricos"
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
                    onColorSeleccionadoChange={
                      handleColorSeleccionado
                    }
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
      </div>
    </>
  );
};

export default ModalRegistrarEtiqueta;
