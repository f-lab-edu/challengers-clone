"use client";

import { GlobalMenus } from "@/constants/constants";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const GlobalNav = () => {
  const pathname = usePathname() as keyof typeof GlobalMenus;
  const menu = GlobalMenus[pathname];

  return (
    <Nav>
      <Ul>
        <Menu key={menu.title}>
          <span>{menu.title}</span>
          <IconWrapper>
            <span>{menu.firstIcon}</span>
            <span>{menu.secondtIcon}</span>
          </IconWrapper>
        </Menu>
      </Ul>
    </Nav>
  );
};

export default GlobalNav;

const Nav = styled.nav`
  width: 100%;
`;

const Ul = styled.ul`
  width: 100%;
  padding: 8px;
`;

const Menu = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  display: flex;
  & :first-child {
    margin-right: 8px;
  }
`;
