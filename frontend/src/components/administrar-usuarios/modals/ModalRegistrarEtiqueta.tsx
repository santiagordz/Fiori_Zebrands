import CrossIcon from '@atlaskit/icon/glyph/cross';
import axios from 'axios';
import { FC, FormEvent, useState } from 'react';
import DropdownColores from '../DropdownColores';
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
      <div className="z-[1000] bg-blueRGBA fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center">
        <div className="p-10 bg-white rounded-xl flex flex-col">
          <div className="w-full flex flex-col items-center">
            <div className="w-full text-xl font-bold mb-1 flex items-center justify-between">
              <h4>Registrar etiqueta</h4>
              <button className="flex" onClick={handleClose}>
                <CrossIcon label="Cross Icon" />
              </button>
            </div>
            <div className="w-full text-sm text-[#44546f] mb-5">
              Registra una nueva etiqueta, esta podrá ser asignada a
              un usuario <br /> para agilizar el proceso de asignación
              de retrospectivas.
            </div>
          </div>
          <div className="w-full flex flex-col justify center">
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
                    className="h-8 border-2 border-gray0 rounded-sm p-2 focus:outline-gray-400 hover:bg-gray-100"
                    autoComplete="off"
                    id="nombre"
                    type="text"
                    pattern="^[a-zA-Z0-9!@#$%^&*()_+\-/]{1,15}$"
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
          <div className="w-full flex items-center justify-center">
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
