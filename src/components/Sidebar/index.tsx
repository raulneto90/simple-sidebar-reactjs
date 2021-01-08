import React from 'react';
import { Container, MenuItem, SidebarItems } from './styles';
import { SidebarData } from './sidebarData';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <SidebarItems>
        {SidebarData.map((value, key) => (
          <MenuItem id={window.location.pathname === value.path ? "active": ""} key={key} onClick={() => {window.location.pathname = value.path}}>
            {value.icon}
            <span>{value.title}</span>
          </MenuItem>
        ))}
      </SidebarItems>
    </Container>
  )
};

export default Sidebar;