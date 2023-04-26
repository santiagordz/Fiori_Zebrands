import React, { FC, useState, useEffect, useContext } from 'react';
import { FlagContext } from '../../../contexts';
import Blanket from '@atlaskit/blanket';
import { motion } from 'framer-motion';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import Button from '@atlaskit/button';
import { SimpleTag as Tag } from '@atlaskit/tag';
import axios from 'axios';

const URI = 'http://localhost:8000/accionables/info';

interface ModalCompletarAccionableProps {
  setIsModalOpen: (value: boolean) => void;
  id_accionable: number;
}

interface Accionable {
  id: number;
  id_usuario: number;
  descripcion: string;
  fecha_esperada: string;
  createdAt: string;
}

const ModalCompletarAccionable: FC<ModalCompletarAccionableProps> = ({
  setIsModalOpen,
  id_accionable,
}) => {
  const [accionable, setAccionable] = useState<Accionable>({
    id: 0,
    id_usuario: 0,
    descripcion: '',
    fecha_esperada: '',
    createdAt: '',
  });
  const getInfoAccionable = async () => {
    const response = await axios.get(`${URI}/${id_accionable}`);
    setAccionable(response.data[0]);
  };

  const handleComplete = async () => {
    try {
    } catch (error) {
      console.error('Error al completar el accionable:', error);
    }
  };

  useEffect(() => {
    getInfoAccionable();
  }, []);

  return (
    <>
      <Blanket isTinted={true}>
        <motion.div
          animate={{ opacity: 1 }}
          className="flex flex-col w-full h-full items-center justify-center opacity-0"
        >
          <div className="flex flex-col bg-white rounded px-10 pt-10 pb-5 gap-8 items-center justify-center drop-shadow-lg min-w-[40vw] max-w-[55vw]">
            {/* TITLE */}
            <div className="flex w-full justify-between items-center">
              <p className="text-textNormal font-semibold text-base">
                Informacion de tu accionable:
              </p>
              <div
                className="flex items-center justify-center cursor-pointer p-1"
                onClick={() => setIsModalOpen(false)}
              >
                <CrossIcon label="cerrar modal" size="small" />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-base underline">
                Descripción:
              </p>
              <div className="border-2 rounded-sm border-gray-400 p-2 mt-3 mb-5">
                <p>{accionable.descripcion}</p>
              </div>
              <div className="flex justify-around">
                <div className="">
                  <p className="text-black text-base underline">
                    Fecha Creado:
                  </p>
                  <div
                    id="tag"
                    className="scale-[1.2] text-right flex"
                  >
                    <Tag
                      text={accionable.createdAt.split('T')[0]}
                      appearance="rounded"
                      color="blueLight"
                    />
                  </div>
                </div>
                <div className="">
                  <p className="text-black text-base underline">
                    Fecha Esperada:
                  </p>
                  <div
                    id="tag"
                    className="scale-[1.2] text-right flex justify-center"
                  >
                    <Tag
                      text={accionable.fecha_esperada.split('T')[0]}
                      appearance="rounded"
                      color="purpleLight"
                    />
                  </div>
                </div>
              </div>
              <div className=" text-center mt-10 flex flex-col items-center justify-center">
                <p className="font-semibold text-jiraBlue">
                  Has completado este accionable?
                </p>
                <button
                  className="border-2 border-jiraBlue rounded-sm bg-jiraBlue text-white w-1/4 py-2 mt-3 text-sm hover:bg-blue-500 hover:border-blue-500"
                  onClick={handleComplete}
                >
                  Completalo Aqui
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </Blanket>
    </>
  );
};

export default ModalCompletarAccionable;
