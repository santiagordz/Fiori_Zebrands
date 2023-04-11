import Button from '@atlaskit/button';
import { ErrorMessage, HelperMessage } from '@atlaskit/form';
import ArrowRightIcon from '@atlaskit/icon/glyph/arrow-right';
import TextArea from '@atlaskit/textarea';
import React, { FC, useContext, useState } from 'react';
import Select from 'react-select';
import { newRetroContext } from '../../local-contexts';
import axios from 'axios';

const URI = "http://localhost:8000/sprints"

interface Sprint {
  nombre: string;
}

const response = await axios.get(URI);
const options = response.data.map((sprint: Sprint) => ({
  label: sprint.nombre}))

const maxCaracteres = 250;

interface Step1Props {
  setStepNumber: (updater: (prev: number) => number) => void;
  stepNumber: number;
}

const Step1: FC<Step1Props> = ({ setStepNumber, stepNumber }) => {
  const { newRetro, setNewRetro } = useContext(newRetroContext);
  const [descripcion, setDescripcion] = useState<string>('');
  const [isDateSelected, setIsDateSelected] =
    useState<boolean>(false);
  const [showMaxDescriptionWarning, setShowMaxDescriptionWarning] =
    useState<boolean>(false);

  const handleDescripcionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    setNewRetro({
      ...newRetro,
      descripcion: value,
    });
    setDescripcion(value);
    setShowMaxDescriptionWarning(value.length > maxCaracteres);
  };

  const handleTituloChange = (value: any) => {
    setNewRetro({
      ...newRetro,
      titulo: value.label,
    });
    setIsDateSelected(true);
  };

  const isValidDescripcion = descripcion.length <= maxCaracteres;

  const selectStyles = {
    control: (base: any, state: any) => ({
      ...base,
      borderColor: '#dbdbdb',
      borderRadius: '0.125rem',
      borderWidth: 2,
    }),
    placeholder: (base: any) => ({
      ...base,
      color: '#979caa',
    }),
  };

  return (
    <>
      <span
        className={`flex flex-col gap-10 w-full text-left ${
          stepNumber === 1 ? '' : 'hidden'
        }`}
      >
        <div className="flex flex-col gap-y-4 px-[8vmin] w-full">
          <div className="w-full flex flex-col gap-3">
            <div>
              <p className="font-semibold text-xs after:content-['*'] after:text-[#ae2a19] text-label">
                Título
              </p>
              <p className="text-xs text-[#626F86] mt-1">
                La fecha del sprint seleccionado será el título de la
                retrospectiva.
              </p>
            </div>
            <Select
              styles={selectStyles}
              className="text-xs"
              options= {options}
              onChange={handleTituloChange}
              placeholder="Selecciona un sprint"
            />
          </div>
          <div className="mt-5">
            <p className="font-semibold text-xs">Descripción</p>
            <p className="text-xs text-[#626F86] mt-1 mb-3">
              La descripción es opcional pero te recomendamos escribir
              una para que los usuarios conozcan el objetivo principal
              de la retrospectiva.
            </p>
            <TextArea
              resize="vertical"
              maxHeight="20vh"
              name="descripcion"
              value={descripcion}
              onChange={handleDescripcionChange}
              placeholder="Escribe una descripción para tu retrospectiva"
            />

            <div className="w-full flex flex-col justify-end items-end">
              <HelperMessage>
                Caracteres: {descripcion.length} / 250
              </HelperMessage>
              {showMaxDescriptionWarning && (
                <ErrorMessage>
                  Tu respuesta excede el número de caracteres
                  permitidos
                </ErrorMessage>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full items-center justify-center mt-4">
          {!isDateSelected && (
            <p className="text-xs text-information font-medium">
              Elige un título de la lista para continuar.
            </p>
          )}
          <Button
            appearance="primary"
            iconAfter={<ArrowRightIcon label="siguiente paso" />}
            isDisabled={!isDateSelected || !isValidDescripcion}
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
