import React, { FC } from 'react';
import { useState } from 'react';

import './css/ModalEditarUsuarios.css';
import DropdowRoles from './DropdownRoles';
import DropdownEtiquetas from './DropdownEtiquetas';

import CrossIcon from '@atlaskit/icon/glyph/cross';
import SectionMessage from '@atlaskit/section-message';

interface ModalEditarUsuariosProps {
  show: boolean;
  onClose: () => void;
}

const ModalEditarUsuarios: FC<ModalEditarUsuariosProps> = ({
  show,
  onClose,
}) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [rol, setRol] = useState('');
  const [etiquetas, setEtiquetas] = useState<string[]>([]);

  const handleRolSeleccionado = (rol: string) => {
    setRol(rol);
  };

  const handleClose = () => {
    setNombre('');
    setApellido('');
    setRol('');
    onClose();
  };

  //FALTAN: handleSubmit, traer datos del usuario a editar

  if (!show) {
    return null;
  }

  return (
    <>
      <div className="modal">
        <div className="modal-content px-10 py-[18rem]">
          <div className="modal-header">
            <div className="modal-title">
              <h4>Modificar Usuario</h4>
              <button onClick={handleClose}>
                <CrossIcon label="Cross Icon" />
              </button>
            </div>
            <div className="modal-subtitle">
              Modifica los datos de un usuario en el sistema.
            </div>
          </div>
          <div className="modal-body">
            <p className="font-bold text-left mb-4">
              Detalles de usuario
            </p>
            <SectionMessage appearance="information">
              <p className="text-[#0055CC] text-xs ">
                Algunos detalles están deshabilitados debido a que la
                cuenta del usuario está conectada a una cuenta de
                Google.
              </p>
            </SectionMessage>
            <form
              action=""
              className="flex flex-col mt-4"
              id="EditarUsuarioForm"
            >
              <div className="flex gap-4 mb-5">
                <div className="w-5/12 flex flex-col">
                  <label
                    htmlFor="nombre"
                    className="text-xs text-[#626f86] font-semibold"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    className="h-8 border-2 border-gray-300 rounded-sm p-2 focus:outline-gray-400 hover:bg-gray-100"
                  />
                </div>
                <div className="w-7/12 flex flex-col">
                  <label
                    htmlFor="apellido"
                    className="text-xs text-[#626f86] font-semibold"
                  >
                    Apellidos
                  </label>
                  <input
                    type="text"
                    name="apellido"
                    className="h-8 border-2 border-gray-300 rounded-sm p-2 focus:outline-gray-400 hover:bg-gray-100"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="correo"
                  className=" text-xs full text-[#626f86] font-semibold"
                >
                  Correo
                </label>
                <input
                  type="text"
                  disabled={true}
                  className="h-8 border-2 border-gray-300 rounded-sm p-2 disabled:bg-[#F1F2F4]"
                ></input>
              </div>
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="rol"
                  className=" text-xs full text-[#626f86] font-semibold"
                >
                  Rol
                </label>
                <DropdowRoles
                  onRolSeleccionadoChange={handleRolSeleccionado}
                  rolActual={'Chef'}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="etiquetas"
                  className="text-xs full text-[#626f86] font-semibold"
                >
                  Etiquetas
                </label>
                <DropdownEtiquetas
                  etiquetasPreseleccionadas={[
                    {
                      id: 1,
                      etiqueta: 'Front-End',
                      color: 'blueLight',
                    },
                  ]}
                  onEtiquetasSeleccionadasChange={setEtiquetas}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <div className="flex gap-10 mt-8">
              <button
                className="rounded-none hover:text-blue-500 text-sm"
                onClick={handleClose}
              >
                Cancelar
              </button>
              <button
                type="submit"
                form="EditarUsuarioForm"
                className="rounded-sm bg-jiraBlue text-white px-2 py-1 hover:bg-blue-500"
              >
                <p className="text-sm">Registrar Usuario</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEditarUsuarios;
