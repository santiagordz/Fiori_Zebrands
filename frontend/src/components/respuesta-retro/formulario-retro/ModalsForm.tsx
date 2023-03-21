import React, { FC } from 'react';
import Button, { ButtonGroup } from '@atlaskit/button';
import Blanket from '@atlaskit/blanket';
import InfoIcon from '@atlaskit/icon/glyph/info';
import WarningIcon from '@atlaskit/icon/glyph/warning';
import CrossIcon from '@atlaskit/icon/glyph/cross';

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface BackMyRetrosProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

export const BackMyRetros: FC<BackMyRetrosProps> = ({
  setIsModalOpen,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <Blanket isTinted={true}>
        <motion.div
          animate={{ opacity: 1 }}
          className="flex flex-col w-full h-full items-center justify-center opacity-0"
        >
          <div className="flex flex-col bg-white rounded p-10 gap-7 items-center justify-center drop-shadow-lg">
            <div
              className="flex w-full absolute top-0 justify-end p-4 cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              <CrossIcon label="cerrar modal" />
            </div>
            <div className="flex flex-col justify-center items-center gap-3 relative">
              <InfoIcon
                label="informacion"
                primaryColor="#1D7AFC"
                size="xlarge"
              />
              <h3 className="font-bold text-modalSoft text-xl">
                ¿Deseas volver a mis retrospectivas?
              </h3>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <WarningIcon label="warning" primaryColor="#FF0000" />
              <p className="flex font-bold text-xs text-danger">
                Perderás tu progreso de esta retrospectiva
              </p>
            </div>
            <div
              className="flex items-center justify-betw
            w-full gap-10"
            >
              <Button
                appearance="primary"
                onClick={() => navigate('/mis-retrospectivas')}
              >
                Ir a mis retrospectivas
              </Button>
              <Button
                appearance="default"
                onClick={() => setIsModalOpen(false)}
              >
                Continuar respondiendo
              </Button>
            </div>
          </div>
        </motion.div>
      </Blanket>
    </div>
  );
};
