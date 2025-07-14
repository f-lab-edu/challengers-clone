import { PaginatedResponse } from "@/hooks/useInfiniteData";
import { fetchHomeCategoryItems } from "@/remotes/home";
import type { HOME_CATEGORY_ITEM } from "@/type/home";
import { useEffect, useRef, useState } from "react";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

type UseCategoryItemsProps = {
  isCategoryChanged: boolean;
  activeCategory: string;
  skipFetchWithInitialData?: PaginatedResponse<HOME_CATEGORY_ITEM[]>;
  staleTime?: number;
};

export default function useCategoryItems({
  isCategoryChanged,
  activeCategory,
  skipFetchWithInitialData,
  staleTime = 1000 * 60,
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

  const resetCategoryItems = () => {
    enabledRef.current = true;
    setCategoryItems([]);
  };

  useEffect(() => {
    if (isCategoryChanged) {
      resetCategoryItems();
    }
  }, [isCategoryChanged]);

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
    resetCategoryItems,
  };
}
