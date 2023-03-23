import ChevronRightLargeIcon from '@atlaskit/icon/glyph/chevron-right-large';
import FlagFilledIcon from '@atlaskit/icon/glyph/flag-filled';
import { SimpleTag as Tag } from '@atlaskit/tag';
import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface RetrospectivaGeneralProps {
  titulo: string;
  descripcion: string;
  fechaInicio: string;
  idRetrospectiva: number;
}

const RetrospectivaGeneral: FC<RetrospectivaGeneralProps> = ({
  titulo,
  descripcion,
  fechaInicio,
  idRetrospectiva,
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
    if (!isInResponder) {
      navigate(`/mis-retrospectivas/responder/${idRetrospectiva}`);
    } else {
      null;
    }
  };

  return (
    <div
      className={`flex ${!isInResponder && 'cursor-pointer'}`}
      onClick={handleOnClick}
    >
      <div className="flex flex-col py-3 px-5 w-full rounded bg-white border border-solid border-gray-300">
        <div className="flex w-full justify-between ">
          <div className="gap-4 flex flex-row">
            <FlagFilledIcon
              label="retrospectiva-pendiente"
              primaryColor="#8270DB"
            />
            <h3 className="font-bold">{titulo}</h3>
          </div>
          <div className="flex flex-row gap-4 ml-auto">
            <p>FALTA RELACION RETROSPECTIVA ETIQUETA</p>
            <div id="tag">
              <Tag
                text="Back end"
                appearance="rounded"
                color="yellowLight"
              />
            </div>
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
