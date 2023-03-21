import React, { FC, useContext, useState } from 'react';
import TextField from '@atlaskit/textfield';
import Select from '@atlaskit/select';
import TextArea from '@atlaskit/textarea';
import { formDataContext } from './formulario-retro/FormDataProvider';
import { ErrorMessage, Field, HelperMessage } from '@atlaskit/form';

interface TiposPreguntaProps {
  idTipoPregunta: number;
  opciones?: Array<string>;
  idPregunta: number;
  onChange: (e: any) => void;
  setIsError: (e: boolean) => void;
}

const TiposPregunta: FC<TiposPreguntaProps> = ({
  idTipoPregunta,
  opciones,
  idPregunta,
  onChange,
  setIsError,
}) => {
  const { formData, setFormData } = useContext(formDataContext);
  const value = formData[idPregunta.toString()];

  const options =
    opciones &&
    opciones.map((opcion) => {
      return {
        label: opcion,
        value: opcion.toLowerCase(),
      };
    });

  const label = () => {
    switch (idTipoPregunta) {
      case 1:
        return 'Escribe tu respuesta aquí';
      case 2:
        return 'Escribe tu respuesta aquí';
      case 3:
        return 'Selecciona una opción de la lista';
      default:
        return 'Escribe tu respuesta aquí';
    }
  };

  return (
    <Field
      aria-required={true}
      name={`q_${idPregunta.toString()}`}
      label={label()}
    >
      {({ fieldProps, error }) => {
        switch (idTipoPregunta) {
          case 1:
            return (
              <>
                <TextArea
                  {...fieldProps}
                  resize="vertical"
                  maxHeight="20vh"
                  placeholder="Escribe tu respuesta aquí"
                  onChange={onChange}
                  value={value}
                />
                <div className="w-full flex justify-end">
                  <HelperMessage>
                    Caracteres: {value ? value.length : 0} / 500
                  </HelperMessage>
                </div>
                {value && value.length > 500 ? (
                  <>
                    {setIsError(true)}
                    <ErrorMessage>
                      El texto sobrepasa de los caracteres permitidos
                    </ErrorMessage>
                  </>
                ) : (
                  setIsError(false)
                )}
              </>
            );

          case 2:
            return (
              <TextField
                {...fieldProps}
                width={'100%'}
                aria-required={true}
                defaultValue=""
                onChange={onChange}
                value={value}
              />
            );
          case 3:
            return (
              <Select
                {...fieldProps}
                isClearable={true}
                options={options}
                placeholder="Selecciona una opción"
                onChange={(e) => {
                  const key: string = idPregunta.toString();
                  setFormData({ ...formData, [key]: e?.label });
                }}
                value={{ label: value, value: value }}
              />
            );
          default:
            return (
              <TextArea
                {...fieldProps}
                resize="vertical"
                maxHeight="20vh"
                placeholder="Escribe tu respuesta aquí"
                onChange={onChange}
                value={value}
              />
            );
        }
      }}
    </Field>
  );
};

export default TiposPregunta;
