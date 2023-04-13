import CheckIcon from '@atlaskit/icon/glyph/check';
import ChevronRightLargeIcon from '@atlaskit/icon/glyph/chevron-right-large';
import FlagFilledIcon from '@atlaskit/icon/glyph/flag-filled';
import { SimpleTag as Tag, TagColor } from '@atlaskit/tag';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from '../../design-template/dropdown/DropdownMenu';
import DeleteRetro from '../modals/DeleteRetro';
import EndRetro from '../modals/EndRetro';

interface RetrospectivaThumbProps {
  titulo: string;
  descripcion: string;
  fechaInicio: string;
  fechaFin?: string;
  idRetrospectiva: number;
  completada?: boolean;
  respuestas: number;
  tags: {
    id: number;
    etiqueta: string;
    id_color: number;
    color: TagColor;
  }[];
  updateRetrospectivas?: () => void;
}

const RetrospectivaThumb: FC<RetrospectivaThumbProps> = ({
  titulo,
  descripcion,
  fechaInicio,
  fechaFin,
  idRetrospectiva,
  respuestas = 0,
  completada = false,
  tags,
  updateRetrospectivas,
}) => {
  const navigate = useNavigate();
  const [fechaInicioFormat, setFechaInicioFormat] =
    useState<string>('');
  const [fechaFinFormat, setFechaFinFormat] = useState<string>('');
  const [isEndModalOpen, setIsEndModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleOnClick = () => {
    navigate(`/mis-retrospectivas/respuestas/${idRetrospectiva}`);
  };

  useEffect(() => {
    const fecha_inicio = new Date(fechaInicio);

    const dia_inicio = fecha_inicio
      .getUTCDate()
      .toString()
      .padStart(2, '0');
    const mes_inicio = (fecha_inicio.getUTCMonth() + 1)
      .toString()
      .padStart(2, '0');
    const anio_inicio = fecha_inicio.getUTCFullYear().toString();

    setFechaInicioFormat(
      `${dia_inicio}/${mes_inicio}/${anio_inicio}`
    );
  }, [fechaInicio]);

  useEffect(() => {
    if (fechaFin) {
      const fecha_fin = new Date(fechaFin);
      const dia_fin = fecha_fin
        .getUTCDate()
        .toString()
        .padStart(2, '0');
      const mes_fin = (fecha_fin.getUTCMonth() + 1)
        .toString()
        .padStart(2, '0');
      const anio_fin = fecha_fin.getUTCFullYear().toString();

      setFechaFinFormat(`${dia_fin}/${mes_fin}/${anio_fin}`);
    }
  }, [fechaFin]);

  return (
    <div
      className={`flex flex-col py-3 px-5 w-full gap-3 rounded bg-white hover:bg-[#fafbfc] border border-solid border-gray cursor-pointer`}
      onClick={handleOnClick}
    >
      {isEndModalOpen && updateRetrospectivas && (
        <EndRetro
          setIsEndModalOpen={setIsEndModalOpen}
          idRetrospectiva={idRetrospectiva}
          titulo={titulo}
          updateRetrospectivas={updateRetrospectivas}
        />
      )}

      {isDeleteModalOpen && updateRetrospectivas && (
        <DeleteRetro
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          idRetrospectiva={idRetrospectiva}
          titulo={titulo}
          updateRetrospectivas={updateRetrospectivas}
        />
      )}
      <div className="flex w-full justify-between">
        <div className="flex items-start justify-start gap-2">
          {completada ? (
            <CheckIcon
              label="retrospectiva-completada"
              primaryColor="#12ab17"
            />
          ) : (
            <FlagFilledIcon
              label="retrospectiva-pendiente"
              primaryColor="#8270DB"
            />
          )}
          <div>
            <h3 className="font-bold text-sm">{titulo}</h3>
            {completada ? (
              <p className="text-xs text-gray-600">Finalizada</p>
            ) : (
              <p className="text-xs text-accentGreen">En curso</p>
            )}
          </div>
        </div>
        <div
          className={`${
            tags.length > 4 ? 'grid grid-cols-2' : 'flex flex-row'
          } items-end text-right`}
        >
          {tags &&
            tags.map(
              (tag: {
                id: number;
                etiqueta: string;
                color: TagColor;
              }) => (
                <div key={tag.id} id="tag">
                  <Tag
                    text={tag.etiqueta}
                    appearance="rounded"
                    color={tag.color}
                  />
                </div>
              )
            )}
          {!completada ? (
            <DropdownMenu>
              <button
                type="button"
                onClick={() => setIsEndModalOpen(true)}
                className="bg-white hover:bg-[#f1f2f4] text-xs inline-block whitespace-nowrap py-[0.35rem] px-5 text-textNormal"
              >
                Finalizar retrospectiva
              </button>
              <button
                type="button"
                onClick={() => setIsDeleteModalOpen(true)}
                className="bg-white hover:bg-[#fff5f5] text-xs inline-block whitespace-nowrap py-[0.35rem] px-5 text-danger"
              >
                Eliminar retrospectiva
              </button>
            </DropdownMenu>
          ) : (
            <DropdownMenu>
              <button
                type="button"
                onClick={() => setIsDeleteModalOpen(true)}
                className="bg-white hover:bg-[#fff5f5] text-xs inline-block whitespace-nowrap py-[0.35rem] px-5 text-danger"
              >
                Eliminar retrospectiva
              </button>
            </DropdownMenu>
          )}
        </div>
      </div>
      <span className="w-full flex justify-between">
        <p className="text-xs text-discovery font-medium">
          Respuestas registradas: {respuestas}
        </p>
      </span>
      {descripcion && (
        <div className="flex text-[0.8rem]">
          <p>{descripcion}</p>
        </div>
      )}
      <div className="flex flex-row text-[0.7rem] justify-between items-center">
        {fechaInicioFormat && (
          <p>Fecha de inicio: {fechaInicioFormat}</p>
        )}
        {fechaFinFormat && <p>Fecha de fin: {fechaFinFormat}</p>}
        <ChevronRightLargeIcon
          label="flecha"
          primaryColor="#1D7AFC "
        />
      </div>
    </div>
  );
};

export default RetrospectivaThumb;
