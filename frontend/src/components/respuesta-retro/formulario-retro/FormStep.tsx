import Button from '@atlaskit/button';
import ArrowRightIcon from '@atlaskit/icon/glyph/arrow-right';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import { FC, useContext, useEffect, useState } from 'react';
import {
  type QuestionDB,
  type formDataType,
  formDataContext,
  questionsContext,
} from '../local-contexts';
import { AnonymousToggle, TiposPregunta } from './form-steps';
import { nanoid } from 'nanoid';

interface FormStepProps {
  numPregunta: number;
  totalPreguntas: number;
  setFormPage: (updater: (prev: number) => number) => void;
  formPage: number;
  anonymousQuestions: Array<number>;
  setAnonymousQuestions: (
    updater: (prev: Array<number>) => Array<number>
  ) => void;
  setIsModalNextOpen: (value: boolean) => void;
  setId_sesionRespuesta: (value: string) => void;
}

const FormStep: FC<FormStepProps> = ({
  numPregunta,
  totalPreguntas,
  setFormPage,
  formPage,
  anonymousQuestions,
  setAnonymousQuestions,
  setIsModalNextOpen,
  setId_sesionRespuesta,
}) => {
  const { formData, setFormData } = useContext(formDataContext);
  const [isError, setIsError] = useState<boolean>(false);
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);

  const { questions } = useContext(questionsContext);

  const question: QuestionDB = questions[numPregunta - 1];

  const handleOnchange = (
    event: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const key: number = question.id;
    const target = event.target as
      | HTMLInputElement
      | HTMLTextAreaElement;
    const value = target.value;
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleRangeChange = (value: number) => {
    const key: number = question.id;
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleAnonToggle = () => {
    if (!isAnonymous && !anonymousQuestions.includes(question.id)) {
      setAnonymousQuestions((prev) => [...prev, question.id]);
    }

    if (isAnonymous && anonymousQuestions.includes(question.id)) {
      setAnonymousQuestions((prev) =>
        prev.filter((value: number) => value !== question.id)
      );
    }
  };

  useEffect(() => {
    anonymousQuestions.includes(question.id)
      ? setIsAnonymous(true)
      : setIsAnonymous(false);
  }, [question.id, anonymousQuestions]);

  useEffect(() => {
    if (
      isAnonymous &&
      anonymousQuestions.includes(question.id) &&
      formData !== null &&
      !formData[question.id]
    ) {
      setAnonymousQuestions((prev) =>
        prev.filter((value: number) => value !== question.id)
      );
    }
  }, [formData]);

  const getOpciones = () => {
    const opciones = question.opciones_respuestas;
    if (opciones) {
      const opcionesArray = opciones.split(',');
      return opcionesArray;
    }
  };

  const nextButton = (
    <Button
      appearance="primary"
      isDisabled={isError}
      iconAfter={<ArrowRightIcon label="pregunta siguiente" />}
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
          <h2 className="text-[#5E4DB2] text-xl font-bold">
            {question.pregunta}
          </h2>
        </div>
        <div className="w-full text-left z-[2]">
          <TiposPregunta
            idTipoPregunta={question.id_tipo_pregunta}
            opciones={getOpciones()}
            idPregunta={question.id}
            onChange={handleOnchange}
            setIsError={setIsError}
            isError={isError}
            handleRangeOnchange={handleRangeChange}
          />
        </div>
        <div className="flex items-center justify-end w-full">
          <p className="text-xs font-semibold">
            Enviar como respuesta anónima
          </p>
          <AnonymousToggle
            isDisabled={formData !== null && !formData[question.id]}
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
            iconBefore={<ArrowLeftIcon label="pregunta anterior" />}
            label="Pregunta anterior"
            onClick={() => setFormPage((prev: number) => prev - 1)}
          >
            Pregunta anterior
          </Button>
          {numPregunta === totalPreguntas ? (
            <Button
              appearance="primary"
              onClick={() => {
                setId_sesionRespuesta(nanoid(13));
                setIsModalNextOpen(true);
              }}
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
