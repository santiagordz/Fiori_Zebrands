import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './css/modalBorrarUsuarios.css';
import Button from '@atlaskit/button/standard-button';
import InfoIcon from '@atlaskit/icon/glyph/info';

const URI = 'http://localhost:8000/usuarios/updateUserRole/';

interface AsignarResponsableProps {
  show: boolean;
  onClose: () => void;
  usuario: any;
}

const ModalAsignarResponsble: FC<AsignarResponsableProps> = ({
  show,
  onClose,
  usuario,
}) => {
  const handleOut = () => {
    onClose();
  };

  if (!show) {
    return null;
  }

  const handleAsignarResponsable = async (usuario: any) => {
    try {
      const res = axios.post(`${URI}${usuario.id}`, { rol: 2 });
      res.then(() => window.location.reload());
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuitarResponsable = async (usuario: any) => {
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
        <div className="modal z-[1000]">
          <div className="modal-content px-10 w-1/2">
            <div className="modal-header justify-center">
              <div>
                <InfoIcon
                  label="info"
                  primaryColor="#1D7AFC"
                  size="xlarge"
                />
              </div>
              <div className="modal-title justify-center">
                <h4 className="text-2xl text-center">
                  ¿Deseas darle el rol de responsable a
                  <span className="text-jiraBlue">
                    {` ${usuario.nombre || usuario.correo}`}
                  </span>
                  ?
                </h4>
              </div>
              <div className="modal-subtitle text-xl mt-4 text-center">
                {`${
                  usuario.nombre || usuario.correo
                } podrá iniciar y finalizar retrospectivas`}
              </div>
            </div>

            <div className="modal-footer justify-center">
              <div className="flex gap-10 mt-12">
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
        <div className="modal z-[1000]">
          <div className="modal-content px-10 w-1/2">
            <div className="modal-header justify-center">
              <div>
                <InfoIcon
                  label="info"
                  primaryColor="#D97008"
                  size="xlarge"
                />
              </div>
              <div className="modal-title justify-center">
                <h4 className="text-2xl text-center">
                  ¿Deseas eliminar el rol de responsable de
                  <span className="text-jiraBlue">
                    {` ${usuario.nombre || usuario.correo}`}
                  </span>
                  ?
                </h4>
              </div>
              <div className="modal-subtitle text-xl mt-4 text-center">
                {`${
                  usuario.nombre || usuario.correo
                } ya no podrá iniciar y finalizar retrospectivas`}
              </div>
            </div>

            <div className="modal-footer justify-center">
              <div className="flex gap-10 mt-12">
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

export default ModalAsignarResponsble;
