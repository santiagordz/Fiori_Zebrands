import Blanket from '@atlaskit/blanket';
import Button from '@atlaskit/button';
import { Checkbox } from '@atlaskit/checkbox';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import WarningIcon from '@atlaskit/icon/glyph/warning';
import ErrorIcon from '@atlaskit/icon/glyph/error';
import { motion } from 'framer-motion';
import { customAlphabet } from 'nanoid';
import { FC, useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import {
  newRetroContext,
  type PreguntaType,
} from '../../../local-contexts';
import axios from 'axios';
import { type AppearanceTypes } from '@atlaskit/flag';
import CheckCircleIcon from '@atlaskit/icon/glyph/check-circle';
import InfoIcon from '@atlaskit/icon/glyph/info';
import { tipos } from '../tiposPregunta';

const URI = 'http://localhost:8000/preguntas';

const labelStyle =
  "after:content-['*'] after:text-[#ae2a19] text-xs font-semibold text-label";

interface EditarPreguntaProps {
  id_pregunta: number;
  id_tipo_pregunta: number;
  predeterminada: boolean;
  setIsEditModalOpen: (isOpen: boolean) => void;
  addFlag: (
    title: string,
    icon: React.ReactNode,
    appearance: AppearanceTypes,
    description?: string
  ) => void;
}

const EditarPregunta: FC<EditarPreguntaProps> = ({
  id_pregunta,
  id_tipo_pregunta,
  setIsEditModalOpen,
  predeterminada,
  addFlag,
}) => {
  const { setNewRetro, newRetro } = useContext(newRetroContext);
  const [editPregunta, setEditPregunta] = useState<PreguntaType>({
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

  const questionCopy = () => {
    let pregunta: PreguntaType | null = null;
    if (predeterminada) {
      pregunta = {
        ...newRetro?.predeterminadas?.find(
          (pregunta: PreguntaType) => pregunta.id === id_pregunta
        )!,
      };
    } else {
      pregunta = {
        ...newRetro?.otras?.find(
          (pregunta: PreguntaType) => pregunta.id === id_pregunta
        )!,
      };
    }

    if (id_tipo_pregunta === 3 && pregunta) {
      const optionsArray = pregunta!.opciones?.split(',');
      optionsArray && setOpciones(optionsArray!);
    }

    pregunta ? setEditPregunta(pregunta) : handleErrorPregunta();
  };

  const handleErrorPregunta = () => {
    addFlag(
      'Hubo un error al recuperar la pregunta, intenta de nuevo más tarde',
      <ErrorIcon label="error" secondaryColor="red" />,
      'error'
    );
    setIsEditModalOpen(false);
  };

  useEffect(() => {
    questionCopy();

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

  const editPreguntaDb = async (editPreguntaData: PreguntaType) => {
    try {
      const response = await axios.post(
        `${URI}/update`,
        editPreguntaData
      );
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        addFlag(
          'Hubo un error al actualizar la pregunta. Inténtalo de nuevo más tarde o contacta soporte.',
          <InfoIcon label="pregunta eliminada" />,
          'warning',
          error.toString()
        );
      } else {
        console.log(error);
        addFlag(
          'Hubo un error al actualizar la pregunta. Inténtalo de nuevo más tarde o contacta soporte.',
          <InfoIcon label="pregunta eliminada" />,
          'warning',
          'Error desconocido'
        );
      }
    }
  };

  const handleEditContext = (updatedEditPregunta: PreguntaType) => {
    const updatePredeterminadas = (
      updatedEditPregunta: PreguntaType
    ) => {
      const newPredeterminadas = newRetro?.predeterminadas?.map(
        (pregunta: PreguntaType) => {
          if (pregunta.id === updatedEditPregunta.id) {
            return updatedEditPregunta;
          } else {
            return pregunta;
          }
        }
      );
      setNewRetro({
        ...newRetro!,
        predeterminadas: newPredeterminadas,
      });
    };

    const deletePredeterminadas = (
      updatedEditPregunta: PreguntaType
    ) => {
      const newPredeterminadas = newRetro?.predeterminadas?.filter(
        (pregunta: PreguntaType) =>
          pregunta.id !== updatedEditPregunta.id
      );
      const newOtras = newRetro?.otras?.concat(updatedEditPregunta);
      setNewRetro({
        ...newRetro!,
        predeterminadas: newPredeterminadas,
        otras: newOtras,
      });
    };

    const addPredeterminadas = (
      updatedEditPregunta: PreguntaType
    ) => {
      const newPredeterminadas = newRetro?.predeterminadas?.concat(
        updatedEditPregunta
      );
      const newOtras = newRetro?.otras?.filter(
        (pregunta: PreguntaType) =>
          pregunta.id !== updatedEditPregunta.id
      );
      setNewRetro({
        ...newRetro!,
        predeterminadas: newPredeterminadas,
        otras: newOtras,
      });
    };

    const updateOtras = (updatedEditPregunta: PreguntaType) => {
      const newOtras = newRetro?.otras?.map(
        (pregunta: PreguntaType) => {
          if (pregunta.id === updatedEditPregunta.id) {
            return updatedEditPregunta;
          } else {
            return pregunta;
          }
        }
      );
      setNewRetro({
        ...newRetro!,
        otras: newOtras,
      });
    };

    if (predeterminada) {
      if (updatedEditPregunta.predeterminada) {
        updatePredeterminadas(updatedEditPregunta);
      } else {
        deletePredeterminadas(updatedEditPregunta);
      }
    } else {
      if (updatedEditPregunta.predeterminada) {
        addPredeterminadas(updatedEditPregunta);
      } else {
        updateOtras(updatedEditPregunta);
      }
    }
  };

  const handleEditPregunta = async () => {
    let error = false;
    const options = opciones.filter(
      (opcion) => opcion.trim().length > 0
    );

    if (editPregunta.pregunta.trim() === '') {
      setIsErrorPregunta(true);
      error = true;
    }

    if (editPregunta.id_tipo_pregunta === 0) {
      setIsErrorTipoPregunta(true);
      error = true;
    }

    if (editPregunta.id_tipo_pregunta === 3 && options.length === 0) {
      setIsErrorOpciones(true);
      error = true;
    }

    if (!error) {
      const optionsTrimmed = options.map((option) => option.trim());
      const updatedEditPregunta = { ...editPregunta };

      if (editPregunta.id_tipo_pregunta === 3) {
        updatedEditPregunta.opciones = optionsTrimmed.join(',');
      } else {
        updatedEditPregunta.opciones = null;
      }

      setEditPregunta(updatedEditPregunta);

      const savedPregunta = await editPreguntaDb(updatedEditPregunta);

      if (savedPregunta) {
        handleEditContext(updatedEditPregunta);
        setIsEditModalOpen(false);
        addFlag(
          '¡Genial! Tu pregunta ha sido actualizada exitosamente.',
          <CheckCircleIcon
            label="pregunta actualizada"
            secondaryColor="green"
          />,
          'success'
        );
      } else {
        console.error(
          'Error al actualizar los cambios de la pregunta en la base de datos, intenta de nuevo más tarde.'
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
              Editar pregunta
            </p>
            <div
              className="flex items-center justify-center cursor-pointer p-1"
              onClick={() => setIsEditModalOpen(false)}
            >
              <CrossIcon label="cerrar modal" size="small" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-6 h-fit max-h-[45vh] px-3 overflow-y-auto pb-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="pregunta" className={labelStyle}>
                Pregunta
              </label>
              <input
                pattern="^[a-zA-Z0-9._-¿?!¡]+"
                title="Solo se permiten letras, números, puntos, guiones, guiones bajos, signos de interrogación y de exclamación"
                value={editPregunta.pregunta}
                onChange={(e) => {
                  setIsErrorPregunta(false);
                  setEditPregunta({
                    ...editPregunta,
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
                  (t) => t.value === editPregunta.id_tipo_pregunta
                )}
                options={tipos}
                onChange={(e) => {
                  setIsErrorTipoPregunta(false);
                  setIsErrorOpciones(false);
                  setEditPregunta({
                    ...editPregunta,
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
                  editPregunta.id_tipo_pregunta !== 0 ? '' : 'hidden'
                }`}
              >
                {helperMessage(editPregunta.id_tipo_pregunta)}
              </p>
            </div>
            {editPregunta.id_tipo_pregunta === 3 && (
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
                      pattern="^[a-zA-Z0-9._-¿?!¡]+"
                      title="Solo se permiten letras, números, puntos, guiones, guiones bajos, signos de interrogación y de exclamación"
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
                  <p className="text-red-500 text-xs">
                    Una pregunta de lista desplegable no puede ser
                    enviada sin opciones
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
              isChecked={editPregunta.predeterminada}
              onClick={() =>
                setEditPregunta({
                  ...editPregunta,
                  predeterminada: !editPregunta.predeterminada,
                })
              }
            />
            <p className="text-xs">
              Agregar la pregunta a la selección para esta
              retrospectiva y hacer predeterminada
            </p>
          </span>

          {id_tipo_pregunta === 3 && (
            <div className="w-full flex gap-2 items-center justify-center px-4">
              <WarningIcon
                label="warning"
                primaryColor="#FF0000"
                size="large"
              />
              <p className="flex text-xs text-textNormal">
                La pregunta es originalmente del tipo lista
                desplegable, si se cambia el tipo de pregunta se
                eliminarán las opciones asociadas a esta pregunta una
                vez que se actualice la pregunta.
              </p>
            </div>
          )}

          <div
            className="flex items-center justify-end
            w-full gap-5 mt-2"
          >
            <Button
              appearance="subtle"
              onClick={() => setIsEditModalOpen(false)}
            >
              Cancelar
            </Button>
            <Button appearance="primary" onClick={handleEditPregunta}>
              Actualizar pregunta
            </Button>
          </div>
        </div>
      </motion.div>
    </Blanket>
  );
};

export default EditarPregunta;
