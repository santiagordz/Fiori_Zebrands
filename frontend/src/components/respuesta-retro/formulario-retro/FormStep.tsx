import Button from '@atlaskit/button';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import ArrowRightIcon from '@atlaskit/icon/glyph/arrow-right';
import Toggle from '@atlaskit/toggle';
import Tooltip from '@atlaskit/tooltip';
import { FC, useContext, useEffect, useState } from 'react';
import { retrospective } from '../RetroDomi';
import TiposPregunta from '../TiposPregunta';
import { formDataContext } from './FormDataProvider';

import { AnonymousToggle, NavigationButton } from './form-steps';

interface FormStepProps {
  numPregunta: number;
  totalPreguntas: number;
  pregunta: string;
  idTipoPregunta: number;
  setFormPage: (updater: (prev: number) => number) => void;
  formPage: number;
  idPregunta: number;
  anonymousQuestions: Array<string>;
  setAnonymousQuestions: (
    updater: (prev: Array<string>) => Array<string>
  ) => void;
}

const FormStep: FC<FormStepProps> = ({
  numPregunta,
  totalPreguntas,
  pregunta,
  idTipoPregunta,
  setFormPage,
  formPage,
  idPregunta,
  anonymousQuestions,
  setAnonymousQuestions,
}) => {
  const { formData, setFormData } = useContext(formDataContext);
  const [isError, setIsError] = useState<boolean>(false);
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleOnchange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const key: string = idPregunta.toString();
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
      !anonymousQuestions.includes(idPregunta.toString())
    ) {
      setAnonymousQuestions((prev) => [
        ...prev,
        idPregunta.toString(),
      ]);
    }

    if (
      isAnonymous &&
      anonymousQuestions.includes(idPregunta.toString())
    ) {
      setAnonymousQuestions((prev) =>
        prev.filter(
          (value: string) => value !== idPregunta.toString()
        )
      );
    }
  };

  useEffect(() => {
    anonymousQuestions.includes(idPregunta.toString())
      ? setIsAnonymous(true)
      : setIsAnonymous(false);
  }, [idPregunta, anonymousQuestions]);

  useEffect(() => {
    if (
      isAnonymous &&
      anonymousQuestions.includes(idPregunta.toString()) &&
      !formData[idPregunta]
    ) {
      setAnonymousQuestions((prev) =>
        prev.filter(
          (value: string) => value !== idPregunta.toString()
        )
      );
    }
  }, [formData]);

  const handleSubmitwAnon = () => {
    setFormData((prevFormData: any) => {
      return {
        ...prevFormData,
        anonymousQuestions,
      };
    });
  };

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
            {pregunta}
          </h2>
        </div>
        <div className="w-full text-left">
          <TiposPregunta
            idTipoPregunta={idTipoPregunta}
            opciones={
              retrospective.preguntas[numPregunta - 1].tipo?.opciones
            }
            idPregunta={idPregunta}
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
            isDisabled={!formData[idPregunta]}
            isChecked={isAnonymous}
            onChange={handleAnonToggle}
          />
        </div>
      </div>
      {numPregunta === 1 ? (
        <NavigationButton
          appearance="primary"
          isError={isError}
          icon={<ArrowRightIcon label="pregunta siguiente" />}
          label="Siguiente pregunta"
          onClick={() => setFormPage((prev: number) => prev + 1)}
        />
      ) : (
        <div className="flex gap-14">
          <NavigationButton
            appearance="default"
            isError={isError}
            icon={<ArrowLeftIcon label="pregunta anterior" />}
            label="Pregunta anterior"
            onClick={() => setFormPage((prev: number) => prev - 1)}
          />
          {numPregunta === totalPreguntas ? (
            <Button
              appearance="primary"
              type="submit"
              value="Submit"
              onClick={() => setIsOpen(true)}
            >
              Registrar respuestas
            </Button>
          ) : (
            <NavigationButton
              appearance="primary"
              isError={isError}
              icon={<ArrowRightIcon label="pregunta siguiente" />}
              label="Siguiente pregunta"
              onClick={() => setFormPage((prev: number) => prev + 1)}
            />
          )}
        </div>
      )}
      {isOpen && (
        <ConfirmacionRetro isOpen={false} setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default FormStep;
