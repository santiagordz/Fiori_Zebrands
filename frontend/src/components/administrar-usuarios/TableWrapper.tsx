import React, { FC } from 'react';
import UsersTableCopy from './UsersTable copy';

const TableWrapper = () => {
  return (
    <div className="rounded-md max-w-[1125px] absolute top-6 left-1/4">
      <UsersTableCopy />
    </div>
  );
};

export default TableWrapper;
