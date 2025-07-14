import { useState } from "react";

export default function useCategoryState() {
  const [activeCategory, setActiveCategory] = useState("all");

  return { activeCategory, setActiveCategory };
}
