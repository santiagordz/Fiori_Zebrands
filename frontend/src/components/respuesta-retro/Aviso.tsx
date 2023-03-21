import Blanket from '@atlaskit/blanket';
import Button, { ButtonGroup } from '@atlaskit/button';
import EditorCloseIcon from '@atlaskit/icon/glyph/editor/close';
import ErrorIcon from '@atlaskit/icon/glyph/error';
import HipchatMediaAttachmentCountIcon from '@atlaskit/icon/glyph/hipchat/media-attachment-count';
import WarningIcon from '@atlaskit/icon/glyph/warning';
import { FC, useCallback } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BannerRetro from './BannerRetro';

interface AvisoProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Aviso: FC<AvisoProps> = ({ isOpen, setIsOpen }) => {
  const closeModal = useCallback(() => setIsOpen(false), []);
  const navigate = useNavigate();
  const { retroId } = useParams();

  return (
    <div className="">
      <Blanket isTinted={true}>
        <div className="flex flex-col w-full h-full items-center justify-center">
          <div className="flex flex-col bg-white rounded p-10 gap-10">
            <div className="flex justify-between">
              <h3 className="font-bold">
                Algunos recordatorios antes de comenzar
              </h3>
              <div className="cursor-pointer" onClick={closeModal}>
                <EditorCloseIcon
                  label="close"
                  primaryColor="#44546F"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="flex font-bold text-sm ">Accionables</h4>
              <p className="text-xs max-w-xl">
                Es importante atender los accionables con mayor
                prioridad cuanto antes para evitar que se acumulen en
                futuros Sprints.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <ErrorIcon label="error" primaryColor="#E34935" />
                <p className="flex flex-row text-xs text-danger">
                  Tienes 3 accionables en alta prioridad
                </p>
              </div>
              <div className="flex flex-row items-centerr">
                <WarningIcon label="warning" primaryColor="#D97008" />
                <p className="text-xs text-mediumDanger flex items-center">
                  Tienes dos accionables en prioridad media
                </p>
              </div>
              <div className="flex flex-row items-center ">
                <HipchatMediaAttachmentCountIcon
                  label="bolita"
                  primaryColor="#22A06B"
                />
                <p className="text-xs text-green">
                  Tienes un accionable en prioridad baja
                </p>
              </div>
            </div>
            <div className="flex justify justify-end">
              <Link
                to="/mis-accionables"
                className="flex text-xs text-selectBold"
              >
                Ir a mis accionables
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="flex font-bold text-sm">
                Retrospectivas
              </h4>
              <p className="text-xs max-w-xl">
                Te recordamos que tienes las siguientes retrospectivas
                pendientes de contestar, te recomendamos atender las
                más antiguas primero.
              </p>
              <div className="flex gap-3">
                <BannerRetro
                  titulo={''}
                  fechaInicio={''}
                  idRetrospectiva={0}
                />
              </div>
            </div>
            <ButtonGroup>
              <Link to="/mis-retrospectivas">
                <Button appearance="subtle-link">
                  Regresar a mis retrospectivas
                </Button>
              </Link>
              <Button
                className="flex items-center"
                appearance="primary"
                autoFocus
                onClick={() => {
                  closeModal();
                  navigate(
                    `/mis-retrospectivas/responder/${retroId}/preguntas/`
                  );
                }}
              >
                Continuar con la retrospectiva
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Blanket>
    </div>
  );
};

export default Aviso;
