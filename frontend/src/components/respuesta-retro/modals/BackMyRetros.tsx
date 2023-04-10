import Blanket from '@atlaskit/blanket';
import Button from '@atlaskit/button';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import InfoIcon from '@atlaskit/icon/glyph/info';
import WarningIcon from '@atlaskit/icon/glyph/warning';
import { FC, useEffect } from 'react';

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface BackMyRetrosProps {
  setIsModalBackOpen: (isOpen: boolean) => void;
}

const BackMyRetros: FC<BackMyRetrosProps> = ({
  setIsModalBackOpen,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('modal-open');

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

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
              onClick={() => setIsModalBackOpen(false)}
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
                ¿Deseas volver al panel de retrospectivas?
              </h3>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <WarningIcon label="warning" primaryColor="#FF0000" />
              <p className="flex text-xs text-textNormal">
                Perderás tus respuestas a las preguntas respondidas
                hasta el momento.
              </p>
            </div>
            <div
              className="flex items-center justify-between
            w-full gap-10"
            >
              <Button
                appearance="default"
                onClick={() => setIsModalBackOpen(false)}
              >
                Cancelar
              </Button>
              <Button
                appearance="primary"
                onClick={() => navigate('/mis-retrospectivas')}
              >
                Ir al panel de retrospectivas
              </Button>
            </div>
          </div>
        </motion.div>
      </Blanket>
    </>
  );
};

export default BackMyRetros;
