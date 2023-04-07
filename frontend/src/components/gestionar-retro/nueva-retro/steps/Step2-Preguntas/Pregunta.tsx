import { Checkbox } from '@atlaskit/checkbox';
import { SimpleTag as Tag } from '@atlaskit/tag';
import { FC, useState } from 'react';
import DropdownMenu from '../../../../design-template/dropdown/DropdownMenu';
import { EliminarPregunta, EditarPregunta } from './modals';
import { type AppearanceTypes } from '@atlaskit/flag';

interface PreguntaProps {
  pregunta: string;
  id: number;
  isChecked: boolean;
  tipo: number;
  handleChecked: (checked: boolean, id: number) => void;
  addFlag: (
    title: string,
    icon: React.ReactNode,
    appearance: AppearanceTypes
  ) => void;
}

export interface tiposPreguntaType {
  [key: number]: string;
}

export const tiposPregunta: tiposPreguntaType = {
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
  addFlag,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] =
    useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] =
    useState<boolean>(false);
  return (
    <div className="w-full flex justify-between items-center bg-[#E9F2FF] py-2 px-4 rounded">
      {isDeleteModalOpen && (
        <EliminarPregunta
          addFlag={addFlag}
          pregunta={pregunta}
          id_tipo_pregunta={tipo}
          id_pregunta={id}
          predeterminada={isChecked}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />
      )}
      {isEditModalOpen && (
        <EditarPregunta
          addFlag={addFlag}
          id_tipo_pregunta={tipo}
          id_pregunta={id}
          predeterminada={isChecked}
          setIsEditModalOpen={setIsEditModalOpen}
        />
      )}
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
          <button
            type="button"
            onClick={() => setIsEditModalOpen(true)}
            className="bg-white hover:bg-[#f1f2f4] text-sm inline-block whitespace-nowrap py-[0.35rem] px-5 text-textNormal"
          >
            Editar
          </button>
          <button
            type="button"
            onClick={() => setIsDeleteModalOpen(true)}
            className="bg-white hover:bg-[#fff5f5] text-sm inline-block whitespace-nowrap py-[0.35rem] px-5 text-danger"
          >
            Eliminar
          </button>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Pregunta;
