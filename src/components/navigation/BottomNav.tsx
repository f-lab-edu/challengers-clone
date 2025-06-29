"use client";

import { BottomMenus } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <Nav>
      <Ul>
        {BottomMenus.map(({ icon, title, url }) => (
          <Menu isactive={`${pathname === url}`} key={title} href={url}>
            <span>{icon}</span>
            <span>{title}</span>
          </Menu>
        ))}
      </Ul>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
  padding: 8px;
  justify-content: space-around;
`;

const Menu = styled(Link)<{ isactive: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.isactive === "true" ? "black" : "gray")};
  font-weight: ${(props) => (props.isactive === "true" ? "bold" : "")};
`;
