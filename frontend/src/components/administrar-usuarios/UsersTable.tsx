import React from 'react';
import DynamicTable from '@atlaskit/dynamic-table';
import TableHead from './TableHead';
import TableRows from './TableRows';
import './css/table.css';

const UsersTable = () => {
  return (
    <>
      <DynamicTable head={TableHead} rows={TableRows} emptyView={<div className="text-3xl">No hay registros</div>} rowsPerPage={8}/>
    </>
  );
};

export default UsersTable;
