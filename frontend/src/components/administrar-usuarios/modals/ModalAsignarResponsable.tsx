import axios from 'axios';
import { FC, useEffect } from 'react';
import Button from '@atlaskit/button/standard-button';
import InfoIcon from '@atlaskit/icon/glyph/info';
import { UserType } from '../../../contexts/UserContext';

const URI = 'http://localhost:8000/usuarios/updateUserRole/';

interface Usuariotype extends UserType {
  id: number;
  rol: number;
}
interface AsignarResponsableProps {
  show: boolean;
  onClose: () => void;
  usuario: Usuariotype;
}

const ModalAsignarResponsable: FC<AsignarResponsableProps> = ({
  show,
  onClose,
  usuario,
}) => {
  const handleOut = () => {
    onClose();
  };

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
      res.then(() => window.location.reload());
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuitarResponsable = async (usuario: Usuariotype) => {
    try {
      const res = axios.post(`${URI}${usuario.id}`, { rol: 3 });
      res.then(() => window.location.reload());
    } catch (error) {
      console.log(error);
    }
  };

  if (usuario.rol === 3) {
    return (
      <>
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
                  <span className="text-jiraBlue">
                    {` ${nombre}`}
                  </span>
                  ?
                </h4>
              </div>
              <div className="w-full text-sm text-[#44546f] mb-5 text-center">
                {`${nombre} podrá iniciar y finalizar retrospectivas`}
              </div>
            </div>

            <div className="w-full flex items-center justify-center">
              <div className="flex gap-10 mt-2">
                <Button
                  className="rounded-none hover:text-blue-500 text-sm"
                  onClick={handleOut}
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
      </>
    );
  } else {
    return (
      <>
        <div className="modal z-[1000] bg-blueRGBA">
          <div className="modal-content-delete px-16 w-fit">
            <div className="modal-header justify-center">
              <div>
                <InfoIcon
                  label="info"
                  primaryColor="#D97008"
                  size="xlarge"
                />
              </div>
              <div className="modal-title justify-center">
                <h4 className="text-lg text-center">
                  ¿Deseas eliminar el rol de responsable de
                  <span className="text-jiraBlue">
                    {` ${nombre}`}
                  </span>
                  ?
                </h4>
              </div>
              <div className="modal-subtitle text-sm mt-1 text-center">
                {`${nombre} ya no podrá iniciar y finalizar retrospectivas`}
              </div>
            </div>

            <div className="w-full flex items-center justify-center">
              <div className="flex gap-10 mt-2">
                <Button
                  className="rounded-none hover:text-blue-500 text-sm"
                  onClick={handleOut}
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
      </>
    );
  }
};

export default ModalAsignarResponsable;
