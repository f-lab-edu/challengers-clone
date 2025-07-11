"use client";

import GridContent from "@/components/grid/GridContent";
import ProductThumbnail from "@/components/product/ProductThumbnail";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { HOME_CATEGORY_ITEM } from "@/type/home";
import Image from "next/image";
import styled from "styled-components";
import { HOME_CATEGORIES } from "@/constants/constants";
import SkeletonCategoryItem from "@/components/loading/SkeletonCategoryItem";
import useFetchCategoryItems from "@/hooks/useFetchCategoryItems";
import { PaginatedResponse } from "@/hooks/useGetInfinite";

type HomeCategoryItemListProps = {
  category: string;
  data: PaginatedResponse<HOME_CATEGORY_ITEM[]>;
};

export default function HomeCategoryItemList({
  data,
  category,
}: HomeCategoryItemListProps) {
  const {
    activeCategory,
    categoryItems,
    isLoading,
    hasNextPage,
    fetchNextPage,
    handleClickCategory,
  } = useFetchCategoryItems({
    category,
    initialData: data,
  });

  const { targetRef } = useIntersectionObserver({
    fetchNextPage,
    hasNextPage: hasNextPage || data.hasNextPage,
  });

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
        {isLoading ? (
          <SkeletonCategoryItem colsCount={2} />
        ) : (
          <div ref={targetRef} />
        )}
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
