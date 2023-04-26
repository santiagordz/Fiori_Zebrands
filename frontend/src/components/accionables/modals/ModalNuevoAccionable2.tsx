import React, { FC, useState, useEffect, useContext } from 'react';
import { FlagContext } from '../../../contexts';
import { userDataContext } from '../../../contexts';
import CheckCircleIcon from '@atlaskit/icon/glyph/check-circle';
import EditorErrorIcon from '@atlaskit/icon/glyph/editor/error';
import Blanket from '@atlaskit/blanket';
import { motion } from 'framer-motion';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import TextArea from '@atlaskit/textarea';
import Button from '@atlaskit/button';
import axios from 'axios';

const URI = 'http://localhost:8000/accionables';

interface ModalNuevoAccionable {
  setIsModalOpen: (value: boolean) => void;
}

interface Accionable {
  accionable: string;
  fecha: string;
}

const ModalNuevoAccionable: FC<ModalNuevoAccionable> = ({
  setIsModalOpen,
}) => {
  // USUARIOS
  const { user } = useContext(userDataContext);

  // FLAGS
  const { addFlag } = useContext(FlagContext);

  // ACCIONABLES
  const [accionable, setAccionable] = useState<Accionable>({
    accionable: '',
    fecha: '',
  });
  const handleChangeAccionable = (e: any) => {
    verificarLimite(e.target.value);
    setAccionable({ ...accionable, accionable: e.target.value });
  };

  const handleChangeFecha = (e: any) => {
    setAccionable({ ...accionable, fecha: e.target.value });
  };

  // VALIDAR LIMITE DE CARACTERES
  const MAX_CARACTERES = 200;
  const [validPattern, setValidPattern] = useState(false);
  const verificarLimite = (texto: string) => {
    const alfanumerico = /^[a-zA-Z0-9\s]*$/;
    if (!alfanumerico.test(texto)) {
      setValidPattern(false);
    } else if (texto.length > MAX_CARACTERES) {
      setValidPattern(false);
    } else if (texto.length === 0) {
      setValidPattern(false);
    } else {
      setValidPattern(true);
    }
  };

  // FORM
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    var key_jira;
    try {
      setIsModalOpen(false);
      // POST A JIRA
      try {
        const body = {
          id_usuario: user?.id_usuario,
          descripcion: accionable.accionable,
        };
        const responseJira = await axios.post(
          `${URI}/post/${body.id_usuario}/${body.descripcion}`
        );
        key_jira = responseJira.data.key;
      } catch {
        console.error('Error al guardar el accionable en JIRA');
      }
      //POST A DB
      try {
        const body = {
          id_usuario: user?.id_usuario,
          descripcion: accionable.accionable,
          fecha_estimada: accionable.fecha,
          key_jira: key_jira,
        };
        axios.post(URI, body);
      } catch {
        console.error('Error al guardar el accionable en la DB');
      }

      addFlag(
        'Accionable agregado correctamente en el backlog de JIRA',
        CheckCircleIcon,
        'success'
      );
    } catch (err) {
      addFlag(
        'Hubo un problema al agregar el accionable... :(',
        EditorErrorIcon,
        'error'
      );
    }
  };

  return (
    <>
      <Blanket isTinted={true}>
        <motion.div
          animate={{ opacity: 1 }}
          className="flex flex-col w-full h-full items-center justify-center opacity-0"
        >
          <div className="flex flex-col bg-white rounded p-10 gap-8 items-center justify-center drop-shadow-lg min-w-[40vw] max-w-[55vw]">
            {/* TITLE */}
            <div className="flex w-full justify-between items-center">
              <p className="text-textNormal font-semibold text-base">
                Nuevo accionable
              </p>
              <div
                className="flex items-center justify-center cursor-pointer p-1"
                onClick={() => setIsModalOpen(false)}
              >
                <CrossIcon label="cerrar modal" size="small" />
              </div>
            </div>
            {/* BODY */}
            <div className="w-full flex flex-col gap-6 h-fit max-h-[55vh] overflow-y-auto pb-2">
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-xs">Accionable:</p>
                <p className="text-xs text-[#626F86] mt-1">
                  Los accionables que agrergues aquí también de
                  mostrarán en Jira.
                </p>
                <form onSubmit={handleSubmit} id="formAccionable">
                  <TextArea
                    name="accionable"
                    value={accionable.accionable}
                    onChange={handleChangeAccionable}
                    className="text-sm w-full border-2 rounded-sm p-2  hover:bg-gray-100 placeholder:text-xs h-10"
                    autoComplete="off"
                    placeholder="Ingresa tu nuevo accionable*"
                    isRequired
                  />
                  <p className="text-xs text-[#626F86] mt-5">
                    Fecha Estimada de Cierre:
                  </p>
                  <input
                    required
                    type="date"
                    className="w-1/2 bg-slate-50 border mt-1 rounded-sm p-2 text-xs text-gray-500 focus:outline-blue-500 hover:bg-gray-100 placeholder:text-xs h-10"
                    onChange={handleChangeFecha}
                  />
                </form>
              </div>
            </div>
            {/* FOOTER */}
            {/* INVALIDO */}
            {!validPattern && (
              <div>
                <button
                  type="submit"
                  form="formAccionable"
                  className="text-sm"
                >
                  <Button appearance="primary" isDisabled>
                    Agregar Accionable
                  </Button>
                </button>
              </div>
            )}
            {/* NORMAL */}
            {validPattern && (
              <div>
                <button
                  type="submit"
                  form="formAccionable"
                  className="text-sm"
                >
                  <Button appearance="primary">
                    Agregar Accionable
                  </Button>
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </Blanket>
    </>
  );
};

export default ModalNuevoAccionable;
