import React, { FC, useContext, useState } from "react";
import { newRetroContext } from "../../local-contexts";
import Button from "@atlaskit/button";
import Select from "react-select";
import TextArea from "@atlaskit/textarea";
import axios from "axios";
import DebugContextButton from "./DebugContextButton";

const URI = "http://localhost:8000/";

const fecha = ["01-06-2023", "01-07-2023", "01-08-2023", "01-09-2023"];
const maxCaracteres = 1000; //En la base de datos dice 1000, no es mucho ?

interface Step1Props {
  setStepNumber: (updater: (prev: number) => number) => void;
  stepNumber: number;
}

const Step1: FC<Step1Props> = ({ setStepNumber, stepNumber }) => {
  const { newRetro, setNewRetro } = useContext(newRetroContext);
  const [descripcion, setDescripcion] = useState<string>("");
  const [isDateSelected, setIsDateSelected] = useState<boolean>(false);
  const [showMaxDescriptionWarning, setShowMaxDescriptionWarning] =
    useState<boolean>(false);

  const handleDescripcionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    setNewRetro({
      ...newRetro,
      descripcion: value,
    });
    setDescripcion(value);
    setShowMaxDescriptionWarning(value.length > maxCaracteres);
  };

  const handleTituloChange = (value: any) => {
    setNewRetro({
      ...newRetro,
      titulo: value.value,
    });
    setIsDateSelected(true);
  };

  return (
    <>
      <span
        className={`flex flex-col gap-10 w-full text-left ${
          stepNumber === 1 ? "" : "hidden"
        }`}
      >
        <div className="grid grid-cols-1 gap-y-4 px-[8vmin]">
          <p className="font-semibold text-xs">Título:</p>
          <p className="text-xs text-[#626F86] mt-1">
            La fecha del Sprint seleccionado será el título de la retrospectiva.
          </p>
          <Select
            required
            name="titulo"
            id="dropdown-fechas"
            className="w-44 h-8 rounded-md pl-2 text-xsm text-gray-600 "
            options={fecha.map((fecha) => ({ value: fecha, label: fecha }))}
            onChange={handleTituloChange}
            placeholder="fecha"
          />
          <p className="font-semibold text-xs">Descripción:</p>
          <TextArea
            resize="auto"
            maxHeight="20vh"
            name="descripcion"
            value={descripcion}
            onChange={handleDescripcionChange}
            placeholder="Escribe una descripción para tu retrospectiva"
          />
          {showMaxDescriptionWarning && (
            <p className="text-red-500 text-xs">
              La descripción no puede tener más de {maxCaracteres} caracteres.
            </p>
          )}
        </div>

        <div className="flex gap-14 w-full items-center justify-center mt-4">
          <Button
            appearance="primary"
            isDisabled={!isDateSelected}
            label="Siguiente paso"
            onClick={() => setStepNumber((prev: number) => prev + 1)}
          >
            Siguiente paso
          </Button>
        </div>
      </span>
      <DebugContextButton />
    </>
  );
};

export default Step1;
