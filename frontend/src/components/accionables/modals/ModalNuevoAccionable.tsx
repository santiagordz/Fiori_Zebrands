import Blanket from '@atlaskit/blanket';
import Button from '@atlaskit/button';
import CheckCircleIcon from '@atlaskit/icon/glyph/check-circle';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import EditorErrorIcon from '@atlaskit/icon/glyph/editor/error';
import TextArea from '@atlaskit/textarea';
import { HelperMessage, ErrorMessage } from '@atlaskit/form';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FC, useContext, useState } from 'react';
import { FlagContext, userDataContext } from '../../../contexts';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/accionables`;

interface ModalNuevoAccionable {
  getAccionables: () => void;
  setIsModalOpen: (value: boolean) => void;
}

interface Accionable {
  accionable: string;
  fecha: string;
}

const labelStyle =
  "after:content-['*'] after:text-[#ae2a19] text-xs font-semibold text-label";
const MAX_CARACTERES = 200;

const ModalNuevoAccionable: FC<ModalNuevoAccionable> = ({
  getAccionables,
  setIsModalOpen,
}) => {
  const { user } = useContext(userDataContext);
  const { addFlag } = useContext(FlagContext);
  const [accionable, setAccionable] = useState<Accionable>({
    accionable: '',
    fecha: '',
  });
  const [validPattern, setValidPattern] = useState<boolean>(false);
  const [showMaxDescriptionWarning, setShowMaxDescriptionWarning] =
    useState<boolean>(false);
  const [isFechaFilled, setIsFechaFilled] = useState<boolean>(false);

  const handleChangeAccionable = (e: any) => {
    verificarLimite(e.target.value);
    setAccionable({ ...accionable, accionable: e.target.value });
  };

  const handleChangeFecha = (e: any) => {
    if (e.target.value === '') {
      setIsFechaFilled(false);
    } else {
      setIsFechaFilled(true);
      setAccionable({ ...accionable, fecha: e.target.value });
    }
  };
  const verificarLimite = (texto: string) => {
    const alfanumerico = /^[a-zA-Z0-9\s]*$/;
    if (!alfanumerico.test(texto)) {
      setValidPattern(false);
    }
    if (texto.length > MAX_CARACTERES) {
      setShowMaxDescriptionWarning(true);
    }
    if (texto.length === 0) {
      setShowMaxDescriptionWarning(false);
      setValidPattern(false);
    }

    if (
      texto.length <= MAX_CARACTERES &&
      alfanumerico.test(texto) &&
      texto.length > 0
    ) {
      setShowMaxDescriptionWarning(false);
      setValidPattern(true);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let key_jira;
    try {
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
        console.error('Error al guardar el accionable en Jira');
      }
      try {
        const body = {
          id_usuario: user?.id_usuario,
          descripcion: accionable.accionable,
          fecha_estimada: accionable.fecha,
          key_jira: key_jira,
        };
        axios.post(URI, body);
        getAccionables();
      } catch {
        console.error('Error al guardar el accionable en la DB');
      }

      setIsModalOpen(false);

      addFlag(
        'Accionable agregado correctamente en el backlog de Jira',
        CheckCircleIcon,
        'success'
      );
    } catch (err) {
      addFlag(
        'Hubo un problema al agregar el accionable. Por favor, intenta nuevamente.',
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
            <div className="flex w-full justify-between items-center">
              <h2 className="text-textNormal font-semibold text-base">
                Registrar nuevo accionable
              </h2>
              <div
                className="flex items-center justify-center cursor-pointer p-1"
                onClick={() => setIsModalOpen(false)}
              >
                <CrossIcon label="cerrar modal" size="small" />
              </div>
            </div>
            <div className="w-full flex flex-col gap-6 h-fit max-h-[55vh] overflow-y-auto pb-2">
              <div className="flex flex-col gap-2">
                <p className={labelStyle}>Accionable</p>
                <p className="text-xs text-[#626F86]">
                  Los accionables que registres aquí también se
                  mostrarán en Jira. Solo se permiten caracteres
                  alfanuméricos.
                </p>
                <form onSubmit={handleSubmit} id="formAccionable">
                  <TextArea
                    maxHeight="1rem"
                    name="accionable"
                    value={accionable.accionable}
                    onChange={handleChangeAccionable}
                    className="text-sm w-full border-2 rounded-sm p-2  hover:bg-gray-100 placeholder:text-xs h-10"
                    autoComplete="off"
                    placeholder="Ingresa tu nuevo accionable"
                    isRequired
                  />
                  <div className="w-full flex flex-col justify-end items-end">
                    <HelperMessage>
                      Caracteres: {accionable.accionable.length} / 200
                    </HelperMessage>
                    {showMaxDescriptionWarning && (
                      <ErrorMessage>
                        Tu respuesta excede el número de caracteres
                        permitidos
                      </ErrorMessage>
                    )}
                  </div>
                  <p className={`${labelStyle} mt-7`}>
                    Fecha límite de cumplimiento
                  </p>
                  <input
                    required
                    type="date"
                    className="w-1/2 bg-slate-50 border mt-1 rounded-sm p-2 text-xs text-gray-500 focus:outline-blue-500 hover:bg-gray-100 placeholder:text-xs h-10"
                    onChange={handleChangeFecha}
                  />
                  <div className="flex flex-col gap-2 w-full items-center justify-center mt-4">
                    {!validPattern && (
                      <p className="text-xs text-information font-medium">
                        Escribe un accionable válido para continuar.
                      </p>
                    )}
                    {!isFechaFilled && (
                      <p className="text-xs text-information font-medium">
                        Elige una fecha de cumplimiento para
                        continuar.
                      </p>
                    )}
                    <Button
                      type="submit"
                      appearance="primary"
                      isDisabled={
                        !validPattern || showMaxDescriptionWarning
                      }
                    >
                      Agregar Accionable
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </Blanket>
    </>
  );
};

export default ModalNuevoAccionable;
