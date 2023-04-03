import { Checkbox } from '@atlaskit/checkbox';
import { SimpleTag as Tag } from '@atlaskit/tag';
import { FC } from 'react';
import DropdownMenu from '../../../../design-template/dropdown/DropdownMenu';
import DragHandlerIcon from '@atlaskit/icon/glyph/drag-handler';

interface PreguntaProps {
  pregunta: string;
  id: number;
  isChecked: boolean;
  tipo: number;
  handleChecked: (checked: boolean, id: number) => void;
}

interface tiposPreguntaType {
  [key: number]: string;
}

const tiposPregunta: tiposPreguntaType = {
  1: 'Párrafo',
  2: 'Respuesta corta',
  3: 'Lista desplegable',
  4: 'Escala numérica',
};

const Pregunta: FC<PreguntaProps> = ({
  pregunta,
  id,
  isChecked,
  tipo,
  handleChecked,
}) => {
  return (
    <div className="w-full flex justify-between items-center bg-[#E9F2FF] py-2 px-4 rounded">
      <div className="flex items-center gap-2">
        <Checkbox
          isChecked={isChecked}
          onClick={() => handleChecked(isChecked, id)}
        />
        <p className="text-textNormal text-[0.8rem] font-semibold">
          {pregunta}
        </p>
      </div>
      <div className="flex items-center">
        <div id="tag" className="scale-[0.9]">
          <Tag
            text={tiposPregunta[tipo]}
            appearance="rounded"
            color="green"
          />
        </div>
        <DropdownMenu>
          <button className="bg-white hover:bg-[#f1f2f4] text-sm inline-block whitespace-nowrap py-[0.35rem] px-5 text-textNormal">
            Editar
          </button>
          <button className="bg-white hover:bg-[#fff5f5] text-sm inline-block whitespace-nowrap py-[0.35rem] px-5 text-danger">
            Eliminar pregunta
          </button>
        </DropdownMenu>
        <DragHandlerIcon label="drag" />
      </div>
    </div>
  );
};

export default Pregunta;
