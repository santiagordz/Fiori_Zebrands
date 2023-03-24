import React, { FC, useState } from 'react';
import BotonGestionarEtiquetas from '../BotonGestionarEtiquetas';
import BotonRegistrarEtiqueta from '../BotonRegistrarEtiqueta';
import EtiquetasTable from '../EtiquetasTable';

import ModalRegistrarEtiqueta from '../ModalRegistrarEtiqueta';

const GestionarEtiquetas = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center mt-10 flex-col">
      <h4>Gestionar Etiquetas</h4>
      <BotonGestionarEtiquetas />
      <button onClick={() => setIsOpen(true)}>
        <BotonRegistrarEtiqueta />
      </button>
      <div className="w-5/6 mt-20">
        <EtiquetasTable />
      </div>
      <ModalRegistrarEtiqueta
        show={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default GestionarEtiquetas;
