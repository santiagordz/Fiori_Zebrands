import React, { FC, useState, useEffect } from "react";
import { customAlphabet } from "nanoid";
import Blanket from "@atlaskit/blanket";
import Button from "@atlaskit/button";
import { motion } from "framer-motion";
import CrossIcon from "@atlaskit/icon/glyph/cross";

interface ModalNuevoAccionableProps {
  setIsNewAccionableOpen: (value: boolean) => void;
  agregarAccionable: (accionable: any) => void;
}

const labelStyle =
  "after:content-['*'] after:text-[#ae2a19] text-xs font-semibold text-label";

const Style: React.CSSProperties = {};

const ModalNuevoAccionable: FC<ModalNuevoAccionableProps> = ({
  setIsNewAccionableOpen,
  agregarAccionable,
}) => {
  const nanoid = customAlphabet("1234567890", 5);

  const [newAccionable, setNewAccionable] = useState<any>({
    id: 0,
    accionable: "",
    fecha: new Date().toLocaleDateString(),
  });

  //ponerErrores

  useEffect(() => {
    setNewAccionable({
      ...newAccionable,
      id: Number(nanoid()),
    });
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <Blanket isTinted>
      <motion.div
        animate={{ opacity: 1 }}
        className="flex flex-col w-full h-full items-center justify-center opacity-0"
      >
        <div className="flex flex-col bg-white rounded p-10 gap-8 items-center justify-center drop-shadow-lg min-w-[40vw] max-w-[55vw]">
          <div className="flex w-full justify-between items-center">
            <p className="text-textNormal font-semibold text-base">
              Nuevo accionable
            </p>
            <div
              className="flex items-center justify-center cursor-pointer p-1"
              onClick={() => setIsNewAccionableOpen(false)}
            >
              <CrossIcon label="cerrar modal" size="small" />
            </div>
          </div>

          <div className="w-full flex flex-col gap-6 h-fit max-h-[55vh] px-3 overflow-y-auto pb-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="accionable" className={labelStyle}>
                Accionable
              </label>

              <p className="text-xs max-w-xl">
                Escribe el accionable que te gustaría agregar. Recuerda que debe
                ser un objetivo que puedas cumplir.
              </p>

              <input
                value={newAccionable.accionable}
                onChange={(e) => {
                  setNewAccionable({
                    ...newAccionable,
                    accionable: e.target.value,
                  });
                }}
                type="text"
                name="accionable"
                className="text-sm w-full border-2 rounded-sm p-2 focus:border-blue-500 hover:bg-gray-100 placeholder:text-xs h-10"
                autoComplete="off"
                placeholder="Ingresa tu nuevo accionable"
              />
            </div>
          </div>

          <div
            className="flex items-center justify-end
            w-full gap-5 mt-2"
          >
            <Button
              appearance="subtle"
              onClick={() => setIsNewAccionableOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              appearance="primary"
              onClick={() => {
                agregarAccionable({
                  ...newAccionable,
                  fecha: new Date().toLocaleDateString(),
                });
                setIsNewAccionableOpen(false);
              }}
            >
              Agregar accionable
            </Button>
          </div>
        </div>
      </motion.div>
    </Blanket>
  );
};

export default ModalNuevoAccionable;
