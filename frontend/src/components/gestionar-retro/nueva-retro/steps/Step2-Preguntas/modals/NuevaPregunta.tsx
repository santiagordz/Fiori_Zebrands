import Blanket from '@atlaskit/blanket';
import Button from '@atlaskit/button';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import { motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import Select from 'react-select';
import type { PreguntaType } from '../../../local-contexts';
import { ReactComponent as ParagraphSVG } from '@/assets/icons/paragraph.svg';
import { ReactComponent as SelectSVG } from '@/assets/icons/select.svg';
import { ReactComponent as ShortTextSVG } from '@/assets/icons/short_text.svg';
import { ReactComponent as RangeSVG } from '@/assets/icons/range.svg';
interface NuevaPreguntaProps {
  setIsNewQuestionOpen: (value: boolean) => void;
}

const labelStyle =
  "after:content-['*'] after:text-[#ae2a19] text-xs font-semibold text-label";

const NuevaPregunta: FC<NuevaPreguntaProps> = ({
  setIsNewQuestionOpen,
}) => {
  const [newPregunta, setNewPregunta] = useState<PreguntaType>({
    id: 0,
    pregunta: '',
    id_tipo_pregunta: 1,
    predeterminada: false,
  });
  useEffect(() => {
    document.body.classList.add('modal-open');

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  const tipos = [
    {
      value: 1,
      label: 'Párrafo',
      icon: ParagraphSVG,
    },
    {
      value: 2,
      label: 'Respuesta corta',
      icon: ShortTextSVG,
    },
    {
      value: 3,
      label: 'Lista desplegable',
      icon: SelectSVG,
    },
    {
      value: 4,
      label: 'Escala numérica',
      icon: RangeSVG,
    },
  ];

  return (
    <>
      <Blanket isTinted>
        <motion.div
          animate={{ opacity: 1 }}
          className="flex flex-col w-full h-full items-center justify-center opacity-0"
        >
          <div className="flex flex-col bg-white rounded p-10 gap-7 items-center justify-center drop-shadow-lg">
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
            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="pregunta" className={labelStyle}>
                  Pregunta
                </label>
                <input
                  required
                  pattern="^[a-zA-Z0-9._-¿?!¡]+" // Only letters, numbers, dots, dashes and underscores
                  title="Solo se permiten letras, números, puntos, guiones, guiones bajos, signos de interrogación y de exclamación"
                  // value={correo}
                  // onChange={(e) => setCorreo(e.target.value)}
                  type="text"
                  name="pregunta"
                  className="text-sm w-full border-2 border-gray rounded-sm p-2 focus:outline-gray-400 hover:bg-gray-100 placeholder:text-xs h-8"
                  autoComplete="off"
                  placeholder="Ingresa el título de la pregunta"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="tipo" className={labelStyle}>
                  Tipo
                </label>
                <Select
                  placeholder="Selecciona un tipo de pregunta"
                  isClearable
                  //   value={selectedOption}
                  options={tipos}
                  //   onChange={handleChange}
                  getOptionLabel={(e) => (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {<e.icon />}
                      <span style={{ marginLeft: 5 }}>{e.label}</span>
                    </div>
                  )}
                />
              </div>
            </div>

            <div
              className="flex items-center justify-between
            w-full gap-10"
            >
              <Button appearance="primary">
                Ir al panel de retrospectivas
              </Button>
              <Button
                appearance="default"
                // onClick={() => setIsModalBackOpen(false)}
              >
                Continuar respondiendo
              </Button>
            </div>
          </div>
        </motion.div>
      </Blanket>
    </>
  );
};

export default NuevaPregunta;
