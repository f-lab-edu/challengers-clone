"use client";

import { GLOBAL_MENU, GlobalMenus } from "@/constants/constants";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const GlobalNav = () => {
  const pathname = usePathname() as keyof GLOBAL_MENU;
  const menu: GLOBAL_MENU[keyof GLOBAL_MENU] = GlobalMenus[pathname];

  if (menu == undefined) return null;

  return (
    <Nav>
      <Ul>
        <Menu key={menu.title}>
          <span>{menu.title}</span>
          <IconWrapper>
            <span onClick={menu.actions.first}>{menu.firstIcon}</span>
            <span onClick={menu.actions.second}>{menu.secondIcon}</span>
            <span onClick={menu.actions?.third}>{menu?.thirdIcon}</span>
          </IconWrapper>
        </Menu>
      </Ul>
    </Nav>
  );
};

export default GlobalNav;

const Nav = styled.nav`
  width: 100%;
  position: relative;
  height: 60px;
  background: white;
`;

const Ul = styled.ul`
  width: 100%;
  padding: 8px;
`;

const Menu = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span:first-child {
    font-weight: 500;
    font-size: 24px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  & span {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  & :not(:last-child) {
    margin-right: 16px;
  }
`;
