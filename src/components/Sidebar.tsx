import React, { FC } from 'react';
import Avatar from '@atlaskit/avatar';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <>
      <div>
        <Avatar />
      </div>
    </>
  );
};

export default Sidebar;
