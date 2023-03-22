import Blanket from '@atlaskit/blanket';
import Button from '@atlaskit/button';
import ErrorIcon from '@atlaskit/icon/glyph/error';
import JiraFailedBuildStatusIcon from '@atlaskit/icon/glyph/jira/failed-build-status';
import { FC, useCallback, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { formDataContext } from './formulario-retro/FormDataProvider';

interface ConfirmacionRetroProps {
  setIsOpen: (isOpen: boolean) => void;
}

const ConfirmacionRetro: FC<ConfirmacionRetroProps> = ({
  setIsOpen,
}) => {
  const closeModal = useCallback(() => setIsOpen(false), []);
  const navigate = useNavigate();
  const { retroId } = useParams();

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

              <h2 className="font-bold">
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
                  className="!flex !items-center !p-2 !text-xs gap-6"
                  onClick={closeModal}
                >
                  Editar mis respuestas
                </Button>
                <Button
                  className="!flex !items-center !p-2 !text-xs gap-5"
                  appearance="primary"
                  type="submit"
                  value="submit"
                  onClick={() => {
                    closeModal();
                    navigate(
                      `/mis-retrospectivas/responder/${retroId}/respuestas/`
                    );
                  }}
                >
                  Registrar respuestas
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Blanket>
    </div>
  );
};

export default ConfirmacionRetro;
