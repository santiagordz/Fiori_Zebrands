import React from 'react';
import DynamicTable from '@atlaskit/dynamic-table';
import TableHead from './TableHead';
import TableRows from './TableRows';

const UsersTable = () => {
  return (
    <>
      <DynamicTable head={TableHead} rows={TableRows} />
    </>
  );
};

export default UsersTable;
