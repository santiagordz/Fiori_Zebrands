import React, { FC } from 'react'
import UsersTable from './UsersTable'



const TableWrapper = () => {
  return (
    <div className='box-content rounded-lg bg-dimBlue'>
        <div className='container rounded-lg'>
     <UsersTable />
     </div>
    </div>
  )
}

export default TableWrapper;