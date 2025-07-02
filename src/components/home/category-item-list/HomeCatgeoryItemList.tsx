"use client";

import GridContent from "@/components/grid/GridContent";
import ProductThumbnail from "@/components/product/ProductThumbnail";
import useGetInfinite from "@/hooks/useGetInfinite";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { HOME_CATEGORY_ITEM } from "@/type/home";
import Image from "next/image";
import { useRef, useState } from "react";
import styled from "styled-components";

type HomeCatgeoryItemListProps = {
  items: HOME_CATEGORY_ITEM[];
};

const HOME_CATEGORIES = [
  {
    name: "전체",
    iconSrc: "/images/home-categories/all.png",
  },
  {
    name: "오픈 예정",
    iconSrc: "/images/home-categories/comming-soon.png",
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

export default function HomeCatgeoryItemList({
  items,
}: HomeCatgeoryItemListProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(HOME_CATEGORIES[0].name);

  const { data, hasNextPage, fetchNextPage } = useGetInfinite({
    queryKey: ["/api/home/categories?category", activeCategory],
    queryFn: () => console.log(""),
  });

  const handleIntersect = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  useIntersectionObserver({ targetRef, onIntersect: handleIntersect });

  const handleClickCategory = (name: string) => {
    setActiveCategory(name);
  };

  return (
    <section>
      <ItemWrapper>
        {HOME_CATEGORIES.map(({ name, iconSrc }) => (
          <Item
            key={name}
            isactive={activeCategory === name ? "true" : ""}
            onClick={() => handleClickCategory(name)}
          >
            <Image src={iconSrc} width={48} height={48} alt={`${name} icon`} />
            <span>{name}</span>
          </Item>
        ))}
      </ItemWrapper>
      <GridContent colsCount={2}>
        {items.map((item) => (
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
`;

const Item = styled.li<{ isactive: string }>`
  display: flex;
  flex-direction: column;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-bottom: ${({ isactive }) =>
    isactive === "true" ? "4px solid black" : ""};
  cursor: pointer;
`;
