import React, { FC, useCallback, useState } from 'react'
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import Button, { ButtonGroup } from '@atlaskit/button';


interface AvisoProps {

    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
  
}

const Aviso: FC<AvisoProps> = ({ isOpen, setIsOpen  }) => {

  const closeModal = useCallback(() => setIsOpen(true), []);

  return (
      <div className=''>
        <ModalTransition>
        {isOpen && (
          <Modal onClose={closeModal}>
            <div>
              <h4>Algunos recordatorios antes de comenzar</h4>
              <p>
                Switch context, jump between projects, and get back to work
                quickly with our new look and feel.
              </p>
              <p>
                Take it for a spin and let us know what you think.
              </p>
              <ButtonGroup>
                <Button appearance="subtle-link">Remind me later</Button>
                <Button onClick={closeModal} appearance="primary" autoFocus>
                  Switch to the new Jira
                </Button>
              </ButtonGroup>
            </div>
          </Modal>
        )}
      </ModalTransition>
    </div>
  )
}

export default Aviso;