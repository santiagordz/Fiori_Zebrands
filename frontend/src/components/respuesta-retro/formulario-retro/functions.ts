import { Stages } from '@atlaskit/progress-tracker';
import { preguntas, preguntasType } from '../RetroDomi';

export const getItems = (formPage: number) => {
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
  return items;
};
