import React, { FC, useState } from 'react';
import { ProgressTracker, Stages } from '@atlaskit/progress-tracker';
import Button, { ButtonGroup, LoadingButton } from '@atlaskit/button';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import ArrowRightIcon from '@atlaskit/icon/glyph/arrow-right';
import TiposPregunta from './TiposPregunta';

interface FormStepProps {
  numPregunta: number;
  totalPreguntas: number;
  pregunta: string;
  idTipoPregunta: number;
  setFormPage: (updater: (prev: number) => number) => void;
}

const FormStep: FC<FormStepProps> = ({
  numPregunta,
  totalPreguntas,
  pregunta,
  idTipoPregunta,
  setFormPage,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-9 w-full">
      <div className="flex flex-col items-center justify-center gap-7 w-full">
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <p className="uppercase text-selectBold text-xs font-bold">
            Pregunta {numPregunta}/{totalPreguntas}
          </p>
          <h2 className="text-[#5E4DB2] text-2xl font-bold">
            {pregunta}
          </h2>
        </div>
        <div className="w-full">
          <TiposPregunta idTipoPregunta={idTipoPregunta} />
        </div>
      </div>
      {numPregunta === 1 ? (
        <Button
          appearance="primary"
          iconAfter={<ArrowRightIcon label="pregunta siguiente" />}
          onClick={() => setFormPage((prev: number) => prev + 1)}
        >
          Siguiente pregunta
        </Button>
      ) : (
        <div className="flex gap-14">
          <Button
            appearance="subtle-link"
            iconBefore={<ArrowLeftIcon label="pregunta anterior" />}
            onClick={() => setFormPage((prev: number) => prev - 1)}
          >
            Pregunta anterior
          </Button>
          <Button
            appearance="primary"
            iconAfter={<ArrowRightIcon label="pregunta siguiente" />}
            onClick={() => setFormPage((prev: number) => prev + 1)}
          >
            Siguiente pregunta
          </Button>
        </div>
      )}
    </div>
  );
};

export default FormStep;
