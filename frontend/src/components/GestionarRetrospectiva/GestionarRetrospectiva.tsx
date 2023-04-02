import ArrowLeftIcon from "@atlaskit/icon/glyph/arrow-left";
import ArrowRightIcon from "@atlaskit/icon/glyph/arrow-right";
import { FC, useState } from "react";
import Button from "@atlaskit/button/standard-button";
import { ProgressIndicator } from "@atlaskit/progress-indicator";
import ListaPreguntas from "../preguntas/ListaPreguntas";
import Tabs, { Tab, TabList, TabPanel } from "@atlaskit/tabs";
import { useMultistepForm } from "./useMultistepForm";

const GestionarRetrospectiva = () => {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<div> one </div>, <div> two </div>, <div> three </div>]);

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
          {currentStepIndex + 1} / {steps.length}
        </h3>

        {step}

        <h1 className="text-[#5E4DB2] font-bold text-2xl">
          Selecciona las Preguntas
        </h1>

        <p className="text-[#44546F]">
          Elige las preguntas necesarias para satisfacer las necesidades de la
          retrospectiva.
        </p>
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
