import { useQuery } from "@tanstack/react-query"

const queryKey = '/api/global-actions'

const fetchGlobalActionsItems = async () => {
  const result = await fetch(queryKey);
  const { data } = await result.json();
  return data;
}

export default function useGlobalActions() {
  const { data } = useQuery({
    queryKey: [queryKey],
    queryFn: fetchGlobalActionsItems
  })
  return {
    data,
  }
}
