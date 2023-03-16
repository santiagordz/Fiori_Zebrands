import React, { FC } from 'react';
import Avatar from '@atlaskit/avatar';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <>
      <div>
        <Avatar />
      </div>
    </>
  );
};

export default Sidebar;
