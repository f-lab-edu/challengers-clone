import { PaginatedResponse } from "@/hooks/useInfiniteData";
import { fetchHomeCategoryItems } from "@/remotes/home";
import type { HOME_CATEGORY_ITEM } from "@/type/home";
import { useEffect, useRef, useState } from "react";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

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

  const staleTime = 1000 * 60;

  const {
    data: items,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useSuspenseInfiniteQuery<PaginatedResponse<HOME_CATEGORY_ITEM[]>>({
    queryKey: ["/api/home/categories?category", activeCategory],
    queryFn: async ({ pageParam = 0 }) => {
      if (!enabledRef.current) {
        return Promise.resolve({
          data: [],
          hasNextPage: skipFetchWithInitialData?.hasNextPage || false,
          nextOffset: skipFetchWithInitialData?.nextOffset || 0,
        });
      }

      const result = await fetchHomeCategoryItems({
        category: activeCategory,
        pageParam: pageParam as number,
      });

      return result.data;
    },
    initialPageParam,
    getNextPageParam: (lastPage) => {
      if (lastPage == undefined) return undefined;
      return lastPage.hasNextPage ? lastPage.nextOffset : undefined;
    },
    staleTime,
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
