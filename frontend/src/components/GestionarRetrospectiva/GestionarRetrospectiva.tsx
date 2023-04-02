import ArrowLeftIcon from "@atlaskit/icon/glyph/arrow-left";
import ArrowRightIcon from "@atlaskit/icon/glyph/arrow-right";
import { FC, useState } from "react";
import Button from "@atlaskit/button/standard-button";
import { ProgressIndicator } from "@atlaskit/progress-indicator";
import ListaPreguntas from "../preguntas/ListaPreguntas";
import Tabs, { Tab, TabList, TabPanel } from "@atlaskit/tabs";

const GestionarRetrospectiva = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [values] = useState(["first", "second", "third"]);

  const handlePrev = () => {
    setSelectedIndex((prevState) => prevState - 1);
  };

  const handleNext = () => {
    setSelectedIndex((prevState) => prevState + 1);
  };

  return (
    <div className="p-5">
      <button className="flex flex-row items-center">
        <ArrowLeftIcon size="large" label="Volver a gestionar retrospectivas" />
        <p className="font-semibold text-base">
          Volver a gestionar retrospectivas
        </p>
      </button>

      <ProgressIndicator
        appearance="primary"
        selectedIndex={selectedIndex}
        values={values}
      />
      <div className="text-center py-[8vmin]">
        <h3 className="text-[#0C66E4] text-sm font-bold">
          {" "}
          PASO {selectedIndex + 1}/3
        </h3>
        <h1 className="text-[#5E4DB2] font-bold text-2xl">
          Selecciona las Preguntas
        </h1>

        <p className="text-[#44546F]">
          Elige las preguntas necesarias para satisfacer las necesidades de la
          retrospectiva.
        </p>
      </div>
      <div className="py-[2vmin]">
        <ListaPreguntas />
      </div>
      <div className="flex flex-row place-content-center justify-center gap-[10vmin] py-[2vmax]">
        <Button
          iconBefore={<ArrowLeftIcon label=" " size="medium" />}
          appearance="subtle"
          isDisabled={selectedIndex === 0}
          onClick={handlePrev}
        >
          Volver al paso anterior
        </Button>
        <Button
          iconAfter={<ArrowRightIcon label=" " size="medium" />}
          isDisabled={selectedIndex === values.length - 1}
          onClick={handleNext}
          appearance="primary"
        >
          Siguiente paso
        </Button>
      </div>
    </div>
  );
};

export default GestionarRetrospectiva;
