'use client';

import { PaginatedResponse } from "@/hooks/useInfiniteData";
import { fetchHomeCategoryItems } from "@/remotes/home";
import type { HOME_CATEGORY_ITEM } from "@/type/home";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

type UseCategoryItemsProps = {
  activeCategory: string;
  skipFetchWithInitialData?: PaginatedResponse<HOME_CATEGORY_ITEM[]>;
  staleTime?: number;
  initialPageParam?: number;
};

export default function useCategoryItems({
  activeCategory,
  skipFetchWithInitialData,
  staleTime = 1000 * 60,
  initialPageParam = 0,
}: UseCategoryItemsProps) {
  const queryKey = ["/api/home/categories?category", activeCategory];

  const { data, isLoading, hasNextPage, fetchNextPage } =
    useSuspenseInfiniteQuery<PaginatedResponse<HOME_CATEGORY_ITEM[]>>({
      queryKey,
      queryFn: async ({ pageParam = 0 }) => {
        const result = await fetchHomeCategoryItems({
          category: activeCategory,
          pageParam: pageParam as number,
        });
        return result.data;
      },
      initialPageParam,
      initialData: skipFetchWithInitialData
        ? {
          pages: [skipFetchWithInitialData],
          pageParams: [initialPageParam]
        } : undefined,
      getNextPageParam: (lastPage) => {
        if (lastPage == undefined) return undefined;
        return lastPage.hasNextPage ? lastPage.nextOffset : undefined;
      }
    });

  return {
    data:
      data && data.pages.length > 0
        ? data.pages.flatMap((page) => page.data)
        : [],
    isLoading,
    hasNextPage,
    fetchNextPage,
  };
}
