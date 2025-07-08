import { useQuery } from "@tanstack/react-query";

type UseGetApiProps<T> = {
  queryKey: string[];
  queryFn: () => Promise<T>;
};

export default function useGetApi<T>({ queryKey, queryFn }: UseGetApiProps<T>) {
  const { data, error, isLoading, refetch } = useQuery<T>({
    queryKey,
    queryFn: () => <T>queryFn(),
  });

  return { data, error, isLoading, refetch };
}
