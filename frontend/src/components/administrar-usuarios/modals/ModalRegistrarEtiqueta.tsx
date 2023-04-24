import CheckCircleIcon from '@atlaskit/icon/glyph/check-circle';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import EditorErrorIcon from '@atlaskit/icon/glyph/editor/error';
import Tag, { type TagColor } from '@atlaskit/tag';
import axios from 'axios';
import { FC, FormEvent, useContext, useState } from 'react';
import { FlagContext } from '../../../contexts';
import DropdownColores from '../DropdownColores';
import { getEtiquetasContext } from '../local-contexts';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/etiquetas/`;

interface RegistrarEtiquetaProps {
  show: boolean;
  onClose: () => void;
}

const ModalRegistrarEtiqueta: FC<RegistrarEtiquetaProps> = ({
  show,
  onClose,
}) => {
  const { addFlag } = useContext(FlagContext);
  const { getEtiquetas } = useContext(getEtiquetasContext);
  const [nombre, setNombre] = useState('');
  const [color, setColor] = useState<TagColor>('standard');

  const handleColorSeleccionado = (color: TagColor) => {
    setColor(color);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      axios
        .post(URI, {
          etiqueta: nombre,
          color: color,
        })
        .then(() => {
          getEtiquetas();
          addFlag(
            '¡Excelente! La etiqueta se ha registrado correctamente.',
            CheckCircleIcon,
            'success'
          );
          onClose();
        });
    } catch (error) {
      if (error instanceof Error) {
        addFlag(
          '¡Oh no! Hubo un error al registrar la etiqueta. Por favor, inténtalo de nuevo más tarde o contacta soporte.',
          EditorErrorIcon,
          'error',
          error.toString()
        );
      } else {
        addFlag(
          '¡Oh no! Hubo un error al registrar la etiqueta. Por favor, inténtalo de nuevo más tarde o contacta soporte.',
          EditorErrorIcon,
          'error',
          'Error desconocido'
        );
      }
    }
    setColor('standard');
    setNombre('');
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
            <div className="flex justify-center" id="tag">
              <Tag
                text={nombre}
                color={color}
                isRemovable={false}
                appearance="rounded"
              />
            </div>
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
                    //el siguiente pattern permite letras, espacios, números y los siguientes caracteres especiales: !@#$%^&*()_+-/, no puede pasar de 15 caracteres, ni empezar con un espacio
                    pattern="^[a-zA-Z0-9!@#$%^&*()_+-/,]{1,15}$"
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
