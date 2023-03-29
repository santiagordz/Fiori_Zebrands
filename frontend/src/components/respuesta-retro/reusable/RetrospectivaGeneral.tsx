import CheckIcon from '@atlaskit/icon/glyph/check';
import ChevronRightLargeIcon from '@atlaskit/icon/glyph/chevron-right-large';
import FlagFilledIcon from '@atlaskit/icon/glyph/flag-filled';
import { SimpleTag as Tag, TagColor } from '@atlaskit/tag';
import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PdfIcon from '@atlaskit/icon/glyph/pdf';

interface RetrospectivaGeneralProps {
  titulo: string;
  descripcion: string;
  fechaInicio: string;
  idRetrospectiva: number;
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
  idRetrospectiva,
  clickable = true,
  completada = false,
  tags,
  assigned = true,
}) => {
  const navigate = useNavigate();
  const [isInResponder, setIsInResponder] = useState<boolean>(false);
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

  return (
    <div
      className={`flex ${
        clickable && !isInResponder
          ? 'cursor-pointer'
          : 'cursor-default'
      }`}
      onClick={handleOnClick}
    >
      <div className="flex flex-col py-3 px-5 w-full rounded bg-white border border-solid border-gray-300">
        <div className="flex w-full justify-between ">
          <div className="gap-2 flex flex-row">
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
            ) : (
              <PdfIcon
                label="otra retrospectiva"
                primaryColor="#709ddb"
              />
            )}
            <h3 className="font-bold">{titulo}</h3>
          </div>
          <div className="flex flex-row">
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
        <div className="flex py-5 text-sm">
          <p>{descripcion}</p>
        </div>
        <div className="flex flex-row text-xs justify-between">
          <p>Fecha de inicio: {fechaInicio}</p>
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
