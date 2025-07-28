'use client';

import { DEFAULT_CATEGORY } from "@/constants/constants";
import { PaginatedResponse } from "@/hooks/useInfiniteData";
import { HOME_CATEGORY_ITEM, HomeCategory } from "@/type/home";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

type CategoryContextType = {
  category: string;
  categoryItems: HOME_CATEGORY_ITEM[];
  isCategoryChanged: boolean;
  selectCategoryAndResetItems: (category: HomeCategory) => void;
  changeCategoryItems: (items: HOME_CATEGORY_ITEM[] | []) => void;
};

type UseCategoryContextProps = {
  children: React.ReactNode;
  initialData: PaginatedResponse<HOME_CATEGORY_ITEM[]>;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategoryContext must be used within a CategoryProvider");
  }

  return context;
};

export const CategoryProvider = ({ children, initialData }: UseCategoryContextProps) => {
  const [category, setCategory] = useState(DEFAULT_CATEGORY);
  const [categoryItems, setCategoryItems] = useState<HOME_CATEGORY_ITEM[] | []>(initialData?.data ?? []);
  const isCategoryChanged = category !== DEFAULT_CATEGORY;

  const selectCategoryAndResetItems = (category: HomeCategory) => {
    setCategory(category);
    setCategoryItems([]);
  }

  const changeCategoryItems = (items: HOME_CATEGORY_ITEM[] | []) => {
    setCategoryItems((prev) => [...prev, ...items]);
  }

  useEffect(() => {
    setCategoryItems(initialData?.data ?? [])
  }, [initialData?.data])

  return (
    <CategoryContext.Provider value={{ category, categoryItems, isCategoryChanged, selectCategoryAndResetItems, changeCategoryItems }}>
      {children}
    </CategoryContext.Provider>
  );
};
