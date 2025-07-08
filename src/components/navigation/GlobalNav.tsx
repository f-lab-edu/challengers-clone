"use client";

import { GlobalMenus } from "@/constants/constants";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const GlobalNav = () => {
  const pathname = usePathname() as keyof typeof GlobalMenus;
  const menu = GlobalMenus[pathname];

  if (menu == undefined) return <></>;

  return (
    <Nav>
      <Ul>
        <Menu key={menu.title}>
          <span>{menu.title}</span>
          <IconWrapper>
            {menu.firstIcon}
            {menu.secondIcon}
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
  align-items: center;
  & span:first-child {
    font-weight: 500;
    font-size: 24px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  & :first-child {
    margin-right: 16px;
  }
`;
