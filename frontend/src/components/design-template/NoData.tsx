import Button from '@atlaskit/button';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import Lottie from 'lottie-react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Empty from '../../assets/lotties/nodata.json';

interface NotFound404Props {}

const NoData: FC<NotFound404Props> = ({}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center gap-9 w-full py-20">
      <div className="w-1/2">
        <Lottie
          animationData={Empty}
          loop={true}
          className="w-full"
        />
      </div>
      <div className="w-full items-center justify-center flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-information">
          Uy! Parece que ¡Oh no! Hubo un error al recuperar los datos.
        </h2>

        <div>
          <Button
            onClick={() => {
              navigate(-1);
            }}
            appearance="primary"
            iconBefore={
              <ArrowLeftIcon label="volver" primaryColor="white" />
            }
          >
            Regresar a una zona segura
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NoData;
