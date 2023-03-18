import Pregunta from './components/preguntas/Pregunta';
import '@atlaskit/css-reset';
import { useCallback, useState } from 'react';
import Button from '@atlaskit/button/standard-button';
import { css, jsx } from '@emotion/react';

import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from '@atlaskit/modal-dialog';
import GestionarRetrospectiva from './components/GestionarRetrospectiva/GestionarRetrospectiva';

const boldStyles = css({
  fontWeight: 'bold',
});

function App() {
  return (
    <div>
      <GestionarRetrospectiva />
    </div>
  );
}

export default App;
