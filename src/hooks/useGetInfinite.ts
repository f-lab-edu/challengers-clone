import { useInfiniteQuery } from "@tanstack/react-query";

export type PaginatedResponse<T> = {
  data: T;
  hasNextPage: boolean;
  nextOffset: number;
};

type UseGetInfiniteProps<T> = {
  queryKey: string[];
  fetchFn: (offset: number) => Promise<PaginatedResponse<T>>;
  initialPageParam?: number;
  enabled?: boolean;
  staleTime?: number;
};

const fetchPaginatedData = async <T>(
  pageParam = 0,
  fetchFn: (pageParam: number) => Promise<PaginatedResponse<T>>
): Promise<PaginatedResponse<T>> => {
  const response = await fetchFn(pageParam);
  return response;
};

export default function useGetInfinite<T>({
  queryKey,
  fetchFn,
  enabled = true,
  initialPageParam = 0,
  staleTime = 1000 * 60,
}: UseGetInfiniteProps<T>) {
  const { data, error, isLoading, hasNextPage, fetchNextPage } =
    useInfiniteQuery<
      PaginatedResponse<T>,
      Error,
      PaginatedResponse<T>,
      string[],
      number
    >({
      queryKey,
      queryFn: ({ pageParam = 0 }) => fetchPaginatedData<T>(pageParam, fetchFn),
      initialPageParam,
      getNextPageParam: (lastPage) => {
        if (lastPage == undefined) return undefined;
        return lastPage.hasNextPage ? lastPage.nextOffset : undefined;
      },
      enabled,
      staleTime,
    });

  return {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
  };
}
