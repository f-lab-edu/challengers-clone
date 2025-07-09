"use client";

import GridContent from "@/components/grid/GridContent";
import ProductThumbnail from "@/components/product/ProductThumbnail";
import { HOME_CATEGORY_ITEMS } from "@/data/data";
import Image from "next/image";
import { useRef, useState } from "react";
import styled from "styled-components";

const HOME_CATEGORIES = [
  {
    name: "전체",
    iconSrc: "/images/home-categories/all.png",
  },
  {
    name: "오픈 예정",
    iconSrc: "/images/home-categories/coming-soon.png",
  },
  {
    name: "뷰티",
    iconSrc: "/images/guide-banner/cosmetics.jpg",
  },
  {
    name: "푸드/헬스",
    iconSrc: "/images/home-categories/f&h.png",
  },
  {
    name: "라이프",
    iconSrc: "/images/home-categories/life.png",
  },
];

export default function HomeCategoryItemList() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(HOME_CATEGORIES[0].name);
  const data = HOME_CATEGORY_ITEMS;

  const handleClickCategory = (name: string) => {
    setActiveCategory(name);
  };

  return (
    <section>
      <ItemWrapper>
        {HOME_CATEGORIES.map(({ name, iconSrc }) => (
          <Item
            key={name}
            $isActive={activeCategory === name ? "true" : ""}
            onClick={() => handleClickCategory(name)}
          >
            <Image src={iconSrc} width={48} height={48} alt={`${name} icon`} />
            <span>{name}</span>
          </Item>
        ))}
      </ItemWrapper>
      <GridContent colsCount={2}>
        {data?.map((item) => (
          <ProductThumbnail key={item.itemId} {...item} />
        ))}
      </GridContent>

      <div ref={targetRef} />
    </section>
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
