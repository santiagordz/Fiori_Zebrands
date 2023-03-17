import React, { FC } from 'react';
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
} from 'react-pro-sidebar';

interface SidebarComponentProps {}

const SidebarComponent: FC<SidebarComponentProps> = ({}) => {
  const { collapseSidebar, toggleSidebar } = useProSidebar();
  return (
    <Sidebar
      backgroundColor="white"
      onMouseEnter={() => toggleSidebar()}
      onMouseLeave={() => collapseSidebar()}
    >
      <Menu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;
