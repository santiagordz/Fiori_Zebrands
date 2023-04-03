import ArrowLeftIcon from "@atlaskit/icon/glyph/arrow-left";
import ArrowRightIcon from "@atlaskit/icon/glyph/arrow-right";
import { FC, useState } from "react";
import Button from "@atlaskit/button/standard-button";
import { ProgressIndicator } from "@atlaskit/progress-indicator";
import ListaPreguntas from "../preguntas/ListaPreguntas";
import Tabs, { Tab, TabList, TabPanel } from "@atlaskit/tabs";
import { useMultistepForm } from "./useMultistepForm";
import Descripcion from "../Detalles/Descripcion";

const GestionarRetrospectiva = () => {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<Descripcion />, <ListaPreguntas />]);

  return (
    <div className="p-5">
      <button className="flex flex-row items-center">
        <ArrowLeftIcon size="large" label="Volver a gestionar retrospectivas" />
        <p className="font-semibold text-base">
          Volver a gestionar retrospectivas
        </p>
      </button>

      <div className="text-center py-[8vmin]">
        <h3 className="text-[#0C66E4] text-sm font-bold">
          PASO {currentStepIndex + 1} / {steps.length}
        </h3>

        {step}
      </div>

      <div className="flex flex-row place-content-center justify-center gap-[10vmin] py-[2vmax]">
        {!isFirstStep && (
          <Button
            iconBefore={<ArrowLeftIcon label=" " size="medium" />}
            appearance="subtle"
            onClick={back}
          >
            Volver al paso anterior
          </Button>
        )}

        <Button
          iconAfter={<ArrowRightIcon label=" " size="medium" />}
          appearance="primary"
          onClick={next}
        >
          {isLastStep ? "Enviar e iniciar retrospectiva" : "Siguiente paso"}
        </Button>
      </div>
    </div>
  );
};

export default GestionarRetrospectiva;
