import React from 'react';
import DynamicTable from '@atlaskit/dynamic-table';
import TableHead from './TableHead';
import TableRows from './TableRows';
import './css/table.css';

const UsersTable = () => {
  return (
    <div className="max-w-[1125px] bg-white rounded-lg border-8 border-white">
      <DynamicTable
        head={TableHead}
        rows={TableRows}
        emptyView={<div className="text-3xl">No hay registros</div>}
        rowsPerPage={10}
      />
    </div>
  );
};

export default UsersTable;
