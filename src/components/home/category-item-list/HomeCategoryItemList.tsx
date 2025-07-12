"use client";

import GridContent from "@/components/grid/GridContent";
import ProductThumbnail from "@/components/product/ProductThumbnail";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { HOME_CATEGORY_ITEM } from "@/type/home";
import styled from "styled-components";
import useCategoryItems from "@/hooks/useCategoryItems";
import { PaginatedResponse } from "@/hooks/useInfiniteData";
import useCategoryState from "@/hooks/useCategoryState";

type HomeCategoryItemListProps = {
  initialCategory: string;
  initialData: PaginatedResponse<HOME_CATEGORY_ITEM[]>;
};

export default function HomeCategoryItemList({
  initialData,
  initialCategory,
}: HomeCategoryItemListProps) {
  const { activeCategory } = useCategoryState();

  const { categoryItems, hasNextPage, fetchNextPage } = useCategoryItems({
    isCategoryChanged: initialCategory !== activeCategory,
    activeCategory,
    skipFetchWithInitialData: initialData,
  });

  const { targetRef } = useIntersectionObserver({
    fetchNextPage,
    hasNextPage: hasNextPage || initialData.hasNextPage,
  });

  return (
    <Wrapper>
      <GridContent colsCount={2}>
        {categoryItems.map((item) => (
          <ProductThumbnail key={item.itemId} {...item} />
        ))}
      </GridContent>
      <div ref={targetRef} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
