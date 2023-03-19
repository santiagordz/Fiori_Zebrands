import React, { FC, useState } from 'react';
import ModalGestionarEtiquetas from '../ModalGestionarEtiquetas';

interface GestionarEtiquetasProps {}

const GestionarEtiquetas: FC<GestionarEtiquetasProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Gestionar Etiquetas
      </button>
      <ModalGestionarEtiquetas
        show={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default GestionarEtiquetas;
