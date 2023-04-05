import { ReactComponent as ParagraphSVG } from '@/assets/icons/paragraph.svg';
import { ReactComponent as RangeSVG } from '@/assets/icons/range.svg';
import { ReactComponent as SelectSVG } from '@/assets/icons/select.svg';
import { ReactComponent as ShortTextSVG } from '@/assets/icons/short_text.svg';

export const tipos = [
  {
    value: 1,
    label: 'Párrafo',
    icon: ParagraphSVG,
  },
  {
    value: 2,
    label: 'Respuesta corta',
    icon: ShortTextSVG,
  },
  {
    value: 3,
    label: 'Lista desplegable',
    icon: SelectSVG,
  },
  {
    value: 4,
    label: 'Escala numérica',
    icon: RangeSVG,
  },
];
