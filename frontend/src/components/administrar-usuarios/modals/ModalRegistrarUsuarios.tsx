import axios from 'axios';
import { FC, FormEvent, useEffect, useState } from 'react';
import '../css/modalRegistrarUsuarios.css';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import DropdownEtiquetas from '../DropdownEtiquetas';
import DropdowRoles from '../DropdownRoles';
import DropdownUsuariosJira from '../DropdownUsuariosJira';
import { Etiqueta } from '../UsersTable';
import emailjs from '@emailjs/browser';

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
  const [otroDominio, setOtroDominio] = useState(false);

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
    try {
      emailjs.send(
        'service_yhwmvyx',
        'template_6dsa5hr',
        {
          to_email: `${correo}${dominioCorreo}`,
        },
        'huMoBlbtLZGwi0vSZ'
      );
    } catch (error) {
      console.log(
        'Hubo un error al enviar el correo al usuario',
        error
      );
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

  const handleDominioChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target.value === 'otro') {
      setOtroDominio(true);
      setDominioCorreo('');
    } else {
      setOtroDominio(false);
      setDominioCorreo(e.target.value);
    }
  };

  const handleRegresarDropdown = () => {
    setOtroDominio(false);
    setDominioCorreo('@zeb.mx');
  };

  useEffect(() => {
    axios.get('http://localhost:8000/usuarios_jira/fetch');
  }, []);

  if (!show) {
    return null;
  }
  return (
    <>
      <div className="z-[1000] bg-blueRGBA fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center">
        <div className="p-10 bg-white rounded-xl flex flex-col">
          <div className="w-full flex flex-col items-center">
            <div className="w-full text-xl font-bold mb-1 flex items-center justify-between">
              <h4>Registrar usuario</h4>
              <button className="flex" onClick={handleClose}>
                <CrossIcon label="Cross Icon" />
              </button>
            </div>
            <div className="w-full text-sm text-[#44546f] mb-5">
              Registra un nuevo usuario en el sistema, una invitación
              a iniciar sesión será enviada al correo ingresado.
            </div>
          </div>
          <div className="w-full flex flex-col justify center">
            <p className="font-bold text-left mb-4">
              Detalles del nuevo usuario
            </p>
            <form
              onSubmit={handleSubmit}
              className="w-full"
              id="RegistrarUsuarioForm"
            >
              <div className="flex flex-col mb-5">
                <label id="label-correo">Usuario de Jira</label>
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
                    pattern="^[a-zA-Z0-9._-]+"
                    title="Solo se permiten letras, números, puntos, guiones y guiones bajos"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    type="text"
                    name="correo"
                    id="input-correo"
                    className="border-2 border-gray rounded-sm p-2 focus:outline-gray-400 hover:bg-gray-100"
                    autoComplete="off"
                    placeholder="Ingresa el correo"
                  />
                  {otroDominio ? (
                    <>
                      <input
                        value={dominioCorreo}
                        onChange={(e) =>
                          setDominioCorreo(e.target.value)
                        }
                        type="text"
                        name="dominioCorreo"
                        id="input-dominio-correo"
                        className="border-2 border-gray rounded-sm p-2 focus:outline-gray-400 hover:bg-gray-100"
                        autoComplete="off"
                        placeholder="Ingresa el dominio"
                      />
                      <button
                        type="button"
                        onClick={handleRegresarDropdown}
                        className="w-fit whitespace-nowrap text-xs text-blue-500"
                      >
                        Volver a elegir dominio
                      </button>
                    </>
                  ) : (
                    <select
                      onChange={handleDominioChange}
                      value={dominioCorreo}
                      className=" w-full h-8 bg-[#F1F2F4] rounded-md pl-2 hover:bg-gray-200 text-sm text-gray-600 font-medium focus:border-0"
                    >
                      <option>@zeb.mx</option>
                      <option>@luuna.mx</option>
                      <option>@mappa.mx</option>
                      <option value="otro">Otro</option>
                    </select>
                  )}
                </div>
              </div>
              <div className="flex flex-col mt-4">
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
          <div className="w-full flex items-center justify-end ">
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
