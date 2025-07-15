import { HOME_CATEGORY_ITEM, HomeCategory } from "@/type/home";
import { useEffect, useState } from "react";

type UseCategoryStateProps = {
  initialCategory: HomeCategory;
  initialData: HOME_CATEGORY_ITEM[];
};

export default function useCategoryState({
  initialCategory,
  initialData,
}: UseCategoryStateProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [categoryItems, setCategoryItems] = useState(initialData);
  const isCategoryChanged = activeCategory !== "all";

  const handleClickCategory = (category: HomeCategory) => {
    setActiveCategory(category);
    setCategoryItems([]);
  };

  useEffect(() => {
    setCategoryItems(initialData);
  }, [initialData.length]);

  return {
    activeCategory,
    handleClickCategory,
    isCategoryChanged,
    categoryItems,
    setCategoryItems,
  };
}
