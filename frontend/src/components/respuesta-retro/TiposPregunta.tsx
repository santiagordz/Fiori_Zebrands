import React, { FC } from 'react';
import TextField from '@atlaskit/textfield';
import Select from '@atlaskit/select';
import TextArea from '@atlaskit/textarea';

interface TiposPreguntaProps {
  idTipoPregunta: number;
  opciones?: Array<string>;
}

const TiposPregunta: FC<TiposPreguntaProps> = ({
  idTipoPregunta,
  opciones,
}) => {
  const options =
    opciones &&
    opciones.map((opcion) => {
      return {
        label: opcion,
        value: opcion.toLowerCase(),
      };
    });

  const longTextField = (
    <TextArea
      resize="auto"
      maxHeight="20vh"
      name="area"
      placeholder="Escribe tu respuesta aquí"
    />
  );

  const textField = (
    <TextField
      width={'100%'}
      aria-required={true}
      name="username"
      defaultValue=""
      label="Username"
      isRequired
    />
  );

  const selectField = (
    <Select
      // @ts-ignore
      inputId="single-select-example"
      options={options}
      placeholder="Selecciona una opción"
    />
  );

  switch (idTipoPregunta) {
    case 1:
      return longTextField;
    case 2:
      return textField;
    case 3:
      return selectField;
    default:
      return null;
  }
};

export default TiposPregunta;
