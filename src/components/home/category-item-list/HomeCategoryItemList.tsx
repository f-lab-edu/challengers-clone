"use client";

import ProductThumbnail from "@/components/product/thumbnail/ProductThumbnail";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { HOME_CATEGORY_ITEM, HomeCategory } from "@/type/home";
import useCategoryItems from "@/hooks/useCategoryItems";
import { PaginatedResponse } from "@/hooks/useInfiniteData";
import { useEffect } from "react";
import { useCategoryContext } from "@/contexts/CategoryContext";

type HomeCategoryItemListProps = {
  initialData: PaginatedResponse<HOME_CATEGORY_ITEM[]>;
};

export default function HomeCategoryItemList({
  initialData
}: HomeCategoryItemListProps) {
  const { category, categoryItems, isCategoryChanged, changeCategoryItems } = useCategoryContext();

  const { data, hasNextPage, fetchNextPage } = useCategoryItems({
    activeCategory: category,
    skipFetchWithInitialData: initialData,
    initialPageParam: isCategoryChanged ? 0 : initialData.nextOffset || 0,
    enabled: isCategoryChanged ? true : initialData.hasNextPage || false,
  });

  useEffect(() => {
    changeCategoryItems([...categoryItems, ...(data.length ? data : [])]);
  }, [data.length]);

  const { targetRef } = useIntersectionObserver({
    fetchNextPage,
    hasNextPage: hasNextPage || initialData.hasNextPage,
  });

  return (
    <section>
      {categoryItems.map((item) => (
        <ProductThumbnail key={item.itemId} product={item} />
      ))}
      <div ref={targetRef} />
    </section>
  );
}
