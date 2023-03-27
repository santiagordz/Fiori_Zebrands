import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import DesignTemplate from '../../design-template/DesignTemplate';
import BotonGestionarEtiquetas from '../BotonGestionarEtiquetas';
import BotonRegistrarEtiqueta from '../BotonRegistrarEtiqueta';
import EtiquetasTable from '../EtiquetasTable';

import ModalRegistrarEtiqueta from '../ModalRegistrarEtiqueta';

const GestionarEtiquetas = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DesignTemplate
      buttons={
        <>
          <Link to={'/administrar-usuarios'}>
            <BotonGestionarEtiquetas texto={'Usuarios'} />
          </Link>
          <button>
            <BotonRegistrarEtiqueta />
          </button>
        </>
      }
    >
      <div className="flex justify-center">
        <div className="flex">
          <div>.</div>
          <EtiquetasTable />
          <div>.</div>
        </div>
        <ModalRegistrarEtiqueta
          show={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </DesignTemplate>
  );
};

export default GestionarEtiquetas;
