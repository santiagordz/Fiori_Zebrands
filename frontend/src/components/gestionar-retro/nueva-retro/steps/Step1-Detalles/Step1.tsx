import Button from "@atlaskit/button";
import Select, { StylesConfig } from "react-select";
import ArrowRightIcon from "@atlaskit/icon/glyph/arrow-right";
import TextArea from "@atlaskit/textarea";
import axios from "axios";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import { newRetroContext } from "../../local-contexts";

const URI = "http://localhost:8000/"; //que ruta pongo

const fecha = ["01-06-2022", "01-07-2022", "01-08-2022", "01-09-2022"];

interface Step1Props {
  setStepNumber: (updater: (prev: number) => number) => void;
  stepNumber: number;
}

const Step1: FC<Step1Props> = ({ setStepNumber, stepNumber }) => {
  const { newRetro, setNewRetro } = useContext(newRetroContext);

  const [isError, setIsError] = useState<boolean>(false);

  const getSprints = async () => {
    const { data } = await axios.get(URI);
    //Aquí que va?
    setNewRetro({
      ...newRetro,
      titulo: "sprints",
      descripcion: "descripcion",
    });
  };

  //usar use state para guardar los datos de la fecha y la descripcion

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
          //Título
          <Select
            required
            name="rol"
            id="dropdown-rol"
            className="w-44 h-8 rounded-md pl-2 text-sm text-gray-600 font-medium"
            options={fecha.map((fecha) => ({ value: fecha, label: fecha }))}
          ></Select>
          <p className="font-semibold text-xs">Descripción:</p>
          //Descripción
          <TextArea
            resize="auto"
            maxHeight="20vh"
            name="descripcion"
            placeholder="Escribe una descripción para tu retrospectiva"
          />
        </div>

        <div className="flex gap-14 w-full items-center justify-center mt-4">
          <Button
            appearance="primary"
            isDisabled={isError}
            iconAfter={<ArrowRightIcon label="siguiente paso" />}
            label="Siguiente paso"
            onClick={() => setStepNumber((prev: number) => prev + 1)}
          >
            Siguiente paso
          </Button>
        </div>
      </span>
    </>
  );
};

export default Step1;
