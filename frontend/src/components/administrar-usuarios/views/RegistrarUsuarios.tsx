import { useCallback, useState, useEffect } from 'react';

import { css, jsx } from '@emotion/react';

import Button from '@atlaskit/button/standard-button';

import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from '@atlaskit/modal-dialog';

const boldStyles = css({
  fontWeight: 'bold',
});

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMOdal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // const openModal = useCallback(() => setIsOpen(true), []);
  // const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <div>
      <Button
        appearance="primary"
        onClick={() => console.log('Clicked')}
      >
        Open modal
      </Button>

      <ModalTransition>
        {isOpen && (
          <Modal onClose={closeModal}>
            <ModalHeader>
              <ModalTitle>Duplicate this page</ModalTitle>
            </ModalHeader>
            <ModalBody>
              Duplicating this page will make it a child page of{' '}
              <span>Search - user exploration</span>, in the{' '}
              <span>Search & Smarts</span> space.
            </ModalBody>
            <ModalFooter>
              <Button appearance="subtle" onClick={closeModal}>
                Cancel
              </Button>
              <Button
                appearance="primary"
                onClick={closeModal}
                autoFocus
              >
                Duplicate
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </ModalTransition>
    </div>
  );
};

export default Example;
