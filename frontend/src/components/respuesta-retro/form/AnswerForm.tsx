import React, { FC } from 'react';
import { ProgressTracker, Stages } from '@atlaskit/progress-tracker';
import Button, { ButtonGroup, LoadingButton } from '@atlaskit/button';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import ArrowRightIcon from '@atlaskit/icon/glyph/arrow-right';
import { preguntas } from './preguntasdummy';
import TiposPregunta from './TiposPregunta';

import Form, { Field, FormFooter } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';

interface AnswerFormProps {}

const items: Stages = [
  {
    id: '1',
    label: '',
    percentageComplete: 50,
    status: 'current',
    href: '#',
  },
  {
    id: '2',
    label: '',
    percentageComplete: 0,
    status: 'unvisited',
    href: '#',
  },
  {
    id: '3',
    label: '',
    percentageComplete: 0,
    status: 'unvisited',
    href: '#',
  },
  {
    id: '4',
    label: '',
    percentageComplete: 0,
    status: 'unvisited',
    href: '#',
  },
  {
    id: '5',
    label: '',
    percentageComplete: 0,
    status: 'unvisited',
    href: '#',
  },
];

const UsernameField = () => (
  <Field
    aria-required={true}
    name="username"
    defaultValue=""
    label="Username"
    isRequired
  >
    {({ fieldProps, error, valid }) => <TextField {...fieldProps} />}
  </Field>
);

const AnswerForm: FC<AnswerFormProps> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 bg-white w-full h-full px-28 py-5 rounded">
      <ProgressTracker items={items} spacing="compact" />
      <div>
        <div className="flex flex-col items-center justify-center">
          <p className="uppercase text-selectBold text-xs font-bold">
            Pregunta 1/5
          </p>
          <h2 className="text-[#5E4DB2] text-2xl font-bold">
            ¿Qué acciones tomarás para el siguiente Sprint?
          </h2>
          <Form<{ username: string }>
            onSubmit={(data) => {
              console.log('form data', data);
              return new Promise((resolve) =>
                setTimeout(resolve, 2000)
              ).then(() =>
                data.username === 'error'
                  ? { username: 'IN_USE' }
                  : undefined
              );
            }}
          >
            {({ formProps, submitting }) => (
              <form {...formProps}>
                <UsernameField />
                <FormFooter>
                  <ButtonGroup>
                    <Button appearance="subtle">Cancel</Button>
                    <LoadingButton
                      type="submit"
                      appearance="primary"
                      isLoading={submitting}
                    >
                      Submit
                    </LoadingButton>
                  </ButtonGroup>
                </FormFooter>
              </form>
            )}
          </Form>
        </div>
        <div className="flex items-center justify-center">
          <ButtonGroup>
            <Button
              isDisabled={true}
              appearance="subtle-link"
              iconBefore={<ArrowLeftIcon label="pregunta anterior" />}
            >
              Pregunta anterior
            </Button>
            <Button
              appearance="primary"
              iconAfter={
                <ArrowRightIcon label="pregunta siguiente" />
              }
            >
              Siguiente pregunta
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default AnswerForm;
