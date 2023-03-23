import Button from '@atlaskit/button';
import ArrowRightIcon from '@atlaskit/icon/glyph/arrow-right';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import { FC, useContext, useEffect, useState } from 'react';
import {
  QuestionDB,
  formDataContext,
  questionsContext,
} from '../local_contexts';

import { AnonymousToggle, TiposPregunta } from './form-steps';

interface FormStepProps {
  numPregunta: number;
  totalPreguntas: number;
  setFormPage: (updater: (prev: number) => number) => void;
  formPage: number;
  anonymousQuestions: Array<string>;
  setAnonymousQuestions: (
    updater: (prev: Array<string>) => Array<string>
  ) => void;
  setIsModalNextOpen: (value: boolean) => void;
}

const FormStep: FC<FormStepProps> = ({
  numPregunta,
  totalPreguntas,
  setFormPage,
  formPage,
  anonymousQuestions,
  setAnonymousQuestions,
  setIsModalNextOpen,
}) => {
  const { formData, setFormData } = useContext(formDataContext);
  const [isError, setIsError] = useState<boolean>(false);
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);

  const { questions } = useContext(questionsContext);

  const question: QuestionDB = questions[numPregunta - 1];

  const handleOnchange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const key: string = question.id_pregunta.toString();
    setFormData((prevFormData: any) => {
      return {
        ...prevFormData,
        [key]: event.target.value,
      };
    });
  };

  const handleAnonToggle = () => {
    if (
      !isAnonymous &&
      !anonymousQuestions.includes(question.id_pregunta.toString())
    ) {
      setAnonymousQuestions((prev) => [
        ...prev,
        question.id_pregunta.toString(),
      ]);
    }

    if (
      isAnonymous &&
      anonymousQuestions.includes(question.id_pregunta.toString())
    ) {
      setAnonymousQuestions((prev) =>
        prev.filter(
          (value: string) => value !== question.id_pregunta.toString()
        )
      );
    }
  };

  useEffect(() => {
    anonymousQuestions.includes(question.id_pregunta.toString())
      ? setIsAnonymous(true)
      : setIsAnonymous(false);
  }, [question.id_pregunta, anonymousQuestions]);

  useEffect(() => {
    if (
      isAnonymous &&
      anonymousQuestions.includes(question.id_pregunta.toString()) &&
      !formData[question.id_pregunta]
    ) {
      setAnonymousQuestions((prev) =>
        prev.filter(
          (value: string) => value !== question.id_pregunta.toString()
        )
      );
    }
  }, [formData]);

  const getOpciones = () => {
    const opciones = question.opciones_respuesta;
    if (opciones) {
      const opcionesArray = opciones.split(',');
      return opcionesArray;
    }
  };

  const nextButton = (
    <Button
      appearance="primary"
      isDisabled={isError}
      iconBefore={<ArrowRightIcon label="pregunta siguiente" />}
      label="Siguiente pregunta"
      onClick={() => setFormPage((prev: number) => prev + 1)}
    >
      Siguiente pregunta
    </Button>
  );

  return (
    <div
      className={`w-full flex flex-col justify-center items-center gap-9 ${
        numPregunta != formPage && 'hidden'
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-3 w-full">
        <div className="flex flex-col items-center justify-center gap-2 w-full ">
          <p className="uppercase text-selectBold text-xs font-bold">
            Pregunta {numPregunta}/{totalPreguntas}
          </p>
          <h2 className="text-[#5E4DB2] text-2xl font-bold">
            {question.pregunta}
          </h2>
        </div>
        <div className="w-full text-left">
          <TiposPregunta
            idTipoPregunta={question.id_tipo_pregunta}
            opciones={getOpciones()}
            idPregunta={question.id_pregunta}
            onChange={handleOnchange}
            setIsError={setIsError}
            isError={isError}
          />
        </div>
        <div className="flex items-center justify-end w-full">
          <p className="text-xs font-semibold">
            Enviar como respuesta anónima
          </p>
          <AnonymousToggle
            isDisabled={!formData[question.id_pregunta]}
            isChecked={isAnonymous}
            onChange={handleAnonToggle}
          />
        </div>
      </div>
      {numPregunta === 1 ? (
        nextButton
      ) : (
        <div className="flex gap-14">
          <Button
            appearance="default"
            iconBefore={<ArrowLeftIcon label="pregunta siguiente" />}
            label="Pregunta anterior"
            onClick={() => setFormPage((prev: number) => prev - 1)}
          >
            Pregunta anterior
          </Button>
          {numPregunta === totalPreguntas ? (
            <Button
              appearance="primary"
              onClick={() => setIsModalNextOpen(true)}
            >
              Registrar respuestas
            </Button>
          ) : (
            nextButton
          )}
        </div>
      )}
    </div>
  );
};

export default FormStep;
