import React, { FC } from 'react';
import UsersTable from './UsersTable';

const TableWrapper = () => {
  return (
    <div className="border-y-[33px] border-x-[40px] border-dimBlue rounded-md max-w-[1125px] absolute top-6 left-1/4">
      <UsersTable />
    </div>
  );
};

export default TableWrapper;
