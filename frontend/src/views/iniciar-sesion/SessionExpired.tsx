import Blanket from '@atlaskit/blanket';
import Button from '@atlaskit/button';
import { motion } from 'framer-motion';
import { FC, useEffect } from 'react';

interface SessionExpiredProps {
  handleCloseModal: () => void;
}

const SessionExpired: FC<SessionExpiredProps> = ({
  handleCloseModal,
}) => {
  useEffect(() => {
    document.body.classList.add('modal-open');

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);
  return (
    <Blanket isTinted>
      <motion.div
        animate={{ opacity: 1 }}
        className="flex flex-col w-full h-full items-center justify-center opacity-0"
      >
        <div className="flex flex-col bg-white rounded px-5 py-10 gap-5 items-center justify-center drop-shadow-lg max-w-[30vw]">
          <div className="flex flex-col justify-center items-center gap-3 relative">
            <h3 className="font-bold text-modalSoft text-xl text-center px-3">
              La sesión ha expirado después de 1 hora de inactividad
            </h3>
          </div>
          <div className="w-full flex gap-2 items-center justify-center px-4">
            <p className="flex text-xs text-textNormal">
              Por favor, vuelve a iniciar sesión para continuar.
            </p>
          </div>
          <div
            className="flex items-center justify-center
            w-full gap-8 mt-2 scale-[0.9]"
          >
            <Button appearance="primary" onClick={handleCloseModal}>
              Volver a iniciar sesión
            </Button>
          </div>
        </div>
      </motion.div>
    </Blanket>
  );
};

export default SessionExpired;
