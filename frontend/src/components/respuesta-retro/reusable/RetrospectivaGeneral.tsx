import CheckIcon from '@atlaskit/icon/glyph/check';
import ChevronRightLargeIcon from '@atlaskit/icon/glyph/chevron-right-large';
import FlagFilledIcon from '@atlaskit/icon/glyph/flag-filled';
import PdfIcon from '@atlaskit/icon/glyph/pdf';
import { SimpleTag as Tag, TagColor } from '@atlaskit/tag';
import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@atlaskit/icon/glyph/check-circle-outline';

interface RetrospectivaGeneralProps {
  titulo: string;
  descripcion: string;
  fechaInicio: string;
  fechaFin?: string;
  idRetrospectiva: number;
  enCurso?: boolean;
  clickable?: boolean;
  completada?: boolean;
  assigned?: boolean;
  tags: {
    id: number;
    etiqueta: string;
    id_color: number;
    color: TagColor;
  }[];
}

const RetrospectivaGeneral: FC<RetrospectivaGeneralProps> = ({
  titulo,
  descripcion,
  fechaInicio,
  fechaFin,
  idRetrospectiva,
  enCurso = true,
  clickable = true,
  completada = false,
  tags,
  assigned = true,
}) => {
  const navigate = useNavigate();
  const [isInResponder, setIsInResponder] = useState<boolean>(false);
  const [fechaInicioFormat, setFechaInicioFormat] =
    useState<string>('');
  const [fechaFinFormat, setFechaFinFormat] = useState<string>('');
  const location = useLocation().pathname;

  useEffect(() => {
    if (location.includes('responder')) {
      setIsInResponder(true);
    }
  }, []);

  const handleOnClick = () => {
    if (clickable && !isInResponder) {
      navigate(`/mis-retrospectivas/responder/${idRetrospectiva}`);
    }
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
      className={`flex ${
        clickable && !isInResponder
          ? 'cursor-pointer'
          : 'cursor-default'
      }`}
      onClick={handleOnClick}
    >
      <div
        className={`flex flex-col py-3 px-5 w-full gap-1 rounded bg-white ${
          !isInResponder
            ? 'hover:bg-[#fafbfc] border border-solid border-gray'
            : 'shadow-sm'
        }`}
      >
        <div className="flex w-full justify-between ">
          <div className="gap-2 flex flex-row items-center">
            {completada ? (
              <CheckIcon
                label="retrospectiva-completada"
                primaryColor="#12ab17"
              />
            ) : assigned ? (
              <FlagFilledIcon
                label="retrospectiva-pendiente"
                primaryColor="#8270DB"
              />
            ) : !enCurso ? (
              <CheckCircleOutlineIcon
                label="finalizar retrospectiva"
                primaryColor="#0055CC"
              />
            ) : (
              <PdfIcon
                label="otra retrospectiva"
                primaryColor="#709ddb"
              />
            )}
            <h3 className="font-bold text-sm">{titulo}</h3>
          </div>
          <div
            className={`${
              tags.length > 3 ? 'grid grid-cols-2' : 'flex flex-row'
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
          </div>
        </div>
        <div className="flex text-[0.8rem]">
          <p>{descripcion}</p>
        </div>
        <div className="flex flex-row text-[0.7rem] justify-between mt-3">
          <p>Fecha de inicio: {fechaInicioFormat}</p>
          {fechaFinFormat && !enCurso && (
            <p>Fecha de fin: {fechaFinFormat}</p>
          )}
          {!isInResponder && (
            <ChevronRightLargeIcon
              label="flecha"
              primaryColor="#1D7AFC "
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RetrospectivaGeneral;
