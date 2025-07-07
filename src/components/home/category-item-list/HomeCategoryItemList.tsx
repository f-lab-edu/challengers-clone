"use client";

import GridContent from "@/components/grid/GridContent";
import ProductThumbnail from "@/components/product/ProductThumbnail";
import useGetInfinite, { PaginatedResponse } from "@/hooks/useGetInfinite";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { fetchHomeCategoryItems } from "@/remotes/home";
import { HOME_CATEGORY_ITEM } from "@/type/home";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { HOME_CATEGORIES } from "@/constants/constants";

type HomeCategoryItemListProps = {
  category: string;
  data: PaginatedResponse<HOME_CATEGORY_ITEM[]>;
};

export default function HomeCategoryItemList({
  data,
  category,
}: HomeCategoryItemListProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [activeCategory, setActiveCategory] = useState(
    HOME_CATEGORIES[0].enName
  );
  const initialPageParam = category === activeCategory ? data.nextOffset : 0;

  const [categoryItems, setCategoryItems] = useState<HOME_CATEGORY_ITEM[]>(
    data.data
  );

  const {
    data: items,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useGetInfinite<HOME_CATEGORY_ITEM[]>({
    queryKey: ["/api/home/categories?category", activeCategory],
    fetchFn: (offset: number) =>
      fetchHomeCategoryItems({
        category: activeCategory,
        pageParam: offset,
      }).then((res) => res.data),
    initialPageParam,
    enabled,
  });

  const handleIntersect = () => {
    if (data.hasNextPage || hasNextPage) {
      fetchNextPage();
    }
  };

  const handleClickCategory = (name: string) => {
    setEnabled(true);
    setActiveCategory(name);
    setCategoryItems([]);
  };

  console.log("useEffect out items: ", items);
  useEffect(() => {
    const changedCategory = category !== activeCategory;

    const updatedItems = [
      ...categoryItems,
      ...(items?.pages[items.pages.length - 1].data ||
        (changedCategory ? [] : data.data)),
    ];

    setCategoryItems(updatedItems);
  }, [items, data.data, activeCategory]);

  useIntersectionObserver({ targetRef, onIntersect: handleIntersect });

  return (
    <Wrapper>
      <ItemWrapper>
        {HOME_CATEGORIES.map(({ name, iconSrc, enName }) => (
          <Item
            key={name}
            $isActive={activeCategory === enName ? "true" : ""}
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
      <GridContent colsCount={2}>
        {isLoading && (
          <div
            style={{
              width: "100%",
              height: "100vh",
              border: "5px solid black",
            }}
          >
            Loading...
          </div>
        )}
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
