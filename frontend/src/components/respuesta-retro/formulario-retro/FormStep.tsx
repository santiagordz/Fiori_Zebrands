import Button from '@atlaskit/button';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import ArrowRightIcon from '@atlaskit/icon/glyph/arrow-right';
import Toggle from '@atlaskit/toggle';
import Tooltip from '@atlaskit/tooltip';
import { FC, useContext, useEffect, useState } from 'react';
import { retrospective } from '../RetroDomi';
import TiposPregunta from '../TiposPregunta';
import { formDataContext } from './FormDataProvider';

interface FormStepProps {
  numPregunta: number;
  totalPreguntas: number;
  pregunta: string;
  idTipoPregunta: number;
  setFormPage: (updater: (prev: number) => number) => void;
  idPregunta: number;
}

const FormStep: FC<FormStepProps> = ({
  numPregunta,
  totalPreguntas,
  pregunta,
  idTipoPregunta,
  setFormPage,
  idPregunta,
}) => {
  const { formData, setFormData } = useContext(formDataContext);
  const [isError, setIsError] = useState<boolean>(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [anonymousQuestions, setAnonymousQuestions] = useState<
    Array<string>
  >([]);

  const nextQButton = (
    <Button
      appearance="primary"
      iconAfter={<ArrowRightIcon label="pregunta siguiente" />}
      onClick={() => {
        setFormPage((prev: number) => prev + 1);
      }}
      isDisabled={isError ? true : false}
    >
      Siguiente pregunta
    </Button>
  );

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
    <div className="w-full flex flex-col justify-center items-center gap-9">
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
          <Tooltip
            content={
              !formData[idPregunta]
                ? 'No puedes enviar una respuesta anónima con un campo vacío'
                : null
            }
          >
            <Toggle
              isDisabled={formData[idPregunta] ? false : true}
              isChecked={isAnonymous}
              onChange={handleAnonToggle}
            />
          </Tooltip>
        </div>
      </div>
      {numPregunta === 1 ? (
        nextQButton
      ) : (
        <div className="flex gap-14">
          <Button
            appearance="default"
            iconBefore={<ArrowLeftIcon label="pregunta anterior" />}
            onClick={() => setFormPage((prev: number) => prev - 1)}
          >
            Pregunta anterior
          </Button>
          {numPregunta === totalPreguntas ? (
            <Button
              appearance="primary"
              type="submit"
              value="Submit"
              onClick={handleSubmitwAnon}
            >
              Registrar respuestas
            </Button>
          ) : (
            nextQButton
          )}
        </div>
      )}
    </div>
  );
};

export default FormStep;
