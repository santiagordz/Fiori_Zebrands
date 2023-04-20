import Blanket from '@atlaskit/blanket';
import Button from '@atlaskit/button';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import InfoIcon from '@atlaskit/icon/glyph/info';
import WarningIcon from '@atlaskit/icon/glyph/warning';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FC, useContext, useEffect } from 'react';
import { FlagContext } from '../../contexts';
import ErrorIcon from '@atlaskit/icon/glyph/error';

const URI = `/api/issues`;

interface ModalUpdateIssuesProps {
  setIsModalOpen: (isOpen: boolean) => void;
  setModalLoading: (isOpen: boolean) => void;
  getLastFetch: () => void;
}

const ModalUpdateIssue: FC<ModalUpdateIssuesProps> = ({
  setIsModalOpen,
  setModalLoading,
  getLastFetch,
}) => {
  const { addFlag } = useContext(FlagContext);
  useEffect(() => {
    document.body.classList.add('modal-open');

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  const postIssues = async () => {
    try {
      axios.post(URI).then(() => {
        setIsModalOpen(false);
        addFlag(
          `¡Excelente! Todos los datos de Jira se actualizaron correctamente.`,
          InfoIcon,
          'success'
        );
        getLastFetch();
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        addFlag(
          '¡Ups! Ocurrió un error al actualizar los datos de Jira. Por favor, intenta nuevamente.',
          ErrorIcon,
          'error',
          error.toString()
        );
      } else {
        console.log(error);
        addFlag(
          '¡Ups! Ocurrió un error al actualizar los datos de Jira. Por favor, intenta nuevamente.',
          ErrorIcon,
          'error',
          'Error desconocido'
        );
      }
    } finally {
      setModalLoading(false);
    }
  };

  const handleclick = () => {
    setIsModalOpen(false);
    setModalLoading(true);
    postIssues();
  };

  return (
    <>
      <Blanket isTinted={true}>
        <motion.div
          animate={{ opacity: 1 }}
          className="flex flex-col w-full h-full items-center justify-center opacity-0"
        >
          <div className="flex flex-col bg-white rounded p-10 gap-7 items-center justify-center drop-shadow-lg max-w-[42vw]">
            <div
              className="flex w-full absolute top-0 justify-end p-4"
              onClick={() => setIsModalOpen(false)}
            >
              <div className="flex items-center justify-center rounded- cursor-pointer p-1">
                <CrossIcon label="cerrar modal" size="small" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 relative">
              <InfoIcon
                label="informacion"
                primaryColor="#1D7AFC"
                size="xlarge"
              />
              <h3 className="font-bold text-modalSoft text-xl">
                ¿Deseas actualizar los datos provenientes de Jira?
              </h3>
            </div>
            <div className="flex gap-2 items-center justify-center pl-5">
              <WarningIcon label="warning" primaryColor="#FF0000" />
              <p className="text-xs text-textNormal">
                Esto puede tardar algunos minutos, te pedimos que
                tengas paciencia.{' '}
              </p>
            </div>
            <div
              className="flex items-center justify-center
              w-full gap-10"
            >
              <Button
                appearance="default"
                onClick={() => setIsModalOpen(false)}
              >
                Cancelar
              </Button>
              <Button
                appearance="primary"
                onClick={() => handleclick()}
              >
                Continuar
              </Button>
            </div>
          </div>
        </motion.div>
      </Blanket>
    </>
  );
};

export default ModalUpdateIssue;
