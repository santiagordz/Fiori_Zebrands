import Button from '@atlaskit/button/standard-button';
import InfoIcon from '@atlaskit/icon/glyph/info';
import axios from 'axios';
import { FC, useContext, useEffect } from 'react';
import { getUsersContext } from '../local-contexts';
import { FlagContext } from '../../../contexts';
import EditorErrorIcon from '@atlaskit/icon/glyph/editor/error';

const URI = 'http://localhost:8000/usuarios/updateUserRole/';

interface Usuariotype {
  id: number;
  rol: number;
  nombre: string;
  correo: string;
}
interface AsignarResponsableProps {
  show: boolean;
  onClose: () => void;
  usuario: Usuariotype;
  setRolActual: (rol: number) => void;
}

const ModalAsignarResponsable: FC<AsignarResponsableProps> = ({
  show,
  onClose,
  usuario,
  setRolActual,
}) => {
  const { addFlag } = useContext(FlagContext);
  const { getUsers } = useContext(getUsersContext);
  const nombre =
    (usuario?.nombre ? usuario?.nombre : usuario?.correo) ||
    'Usuario';

  useEffect(() => {
    show && document.body.classList.add('modal-open');

    return () => {
      show && document.body.classList.remove('modal-open');
    };
  }, []);

  if (!show) {
    return null;
  }

  const handleAsignarResponsable = async (usuario: Usuariotype) => {
    try {
      const res = axios.post(`${URI}${usuario.id}`, { rol: 2 });
      res.then(() => {
        getUsers();
        setRolActual(2);
        addFlag(
          `¡Excelente! ${nombre} ahora tiene el rol de responsable,`,
          InfoIcon,
          'info'
        );
        onClose();
      });
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        addFlag(
          '¡Oh no! Hubo un error al tratar de asignar el rol. Por favor, inténtalo de nuevo más tarde o contacta soporte.',
          EditorErrorIcon,
          'error',
          error.toString()
        );
      } else {
        addFlag(
          '¡Oh no! Hubo un error al tratar de asignar el rol. Por favor, inténtalo de nuevo más tarde o contacta soporte.',
          EditorErrorIcon,
          'error',
          'Error desconocido'
        );
      }
    }
  };

  const handleQuitarResponsable = async (usuario: Usuariotype) => {
    try {
      const res = axios.post(`${URI}${usuario.id}`, { rol: 3 });
      res.then(() => {
        getUsers();
        setRolActual(3);
        addFlag(
          `¡Listo! ${nombre} ya no tiene el rol de responsable.`,
          InfoIcon,
          'info'
        );
        onClose();
      });
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        addFlag(
          '¡Oh no! Hubo un error al tratar de asignar el rol. Por favor, inténtalo de nuevo más tarde o contacta soporte.',
          EditorErrorIcon,
          'error',
          error.toString()
        );
      } else {
        addFlag(
          '¡Oh no! Hubo un error al tratar de asignar el rol. Por favor, inténtalo de nuevo más tarde o contacta soporte.',
          EditorErrorIcon,
          'error',
          'Error desconocido'
        );
      }
    }
  };

  if (usuario.rol === 3) {
    return (
      <div className="z-[1000] bg-blueRGBA fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center">
        <div className="p-10 bg-white rounded-xl flex flex-col">
          <div className="w-full flex flex-col items-center">
            <div>
              <InfoIcon
                label="info"
                primaryColor="#1D7AFC"
                size="xlarge"
              />
            </div>
            <div className="w-full text-xl font-bold mb-1 flex items-center justify-between">
              <h4 className="text-lg text-center">
                ¿Deseas darle el rol de responsable a
                <span className="text-jiraBlue">{` ${nombre}`}</span>?
              </h4>
            </div>
            <div className="w-full text-xs text-[#44546f] mb-5 text-center">
              {`${nombre} podrá iniciar y finalizar retrospectivas`}
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <div className="flex gap-10 mt-2">
              <Button
                className="rounded-none hover:text-blue-500 text-sm"
                onClick={() => onClose()}
              >
                Cancelar
              </Button>
              <Button
                appearance="primary"
                className="rounded-sm bg-jiraBlue text-white px-2 py-1 hover:bg-blue-500"
                onClick={() => handleAsignarResponsable(usuario)}
              >
                Continuar
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="z-[1000] bg-blueRGBA fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center">
        <div className="p-10 bg-white rounded-xl flex flex-col">
          <div className="w-full flex flex-col items-center">
            <div>
              <InfoIcon
                label="info"
                primaryColor="#D97008"
                size="xlarge"
              />
            </div>
            <div className="w-full font-bold mb-1 flex items-center justify-between">
              <h4 className="text-lg text-center">
                ¿Deseas eliminar el rol de responsable de
                <span className="text-jiraBlue">{` ${nombre}`}</span>?
              </h4>
            </div>
            <div className="w-full text-xs text-[#44546f] mb-5 text-center">
              {`${nombre} ya no podrá iniciar y finalizar retrospectivas`}
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <div className="flex gap-10 mt-2">
              <Button
                className="rounded-none hover:text-blue-500 text-sm"
                onClick={() => onClose()}
              >
                Cancelar
              </Button>
              <Button
                appearance="warning"
                className="rounded-sm bg-jiraBlue text-white px-2 py-1 hover:bg-blue-500"
                onClick={() => handleQuitarResponsable(usuario)}
              >
                Continuar
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ModalAsignarResponsable;
