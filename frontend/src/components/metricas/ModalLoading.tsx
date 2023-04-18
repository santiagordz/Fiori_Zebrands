import Blanket from '@atlaskit/blanket';
import { motion } from 'framer-motion';
import { FC, useEffect } from 'react';
import Spinner from '../design-template/spinner/Spinner';

const ModalLoading: FC = ({}) => {
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
          <div className="flex flex-col bg-white rounded p-10 items-center justify-center drop-shadow-lg w-[30vw] h-[30vh]">
            <Spinner
              height="80%"
              message="Actualizando los datos de Jira, espera por favor..."
            />
          </div>
        </motion.div>
      </Blanket>
    </>
  );
};

export default ModalLoading;
