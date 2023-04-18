import React, { FC, useState, useEffect } from "react";
import { ErrorMessage } from "@atlaskit/form";
import axios from "axios";
import { customAlphabet } from "nanoid";
import Blanket from "@atlaskit/blanket";
import Button from "@atlaskit/button";
import { motion } from "framer-motion";
import CrossIcon from "@atlaskit/icon/glyph/cross";
import TextArea from "@atlaskit/textarea";

const URI = "http://localhost:8000/accionables/";

const currentUser = {
  id: 24, // Reemplaza esto con el id del usuario actual
};

interface ModalNuevoAccionableProps {
  setIsNewAccionableOpen: (value: boolean) => void;
  agregarAccionable: (accionable: any) => void;
}

const MAX_CARACTERES = 200;

const ModalNuevoAccionable: FC<ModalNuevoAccionableProps> = ({
  setIsNewAccionableOpen,
  agregarAccionable,
}) => {
  //cambiar estoooo!!!!!
  const nanoid = customAlphabet("1234567890", 5);

  const [newAccionable, setNewAccionable] = useState<any>({
    id: 0,
    accionable: "",
    fecha: new Date().toLocaleDateString(),
  });

  const saveAccionable = async (accionable: any) => {
    try {
      await axios.post(URI, accionable);
    } catch (error) {
      console.error("Error al guardar el accionable:", error);
    }
  };

  const [excedeLimite, setExcedeLimite] = useState(false);

  const fetchAccionables = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/accionables/${currentUser.id}`
      );
      setNewAccionable(response.data);
    } catch (error) {
      console.error("Error al obtener los accionables:", error);
    }
  };

  useEffect(() => {
    fetchAccionables();
  }, []);

  const verificarLimite = (texto: string) => {
    if (texto.length > MAX_CARACTERES) {
      setExcedeLimite(true);
    } else {
      setExcedeLimite(false);
    }
  };

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
              <p className="font-semibold text-xs">Accionable:</p>
              <p className="text-xs text-[#626F86] mt-1">yay yay yupi</p>

              <TextArea
                value={newAccionable.accionable}
                onChange={(e) => {
                  setNewAccionable({
                    ...newAccionable,
                    accionable: e.target.value,
                  });
                  verificarLimite(e.target.value);
                }}
                name="accionable"
                className="text-sm w-full border-2 rounded-sm p-2 focus:border-blue-500 hover:bg-gray-100 placeholder:text-xs h-10"
                autoComplete="off"
                placeholder="Ingresa tu nuevo accionable"
              />

              <div className="w-full flex flex-col justify-end items-end">
                {excedeLimite && (
                  <ErrorMessage>
                    Tu respuesta excede el número de caracteres permitidos
                  </ErrorMessage>
                )}
              </div>
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
              onClick={async () => {
                if (newAccionable.accionable.length <= MAX_CARACTERES) {
                  // Cambia "descripcion" a "accionable" aquí
                  const accionableToSend = {
                    ...newAccionable,
                    fecha: new Date().toLocaleDateString(),
                    id_usuario: currentUser.id, // Agrega el id_usuario aquí
                  };
                  agregarAccionable(accionableToSend);
                  console.log("Enviando accionable:", accionableToSend);
                  await saveAccionable(accionableToSend);
                  setIsNewAccionableOpen(false);
                } else {
                  setExcedeLimite(true);
                }
              }}
              isDisabled={!newAccionable.accionable.trim()}
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
