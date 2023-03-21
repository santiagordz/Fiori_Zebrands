import React, { FC, useContext, useState } from 'react';
import { ProgressTracker, Stages } from '@atlaskit/progress-tracker';
import { preguntas, preguntasType } from '../RetroDomi';
import FormStep from './FormStep';
import { formDataContext } from './FormDataProvider';
import Form from '@atlaskit/form';
import Button from '@atlaskit/button';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import { BackMyRetros } from './ModalsForm';

interface CuestionarioProps {}

const Cuestionario: FC<CuestionarioProps> = ({}) => {
  const [formPage, setFormPage] = useState(0);
  const { formData, setFormData } = useContext(formDataContext);

  const items: Stages = preguntas.map(
    (pregunta: preguntasType, index: number) => {
      const isCurrent = index === formPage;
      const isVisited = index < formPage;
      return {
        id: pregunta.id_pregunta.toString(),
        label: '',
        percentageComplete: isCurrent ? 0 : isVisited ? 100 : 0,
        status: isCurrent
          ? 'current'
          : isVisited
          ? 'visited'
          : 'unvisited',
        href: '#',
      };
    }
  );

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white w-full h-full py-12 px-6 rounded border border-solid border-gray-300">
        <div className="w-full">
          <BackMyRetros />
          <Button
            className="!items-center !text-[0.85rem]"
            appearance="subtle-link"
            iconBefore={
              <ArrowLeftIcon label="volver a mis retrospectivas" />
            }
          >
            Volver a mis retrospectivas
          </Button>
        </div>
        <div className="w-full px-60 flex flex-col items-center justify-center gap-8">
          <div className="w-1/3 flex items-center justify-center">
            <ProgressTracker items={items} spacing="compact" />
          </div>
          <Form onSubmit={() => console.log(formData)}>
            {({ formProps }) => (
              <form
                {...formProps}
                className="flex flex-col items-center justify-center gap-9 w-full mb-5 text-center"
              >
                <FormStep
                  numPregunta={
                    preguntas.indexOf(preguntas[formPage]) + 1
                  }
                  totalPreguntas={items.length}
                  pregunta={preguntas[formPage].pregunta}
                  idTipoPregunta={
                    preguntas[formPage].tipo.id_tipo_pregunta
                  }
                  setFormPage={setFormPage}
                  idPregunta={preguntas[formPage].id_pregunta}
                />
              </form>
            )}
          </Form>
        </div>
      </div>
    </>
  );
};

export default Cuestionario;
