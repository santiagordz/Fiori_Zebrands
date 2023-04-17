import axios from 'axios';
import { FC, useEffect, useState, useContext } from 'react';
import type { Retrospectiva } from '../../views/mis-retrospectivas/MisRetrospectivas';
import Spinner from '../design-template/spinner/Spinner';
import { motion } from 'framer-motion';
import Blanket from '@atlaskit/blanket';
import { FlagContext } from '../../contexts';
import Button from '@atlaskit/button';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import InfoIcon from '@atlaskit/icon/glyph/info';
import WarningIcon from '@atlaskit/icon/glyph/warning';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}`;

interface ModalLoadingProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

const ModalLoading: FC<ModalLoadingProps> = ({ setIsModalOpen }) => {
  const [tryFetch, setTryFetch] = useState(false);

  return (
    <>
      <Blanket isTinted={true}>
        <motion.div
          animate={{ opacity: 1 }}
          className="flex flex-col w-full h-full items-center justify-center opacity-0"
        >
          <div className="flex flex-col bg-white rounded p-10 gap-7 items-center justify-center drop-shadow-lg max-w-[42vw]">
            <Spinner message="Actualizando Issues de Jira..." />{' '}
          </div>
        </motion.div>
      </Blanket>
    </>
  );
};

export default ModalLoading;
