import axios from 'axios';
import { FC, FormEvent, useEffect, useState } from 'react';
import '../css/ModalRegistrarUsuarios.css';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import DropdownEtiquetas from '../DropdownEtiquetas';
import DropdowRoles from '../DropdownRoles';
import DropdownUsuariosJira from '../DropdownUsuariosJira';
import { Etiqueta } from '../UsersTable';

const URI = 'http://localhost:8000/usuarios/createUser';

interface RegistrarUsuariosProps {
  show: boolean;
  onClose: () => void;
}

const ModalRegistrarUsuarios: FC<RegistrarUsuariosProps> = ({
  show,
  onClose,
}) => {
  const [correo, setCorreo] = useState('');
  const [dominioCorreo, setDominioCorreo] = useState('@zeb.mx');
  const [rol, setRol] = useState('');
  const [etiquetas, setEtiquetas] = useState<Etiqueta[]>([]);
  const [usuarioJira, setUsuarioJira] = useState();

  const handleRolSeleccionado = (rol: string) => {
    setRol(rol);
  };

  const handleEtiquetasSeleccionadas = (etiquetas: Etiqueta[]) => {
    setEtiquetas(etiquetas);
  };

  const handleUsuarioSeleccionado = (usuario: any) => {
    setUsuarioJira(usuario);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(URI, {
        correo: `${correo}${dominioCorreo}`,
        rol: Number(rol),
        etiquetas: etiquetas,
        usuario_jira: usuarioJira,
      });
      window.location.reload();
    } catch {
      window.alert('Hubo un error al registrar el usuario');
    }
    setCorreo('');
    setRol('');
    onClose();
  };

  const handleClose = () => {
    setCorreo('');
    setRol('');
    onClose();
  };

  if (!show) {
    return null;
  }
  return (
    <>
      <div className="z-[1000] bg-blueRGBA fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center">
        <div className="p-10 bg-white rounded-xl flex flex-col ">
          <div className="modal-header">
            <div className="modal-title">
              <h4>Registrar usuario</h4>
              <button className="flex" onClick={handleClose}>
                <CrossIcon label="Cross Icon" />
              </button>
            </div>
            <div className="modal-subtitle">
              Registra un nuevo usuario en el sistema, una invitación
              a iniciar sesión será enviada al correo ingresado.
            </div>
          </div>
          <div className="modal-body">
            <p className="font-bold text-left mb-4">
              Detalles del nuevo usuario
            </p>
            <form
              onSubmit={handleSubmit}
              className="w-full"
              id="RegistrarUsuarioForm"
            >
              <div className="flex flex-col mb-5">
                <label id="label-correo">Usuario Jira</label>
                <div className="flex w-full gap-4">
                  <DropdownUsuariosJira
                    onUsuarioSeleccionadoChange={
                      handleUsuarioSeleccionado
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="correo" id="label-correo">
                  Correo
                </label>
                <div className="flex w-full gap-4">
                  <input
                    required
                    pattern="^[a-zA-Z0-9._-]+" // Only letters, numbers, dots, dashes and underscores
                    title="Solo se permiten letras, números, puntos, guiones y guiones bajos"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    type="text"
                    name="correo"
                    id="input-correo"
                    className="border-2 border-gray-300 rounded-sm p-2 focus:outline-gray-400 hover:bg-gray-100"
                    autoComplete="off"
                    placeholder="Ingresa el correo"
                  />
                  <select
                    onChange={(e) => setDominioCorreo(e.target.value)}
                    value={dominioCorreo}
                    className=" w-full h-8 bg-[#F1F2F4] rounded-md pl-2 hover:bg-gray-200 text-sm text-gray-600 font-medium focus:border-0"
                  >
                    <option>@zeb.mx</option>
                    <option>@luuna.mx</option>
                    <option>@mappa.mx</option>
                  </select>
                </div>
                <p className="text-[0.75rem] text-gray-600 mt-1 mb-4">
                  El correo debe de pertenecer a una cuenta de Google
                  zeb.mx. Ingresa solo la parte izquierda (antes del
                  @) del correo a registrar.
                </p>
              </div>
              <div className="flex flex-col">
                <label htmlFor="rol" id="label-rol">
                  Rol
                </label>
                <DropdowRoles
                  onRolSeleccionadoChange={handleRolSeleccionado}
                  rolActual={''}
                />
              </div>
              <div className="flex flex-col mt-4 mb-2">
                <label htmlFor="etiquetas" id="label-etiquetas">
                  Etiquetas
                </label>
                <DropdownEtiquetas
                  onEtiquetasSeleccionadasChange={
                    handleEtiquetasSeleccionadas
                  }
                  etiquetasActuales={[]}
                />
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
                form="RegistrarUsuarioForm"
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

export default ModalRegistrarUsuarios;
