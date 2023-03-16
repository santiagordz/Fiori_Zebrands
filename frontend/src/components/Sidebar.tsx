import React, { FC } from 'react';
import Avatar from '@atlaskit/avatar';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <>
      <div className="bg-main">
        <Avatar />
      </div>
    </>
  );
};

export default Sidebar;
