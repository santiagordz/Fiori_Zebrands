import Button from "@atlaskit/button";
import Select, { StylesConfig } from "react-select";
import ArrowRightIcon from "@atlaskit/icon/glyph/arrow-right";
import TextArea from "@atlaskit/textarea";
import axios from "axios";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import { newRetroContext } from "../../local-contexts";

const URI = "http://localhost:8000/"; //que ruta pongo

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

  return (
    <>
      <span
        className={`flex flex-col gap-10 w-full text-left ${
          stepNumber === 1 ? "" : "hidden"
        }`}
      >
        <div className="grid grid-cols-1 gap-y-4 px-[8vmin]">
          <p className="font-semibold text-xs">Título:</p>

          <Select
            className="mt-1 text-sm"
            id="etiquetas"
            placeholder="Selecciona etiquetas"
            isMulti={true}
          ></Select>

          <p className="font-semibold text-xs">Descripción:</p>

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
