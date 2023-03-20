import React, { FC, useState } from 'react';
import { ProgressTracker, Stages } from '@atlaskit/progress-tracker';
import RetrospectivaGeneral from './RetrospectivaGeneral';

import { preguntas, preguntasType } from './RetroDomi';
import TiposPregunta from './TiposPregunta';
import Form, {
  Field,
  HelperMessage,
  ErrorMessage,
} from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import FormStep from './FormStep';

interface CuestionarioProps {}

const Cuestionario: FC<CuestionarioProps> = ({}) => {
  const [formPage, setFormPage] = useState(0);
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
    <div className="flex flex-col items-center justify-center gap-8 bg-white w-full h-full px-28 py-12 rounded border border-solid border-gray-300">
      <div className="w-1/3 flex items-center justify-center">
        <ProgressTracker items={items} spacing="compact" />
      </div>
      <div className="flex flex-col items-center justify-center w-full"></div>
      <FormStep
        numPregunta={preguntas.indexOf(preguntas[formPage]) + 1}
        totalPreguntas={items.length}
        pregunta={preguntas[formPage].pregunta}
        idTipoPregunta={preguntas[formPage].tipo.id_tipo_pregunta}
        setFormPage={setFormPage}
      />
      <div className="flex items-center justify-center"></div>
    </div>
  );
};

export default Cuestionario;
