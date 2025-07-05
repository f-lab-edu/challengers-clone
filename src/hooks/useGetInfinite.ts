import { useInfiniteQuery } from "@tanstack/react-query";

export type PaginatedResponse<T> = {
  data: T;
  hasNextPage: boolean;
  nextOffset: number;
};

type UseGetInfiniteProps<T> = {
  queryKey: string[];
  fetchFn: (offset: number) => Promise<PaginatedResponse<T>>;
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
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        if (lastPage == undefined) return undefined;
        return lastPage.hasNextPage ? lastPage.nextOffset : undefined;
      },
    });

  return {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
  };
}
