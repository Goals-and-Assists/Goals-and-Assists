import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="mission" offset={-80} onClick={toggle}>
            Our Mission
          </SidebarLink>
          <SidebarLink to="support" offset={-80} onClick={toggle}>
            How to Support
          </SidebarLink>
          <SidebarLink to="donate" offset={-80} onClick={toggle}>
            Donate
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
