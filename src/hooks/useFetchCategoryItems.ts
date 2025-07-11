import { HOME_CATEGORIES } from "@/constants/constants";
import useGetInfinite, { PaginatedResponse } from "@/hooks/useGetInfinite";
import { fetchHomeCategoryItems } from "@/remotes/home";
import type { HOME_CATEGORY_ITEM } from "@/type/home";
import { useEffect, useState } from "react";

type UseFetchCategoryItemsProps = {
  category: string;
  skipFetchWithInitialData?: PaginatedResponse<HOME_CATEGORY_ITEM[]>;
};

export default function useFetchCategoryItems({
  category,
  skipFetchWithInitialData,
}: UseFetchCategoryItemsProps) {
  const [enabled, setEnabled] = useState(false);
  const [activeCategory, setActiveCategory] = useState(
    HOME_CATEGORIES[0].enName
  );
  const initialPageParam =
    category === activeCategory ? skipFetchWithInitialData?.nextOffset || 0 : 0;

  const [categoryItems, setCategoryItems] = useState<HOME_CATEGORY_ITEM[]>(
    skipFetchWithInitialData?.data || []
  );

  const {
    data: items,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useGetInfinite<HOME_CATEGORY_ITEM[]>({
    queryKey: ["/api/home/categories?category", activeCategory],
    fetchFn: (offset: number) =>
      fetchHomeCategoryItems({
        category: activeCategory,
        pageParam: offset,
      }).then((res) => res.data),
    initialPageParam,
    enabled,
  });

  const handleClickCategory = (name: string) => {
    setEnabled(true);
    setActiveCategory(name);
    setCategoryItems([]);
  };

  useEffect(() => {
    const changedCategory = category !== activeCategory;

    const updatedItems = [
      ...categoryItems,
      ...(items?.pages[items.pages.length - 1].data ||
        (changedCategory ? [] : skipFetchWithInitialData?.data || [])),
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
