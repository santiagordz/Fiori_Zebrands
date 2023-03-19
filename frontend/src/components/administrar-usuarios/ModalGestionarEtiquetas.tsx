import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './css/modalGestionarEtiquetas.css';

import CrossIcon from '@atlaskit/icon/glyph/cross';
import Tag from '@atlaskit/tag';
import TagGroup from '@atlaskit/tag-group/dist/types/TagGroup';

interface GestionarEtiquetasProps {
  show: boolean;
  onClose: () => void;
}

const ModalGestionarEtiquetas: FC<GestionarEtiquetasProps> = ({
  show,
  onClose,
}) => {
  const [correo, setCorreo] = useState('');
  const [rol, setRol] = useState('');

  const handleOut = (e: any) => {
    e.preventDefault();
    show = false;
  };

  if (!show) {
    return null;
  }
  return (
    <>
      <div className="modal">
        <div className="modal-content px-10">
          <div className="modal-header">
            <div className="modal-title">
              <h4>Gestionar Etiquetas</h4>
              <button className="flex" onClick={onClose}>
                <CrossIcon label="Cross Icon" />
              </button>
            </div>
            <div className="modal-subtitle">
              Edita las etiquetas actuales o crea una nueva.
            </div>
          </div>
          <div className="modal-body">
            <p className="font-bold text-left mb-4">
              Etiquetas Disponibles
            </p>
            <TagGroup>
              <Tag text="Etiqueta 1" />
            </TagGroup>
          </div>
          <div className="modal-footer">
            <div className="flex gap-10 mt-12">
              <button
                className="rounded-none hover:text-blue-500 text-sm"
                onClick={onClose}
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

export default ModalGestionarEtiquetas;
