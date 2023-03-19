import React, { FC, useState } from 'react';
import BotonGestionarEtiquetas from '../BotonGestionarEtiquetas';
import BotonRegistrarUsuario from '../BotonRegistrarUsuario';
import UsersTable from '../UsersTable';
import ModalRegistrarUsuario from '../ModalRegistraUsuario';

const TableWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center mt-10">
      <div className="w-5/6">
        <div className="flex justify-end gap-10">
          <button>
            <BotonGestionarEtiquetas />
          </button>
          <button onClick={() => setIsOpen(true)}>
            <BotonRegistrarUsuario />
          </button>
        </div>
        <br></br>
        <UsersTable />
      </div>
      <ModalRegistrarUsuario
        show={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default TableWrapper;
