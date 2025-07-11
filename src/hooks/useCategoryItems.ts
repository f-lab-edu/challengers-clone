import useInfiniteData, { PaginatedResponse } from "@/hooks/useInfiniteData";
import { fetchHomeCategoryItems } from "@/remotes/home";
import type { HOME_CATEGORY_ITEM } from "@/type/home";
import { useEffect, useRef, useState } from "react";

type UseCategoryItemsProps = {
  isCategoryChanged: boolean;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  skipFetchWithInitialData?: PaginatedResponse<HOME_CATEGORY_ITEM[]>;
};

export default function useCategoryItems({
  isCategoryChanged,
  activeCategory,
  setActiveCategory,
  skipFetchWithInitialData,
}: UseCategoryItemsProps) {
  const enabledRef = useRef(false);
  const initialPageParam = isCategoryChanged
    ? 0
    : skipFetchWithInitialData?.nextOffset || 0;

  const [categoryItems, setCategoryItems] = useState<HOME_CATEGORY_ITEM[]>(
    skipFetchWithInitialData?.data || []
  );

  const {
    data: items,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteData<HOME_CATEGORY_ITEM[]>({
    queryKey: ["/api/home/categories?category", activeCategory],
    fetchFn: async (offset: number) => {
      const res = await fetchHomeCategoryItems({
        category: activeCategory,
        pageParam: offset,
      });

      return res.data;
    },
    initialPageParam,
    enabled: enabledRef.current,
  });

  const handleClickCategory = (name: string) => {
    enabledRef.current = true;
    setActiveCategory(name);
    setCategoryItems([]);
  };

  useEffect(() => {
    const updatedItems = [
      ...categoryItems,
      ...(items?.pages[items.pages.length - 1].data ||
        (isCategoryChanged ? [] : skipFetchWithInitialData?.data || [])),
    ];

    setCategoryItems(updatedItems);
  }, [items, skipFetchWithInitialData?.data, activeCategory]);

  return {
    activeCategory,
    categoryItems,
    isLoading,
    hasNextPage,
    fetchNextPage,
    handleClickCategory,
  };
}
