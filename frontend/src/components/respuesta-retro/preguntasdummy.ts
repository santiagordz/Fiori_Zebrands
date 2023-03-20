export const preguntas = [
  {
    id_pregunta: 1,
    pregunta:
      '¿Qué hicimos bien en el Sprint que vale la pena mencionar?',
    tipo: { id_tipo_pregunta: 1, tipo: 'texto largo' },
  },
  {
    id_pregunta: 2,
    pregunta:
      '¿Qué hicimos mal que debemos de hacer diferente en el siguiente sprint?',
    tipo: { id_tipo_pregunta: 2, tipo: 'texto' },
  },
  {
    id_pregunta: 3,
    pregunta: '¿Qué nos causa ruido?',
    tipo: { id_tipo_pregunta: 1, tipo: 'texto largo' },
  },
  {
    id_pregunta: 4,
    pregunta: '¿Qué impedimento tuvimos en este sprint?',
    tipo: {
      id_tipo_pregunta: 3,
      tipo: 'select',
      opciones: ['uno', 'dos', 'tres'],
    },
  },
];

export const retrospective = {
  id_retrospectiva: 12342543425,
  descripcion: 'Retrospectiva del Sprint 1',
  titulo: '12 de febrero de 2023',
  fechaInicio: '2023-02-12',
  fechaFin: '2023-02-19',
  preguntas: preguntas,
};
