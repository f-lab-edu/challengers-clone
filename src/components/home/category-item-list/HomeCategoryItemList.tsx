"use client";

import GridContent from "@/components/grid/GridContent";
import ProductThumbnail from "@/components/product/ProductThumbnail";
import useGetInfinite from "@/hooks/useGetInfinite";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { fetchHomeCategoryItems } from "@/remotes/home";
import { HOME_CATEGORY_ITEM } from "@/type/home";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { HOME_CATEGORIES } from "@/constants/constants";

type HomeCategoryItemListProps = {
  items: HOME_CATEGORY_ITEM[];
};

export default function HomeCategoryItemList({
  items,
}: HomeCategoryItemListProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(
    HOME_CATEGORIES[0].enName
  );

  const [categoryItems, setCategoryItems] =
    useState<HOME_CATEGORY_ITEM[]>(items);

  const { isLoading, hasNextPage, fetchNextPage } = useGetInfinite<
    HOME_CATEGORY_ITEM[]
  >({
    queryKey: ["/api/home/categories?category", activeCategory],
    fetchFn: (offset: number) =>
      fetchHomeCategoryItems({
        category: activeCategory,
        pageParam: offset,
      }).then((res) => res.data),
  });

  const handleIntersect = () => {
    if (hasNextPage) {
      fetchNextPage().then((res) => {
        if (res.data) {
          const newPage = res.data.pages[res.data.pages.length - 1].data;
          setCategoryItems((prev) => [...prev, ...newPage]);
        }
      });
    }
  };

  const handleClickCategory = (name: string) => {
    setActiveCategory(name);
  };

  useEffect(() => {
    setCategoryItems(items);
  }, [items]);

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
