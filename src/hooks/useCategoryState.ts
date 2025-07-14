import { HOME_CATEGORIES } from "@/constants/constants";
import { useState } from "react";

type HomeCategory = (typeof HOME_CATEGORIES)[number]["enName"];

export default function useCategoryState() {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleClickCategory = (category: HomeCategory) => {
    setActiveCategory(category);
  };

  return { activeCategory, handleClickCategory };
}
