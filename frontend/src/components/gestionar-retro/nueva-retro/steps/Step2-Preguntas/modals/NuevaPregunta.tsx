import Blanket from '@atlaskit/blanket';
import Button from '@atlaskit/button';
import { Checkbox } from '@atlaskit/checkbox';
import CheckCircleIcon from '@atlaskit/icon/glyph/check-circle';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import EditorErrorIcon from '@atlaskit/icon/glyph/editor/error';
import axios from 'axios';
import { motion } from 'framer-motion';
import { customAlphabet } from 'nanoid';
import { FC, useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import { FlagContext } from '../../../../../../contexts';
import {
  newRetroContext,
  type PreguntaType,
} from '../../../local-contexts';
import { tipos } from '../tiposPregunta';

const URI = `/api/preguntas`;

interface NuevaPreguntaProps {
  setIsNewQuestionOpen: (value: boolean) => void;
}

const labelStyle =
  "after:content-['*'] after:text-[#ae2a19] text-xs font-semibold text-label";

const NuevaPregunta: FC<NuevaPreguntaProps> = ({
  setIsNewQuestionOpen,
}) => {
  const { addFlag } = useContext(FlagContext);
  const nanoid = customAlphabet('1234567890', 5);
  const { setNewRetro, newRetro } = useContext(newRetroContext);
  const [newPregunta, setNewPregunta] = useState<PreguntaType>({
    id: 0,
    pregunta: '',
    id_tipo_pregunta: 0,
    predeterminada: false,
    opciones: null,
  });
  const [opciones, setOpciones] = useState(['']);
  const [isErrorPregunta, setIsErrorPregunta] =
    useState<boolean>(false);
  const [isErrorTipoPregunta, setIsErrorTipoPregunta] =
    useState<boolean>(false);
  const [isErrorOpciones, setIsErrorOpciones] =
    useState<boolean>(false);

  useEffect(() => {
    setNewPregunta({
      ...newPregunta,
      id: Number(nanoid()),
    });
    document.body.classList.add('modal-open');

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  const handleOpcionChange = (index: number, value: string) => {
    setIsErrorOpciones(false);
    const newOpciones = [...opciones];
    newOpciones[index] = value;
    setOpciones(newOpciones);
  };

  const addOpcion = () => {
    setOpciones([...opciones, '']);
  };

  const removeOpcion = (index: number) => {
    const newOpciones = [...opciones];
    newOpciones.splice(index, 1);
    setOpciones(newOpciones);
  };

  const helperMessage = (id_tipo_pregunta: number) => {
    switch (id_tipo_pregunta) {
      case 1:
        return 'Pregunta de respuesta abierta, el usuario puede escribir su respuesta en un máximo de 500 caracteres.';
      case 2:
        return 'Pregunta de respuesta abierta, el usuario puede escribir lo que quiera en un máximo de 100 caracteres.';
      case 3:
        return 'Pregunta de respuesta cerrada, el usuario puede seleccionar una opción de una lista.';
      case 4:
        return 'Pregunta de respuesta cerrada, el usuario puede seleccionar un número entre 1 y 5.';
      default:
        return '';
    }
  };

  const newPreguntaDb = async (newPreguntaData: PreguntaType) => {
    try {
      const response = await axios.post(
        `${URI}/new`,
        newPreguntaData
      );
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        addFlag(
          '¡Oh no! Hubo un error al crear la pregunta. Por favor, inténtalo de nuevo más tarde o contacta soporte.',
          EditorErrorIcon,
          'error',
          error.toString()
        );
      } else {
        console.log(error);
        addFlag(
          '¡Oh no! Hubo un error al crear la pregunta. Por favor, inténtalo de nuevo más tarde o contacta soporte.',
          EditorErrorIcon,
          'error',
          'Error desconocido'
        );
      }
    }
  };

  const handleNewPregunta = async () => {
    let error = false;
    const options = opciones.filter(
      (opcion) => opcion.trim().length > 0
    );

    if (newPregunta.pregunta.trim() === '') {
      setIsErrorPregunta(true);
      error = true;
    }

    if (newPregunta.id_tipo_pregunta === 0) {
      setIsErrorTipoPregunta(true);
      error = true;
    }

    if (newPregunta.id_tipo_pregunta === 3 && options.length === 0) {
      setIsErrorOpciones(true);
      error = true;
    }

    if (!error) {
      const optionsTrimmed = options.map((option) => option.trim());
      const updatedNewPregunta = { ...newPregunta };

      if (newPregunta.id_tipo_pregunta === 3) {
        updatedNewPregunta.opciones = optionsTrimmed.join(',');
      } else {
        updatedNewPregunta.opciones = null;
      }

      setNewPregunta(updatedNewPregunta);

      const savedPregunta = await newPreguntaDb(updatedNewPregunta);

      if (savedPregunta) {
        if (newPregunta.predeterminada) {
          setNewRetro({
            ...newRetro,
            predeterminadas: [
              ...(newRetro?.predeterminadas || []),
              { ...updatedNewPregunta },
            ],
          });
        } else {
          setNewRetro({
            ...newRetro,
            otras: [
              ...(newRetro?.otras || []),
              { ...updatedNewPregunta },
            ],
          });
        }
        setIsNewQuestionOpen(false);
        addFlag(
          '¡Excelente! Tu pregunta ha sido creada satisfactoriamente.',
          CheckCircleIcon,
          'success'
        );
      } else {
        console.error(
          'Error al guardar la pregunta en la base de datos, intenta de nuevo más tarde.'
        );
      }
    }
  };

  const selectStyles = {
    control: (base: any, state: any) => ({
      ...base,
      borderColor: isErrorTipoPregunta ? 'red' : '#dbdbdb',
      borderRadius: '0.125rem',
      borderWidth: 2,
    }),
    placeholder: (base: any) => ({
      ...base,
      color: '#979caa',
    }),
    menuPortal: (base: any) => ({ ...base, zIndex: 9999 }),
  };

  return (
    <Blanket isTinted>
      <motion.div
        animate={{ opacity: 1 }}
        className="flex flex-col w-full h-full items-center justify-center opacity-0"
      >
        <div className="flex flex-col bg-white rounded p-10 gap-8 items-center justify-center drop-shadow-lg min-w-[40vw] max-w-[55vw]">
          <div className="flex w-full justify-between items-center">
            <p className="text-textNormal font-semibold text-base">
              Nueva pregunta
            </p>
            <div
              className="flex items-center justify-center cursor-pointer p-1"
              onClick={() => setIsNewQuestionOpen(false)}
            >
              <CrossIcon label="cerrar modal" size="small" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-6 h-fit max-h-[55vh] px-3 overflow-y-auto pb-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="pregunta" className={labelStyle}>
                Pregunta
              </label>
              <input
                value={newPregunta.pregunta}
                onChange={(e) => {
                  setIsErrorPregunta(false);
                  setNewPregunta({
                    ...newPregunta,
                    pregunta: e.target.value,
                  });
                }}
                type="text"
                name="pregunta"
                className={`${
                  isErrorPregunta ? 'border-[red]' : 'border-gray'
                } text-sm w-full border-2 rounded-sm p-2 focus:border-blue-500 hover:bg-gray-100 placeholder:text-xs h-10`}
                autoComplete="off"
                placeholder="Ingresa el título de la pregunta"
              />
              {isErrorPregunta && (
                <p className="text-red-500 text-xs">
                  Es necesario ingresar una pregunta para continuar
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="tipo" className={labelStyle}>
                Tipo de pregunta
              </label>
              <Select
                className="text-xs"
                placeholder="Selecciona un tipo de pregunta"
                menuPortalTarget={document.body}
                styles={selectStyles}
                value={tipos.find(
                  (t) => t.value === newPregunta.id_tipo_pregunta
                )}
                options={tipos}
                onChange={(e) => {
                  setIsErrorTipoPregunta(false);
                  setIsErrorOpciones(false);
                  setNewPregunta({
                    ...newPregunta,
                    id_tipo_pregunta: e?.value ?? 0,
                  });
                }}
                getOptionLabel={(e) =>
                  (
                    <div className="flex items-center gap-2 text-sm text-textNormal">
                      {
                        <e.icon
                          className="stroke-slate-500"
                          width={16}
                          height={16}
                        />
                      }
                      <span>{e.label}</span>
                    </div>
                  ) as unknown as string
                }
              />
              {isErrorTipoPregunta && (
                <p className="text-red-500 text-xs">
                  Es necesario seleccionar un tipo de pregunta para
                  continuar
                </p>
              )}
              <p
                className={`text-xs mt-1 text-discovery ${
                  newPregunta.id_tipo_pregunta !== 0 ? '' : 'hidden'
                }`}
              >
                {helperMessage(newPregunta.id_tipo_pregunta)}
              </p>
            </div>
            {newPregunta.id_tipo_pregunta === 3 && (
              <div className="flex flex-col gap-2">
                <label htmlFor="opciones" className={labelStyle}>
                  Opciones
                </label>
                {opciones.map((opcion, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <input
                      value={opcion}
                      onChange={(e) =>
                        handleOpcionChange(index, e.target.value)
                      }
                      type="text"
                      name={`opcion-${index}`}
                      className={`${
                        isErrorOpciones
                          ? 'border-red-300'
                          : 'border-gray'
                      } text-sm w-full border-2 border-gray rounded-sm p-2 focus:outline-gray-400 hover:bg-gray-100 placeholder:text-xs h-10`}
                      autoComplete="off"
                      placeholder={`Opción ${index + 1}`}
                    />
                    {opciones.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeOpcion(index)}
                        className="text-slate-400 text-xs hover:text-red-500"
                      >
                        Eliminar
                      </button>
                    )}
                  </div>
                ))}
                {isErrorOpciones && (
                  <p className="text-red-500 text-xs w-11/12">
                    Una pregunta de lista desplegable no puede ser
                    enviada sin opciones o con solo opciones en blanco
                  </p>
                )}
                <button
                  type="button"
                  onClick={addOpcion}
                  className="text-blue-500 mt-2 text-sm"
                >
                  Agregar opción
                </button>
              </div>
            )}
          </div>

          <span className="flex items-center w-full">
            <Checkbox
              isChecked={newPregunta.predeterminada}
              onClick={() =>
                setNewPregunta({
                  ...newPregunta,
                  predeterminada: !newPregunta.predeterminada,
                })
              }
            />
            <p className="text-xs">
              Agregar la pregunta a la selección para esta
              retrospectiva y hacer predeterminada
            </p>
          </span>

          <div
            className="flex items-center justify-end
            w-full gap-5 mt-2"
          >
            <Button
              appearance="subtle"
              onClick={() => setIsNewQuestionOpen(false)}
            >
              Cancelar
            </Button>
            <Button appearance="primary" onClick={handleNewPregunta}>
              Agregar pregunta
            </Button>
          </div>
        </div>
      </motion.div>
    </Blanket>
  );
};

export default NuevaPregunta;
