interface StepInformation {
  title: string;
  description: string;
}

export const stepsInformation: Array<StepInformation> = [
  {
    title: 'Detalles de la retrospectiva',
    description: 'Agrega los detalles básicos de la retrospectiva',
  },
  {
    title: 'Selecciona las preguntas',
    description:
      'Elige las preguntas necesarias para satisfacer las necesidades de la retrospectiva',
  },
  {
    title: 'Selecciona los participantes',
    description:
      'Solo los usuarios seleccionados podrán responder las preguntas de esta retrospectivalen pero cualquiera podrá ver los resultados',
  },
];
