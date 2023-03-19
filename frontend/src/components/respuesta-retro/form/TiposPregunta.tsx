import React, { FC } from 'react';
import TextField from '@atlaskit/textfield';
import { Field } from '@atlaskit/form';

interface TiposPreguntaProps {
  idType: number;
}

const TiposPregunta: FC<TiposPreguntaProps> = ({ idType }) => {
  return (
    <Field
      aria-required={true}
      name="username"
      defaultValue=""
      label="Username"
      isRequired
    >
      {({ fieldProps, error, valid }) => (
        <TextField {...fieldProps} />
      )}
    </Field>
  );
};

export default TiposPregunta;
