"use client";

import GridContent from "@/components/grid/GridContent";
import ProductThumbnail from "@/components/product/ProductThumbnail";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { HOME_CATEGORY_ITEM } from "@/type/home";
import Image from "next/image";
import styled from "styled-components";
import { HOME_CATEGORIES } from "@/constants/constants";
import SkeletonCategoryItem from "@/components/loading/SkeletonCategoryItem";
import useCategoryItems from "@/hooks/useCategoryItems";
import { PaginatedResponse } from "@/hooks/useInfiniteData";
import { useState } from "react";

type HomeCategoryItemListProps = {
  initialCategory: string;
  initialData: PaginatedResponse<HOME_CATEGORY_ITEM[]>;
};

export default function HomeCategoryItemList({
  initialData,
  initialCategory,
}: HomeCategoryItemListProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const {
    categoryItems,
    isLoading,
    hasNextPage,
    fetchNextPage,
    handleClickCategory,
  } = useCategoryItems({
    isCategoryChanged: initialCategory !== activeCategory,
    activeCategory,
    setActiveCategory,
    skipFetchWithInitialData: initialData,
  });

  const { targetRef } = useIntersectionObserver({
    fetchNextPage,
    hasNextPage: hasNextPage || initialData.hasNextPage,
  });

  if (isLoading || categoryItems.length === 0) {
    return <SkeletonCategoryItem colsCount={2} />;
  }

  return (
    <Wrapper>
      <ItemWrapper>
        {HOME_CATEGORIES.map(({ name, iconSrc, enName }) => (
          <Item
            key={name}
            $isActive={`${activeCategory === enName && true}`}
            onClick={() => handleClickCategory(enName)}
          >
            <Image
              src={iconSrc}
              width={48}
              height={48}
              alt={`${enName} icon`}
            />
            <span>{name}</span>
          </Item>
        ))}
      </ItemWrapper>
      <>
        <GridContent colsCount={2}>
          {categoryItems.map((item) => (
            <ProductThumbnail key={item.itemId} {...item} />
          ))}
        </GridContent>
        <div ref={targetRef} />
      </>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

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
