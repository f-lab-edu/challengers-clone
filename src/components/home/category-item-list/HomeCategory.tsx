"use client";

import { HOME_CATEGORIES } from "@/constants/constants";
import useCategoryState from "@/hooks/useCategoryState";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function HomeCategory() {
  const { activeCategory, setActiveCategory } = useCategoryState();

  return (
    <ItemWrapper>
      {HOME_CATEGORIES.map(({ name, iconSrc, enName }) => (
        <Item
          key={name}
          $isActive={`${activeCategory === enName && true}`}
          onClick={() => setActiveCategory(enName)}
        >
          <Image src={iconSrc} width={48} height={48} alt={`${enName} icon`} />
          <span>{name}</span>
        </Item>
      ))}
    </ItemWrapper>
  );
}

const ItemWrapper = styled.ul`
  padding: 0 8px;
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: white;
`;

const Item = styled.li<{ $isActive: string }>`
  display: flex;
  flex-direction: column;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-bottom: ${({ $isActive }) =>
    $isActive === "true" ? "4px solid black" : ""};
  cursor: pointer;
`;
