"use client";

import ProductThumbnail from "@/components/product/thumbnail/ProductThumbnail";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { HOME_CATEGORY_ITEM, HomeCategory } from "@/type/home";
import useCategoryItems from "@/hooks/useCategoryItems";
import { PaginatedResponse } from "@/hooks/useInfiniteData";
import useCategoryState from "@/hooks/useCategoryState";
import { useEffect } from "react";

type HomeCategoryItemListProps = {
  initialCategory: HomeCategory;
  initialData: PaginatedResponse<HOME_CATEGORY_ITEM[]>;
};

export default function HomeCategoryItemList({
  initialData,
  initialCategory,
}: HomeCategoryItemListProps) {
  const { activeCategory, isCategoryChanged, categoryItems, setCategoryItems } =
    useCategoryState({
      initialCategory,
      initialData: initialData.data,
    });

  const { data, hasNextPage, fetchNextPage } = useCategoryItems({
    activeCategory,
    skipFetchWithInitialData: initialData,
    initialPageParam: isCategoryChanged ? 0 : initialData.nextOffset || 0,
    enabled: isCategoryChanged,
  });

  useEffect(() => {
    setCategoryItems((prev) => [...prev, ...(data.length ? data : [])]);
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
