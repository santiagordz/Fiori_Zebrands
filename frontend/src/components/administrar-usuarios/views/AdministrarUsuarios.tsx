import React, { FC } from 'react';
import BotonGestionarEtiquetas from '../BotonGestionarEtiquetas';
import BotonRegistrarUsuario from '../BotonRegistrarUsuario';
import UsersTable from '../UsersTable';

const TableWrapper = () => {
  return (
    <div className="rounded-md max-w-[1125px] absolute top-6 left-1/4">
      <BotonGestionarEtiquetas/>
      <BotonRegistrarUsuario/>
      <br></br>
      <UsersTable />
    </div>
  );
};

export default TableWrapper;
