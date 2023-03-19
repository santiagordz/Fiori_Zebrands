export const tipoPregunta = [
  { id_tipo_pregunta: 1, tipo: 'texto' },
  { id_tipo_pregunta: 2, tipo: 'opcion' },
  { id_tipo_pregunta: 3, tipo: 'opcion-multiple' },
];

export const preguntas = [
  {
    id_pregunta: 1,
    pregunta:
      '¿Qué hicimos bien en el Sprint que vale la pena mencionar?',
    tipo: { id_tipo_pregunta: 1, tipo: 'texto' },
  },
  {
    id_pregunta: 2,
    pregunta:
      '¿Qué hicimos mal que debemos de hacer diferente en el siguiente sprint?',
    tipo: { id_tipo_pregunta: 1, tipo: 'texto' },
  },
  {
    id_pregunta: 3,
    pregunta: '¿Qué nos causa ruido?',
    tipo: { id_tipo_pregunta: 1, tipo: 'texto' },
  },
  {
    id_pregunta: 4,
    pregunta: '¿Qué impedimento tuvimos en este sprint?',
    tipo: { id_tipo_pregunta: 1, tipo: 'texto' },
  },
  {
    id_pregunta: 5,
    pregunta: '¿Qué podemos hacer para mejorar?',
    tipo: { id_tipo_pregunta: 1, tipo: 'texto' },
  },
];
