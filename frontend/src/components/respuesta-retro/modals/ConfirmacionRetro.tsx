import Blanket from '@atlaskit/blanket';
import Button, { LoadingButton } from '@atlaskit/button';
import ErrorIcon from '@atlaskit/icon/glyph/error';
import JiraFailedBuildStatusIcon from '@atlaskit/icon/glyph/jira/failed-build-status';
import EditorDoneIcon from '@atlaskit/icon/glyph/editor/done';
import { FC, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface ConfirmacionRetroProps {
  setIsModalNextOpen: (isOpen: boolean) => void;
  submitting: boolean;
  onSubmit: () => void;
  id_sesionRespuesta: string;
}

const ConfirmacionRetro: FC<ConfirmacionRetroProps> = ({
  setIsModalNextOpen,
  submitting,
  onSubmit,
  id_sesionRespuesta,
}) => {
  const closeModal = useCallback(() => setIsModalNextOpen(false), []);
  const navigate = useNavigate();
  const { retroId } = useParams();

  useEffect(() => {
    document.body.classList.add('modal-open');

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  return (
    <Blanket isTinted={true}>
      <div className="flex flex-col w-full h-full items-center justify-center px-6">
        <div className="flex flex-col bg-white rounded px-8 lg:px-20 py-14">
          <div className="flex justify-center items-center flex-col gap-5">
            <div className="">
              <EditorDoneIcon
                label="confirmacion"
                primaryColor="#22A06B"
                size="xlarge"
              ></EditorDoneIcon>
            </div>
            <h2 className="font-bold text-lg">
              ¡Muy bien! Has terminado de responder la retrospectiva
            </h2>
            <p className="text-xs">
              Solamente recuerda que una vez que hayas registrado tus
              respuestas,{' '}
              <span className="underline">
                no podrás editarlas después.
              </span>
            </p>
            <div className="flex items-center gap-2"></div>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-10">
              <Button
                appearance="subtle-link"
                className="!flex !items-center !p-2 !text-[0.9rem] gap-6"
                onClick={closeModal}
              >
                Editar mis respuestas
              </Button>
              <LoadingButton
                className="!flex !items-center !p-2 !text-[0.9rem] gap-5"
                appearance="primary"
                type="submit"
                onClick={() => {
                  onSubmit();
                  closeModal();
                  navigate(
                    `/mis-retrospectivas/responder/${retroId}/respuestas/${id_sesionRespuesta}`
                  );
                }}
                isLoading={submitting}
              >
                Registrar respuestas
              </LoadingButton>
            </div>
          </div>
        </div>
      </div>
    </Blanket>
  );
};

export default ConfirmacionRetro;
