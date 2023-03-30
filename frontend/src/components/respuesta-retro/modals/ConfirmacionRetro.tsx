import Blanket from '@atlaskit/blanket';
import Button, { LoadingButton } from '@atlaskit/button';
import ErrorIcon from '@atlaskit/icon/glyph/error';
import JiraFailedBuildStatusIcon from '@atlaskit/icon/glyph/jira/failed-build-status';
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
    <div className="">
      <Blanket isTinted={true}>
        <div className="flex flex-col w-full h-full items-center justify-center">
          <div className="flex flex-col bg-white rounded px-20 py-14">
            <div className="flex justify-center items-center flex-col gap-5">
              <div className="">
                <JiraFailedBuildStatusIcon
                  label="confirmacion"
                  primaryColor="#1D7AFC"
                  size="xlarge"
                ></JiraFailedBuildStatusIcon>
              </div>

              <h2 className="font-bold text-lg">
                ¿Deseas registrar tus respuestas?
              </h2>
              <div className="flex items-center gap-2">
                <ErrorIcon label="error" primaryColor="#E34935" />
                <p className="flex flex-row text-xs text-danger">
                  No podrás editarlas después
                </p>
              </div>
              <div className="flex gap-10">
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
    </div>
  );
};

export default ConfirmacionRetro;
