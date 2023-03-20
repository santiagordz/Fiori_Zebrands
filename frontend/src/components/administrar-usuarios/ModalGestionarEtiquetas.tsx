import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './css/modalGestionarEtiquetas.css';

import CrossIcon from '@atlaskit/icon/glyph/cross';
import Tag from '@atlaskit/tag';
import TagGroup from '@atlaskit/tag-group';
import Button from '@atlaskit/button/standard-button';
import Form, { Field, FormFooter, HelperMessage } from '@atlaskit/form';

import Textfield from '@atlaskit/textfield';
import TextField from '@atlaskit/textfield/dist/types/text-field';

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
              <Tag text="Etiqueta 1" />
              <Tag text="Etiqueta 1" />
            </TagGroup>
            <br></br>
            <p className="font-bold text-left mb-4">
              Crear nueva etiqueta
            </p>
            <form>
              <label htmlFor='EtiquetaNombre' id="Etiqueta-nombre" className="text-[0.75rem] text-gray-600 mt-1 mb-4">Nombre</label>
              <Textfield name='Etiqueta-nombre' id="Etiqueta-nombre " value="" placeholder="Ingrese un nombre para la etiqueta" />
              <br></br>
              <label htmlFor='EtiquetaColor' id="Etiqueta-color" className="text-[0.75rem] text-gray-600 mt-1 mb-4">Color</label>
              <select name="Etiqueta-color" id="Etiqueta-color" className="w-full border border-gray-300 rounded-sm px-2 py-1">
                <option value="blue">Azul</option>
                <option value="red">Rojo</option>
                <option value="green">Verde</option>
                <option value="yellow">Amarillo</option>
                <option value="purple">Morado</option>
                <option value="pink">Rosa</option>
                <option value="gray">Gris</option>
              </select>

            </form>
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
