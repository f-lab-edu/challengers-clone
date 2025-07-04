"use client";

import { PaginatedResponse } from "@/hooks/useGetInfinite";
import { APIResponse } from "@/type/api";
import type {
  HOME_ACTION_ICON,
  HOME_CAROUSEL_ITEM,
  HOME_CATEGORY_ITEM,
} from "@/type/home";

const BASE_URL = "http://localhost:3000";

export const fetchHomeBannerCarouselData = async (): Promise<
  APIResponse<HOME_CAROUSEL_ITEM[]>
> => {
  const data = await fetch(`/api/home/carousel`, {
    next: {
      revalidate: 60 * 60 * 24, // 1일
    },
  });

  return data.json();
};

export const fetchHomeActionIcons = async (): Promise<
  APIResponse<HOME_ACTION_ICON[]>
> => {
  const data = await fetch(`${BASE_URL}/api/home/action-icons`, {
    next: {
      revalidate: 60 * 60 * 24 * 7, // 7일
    },
  });

  return data.json();
};

export const fetchHomeCategoryItems = async ({
  category = "all",
  offset = 0,
  limit = 10,
}): Promise<PaginatedResponse<HOME_CATEGORY_ITEM[]>> => {
  const response = await fetch(
    `${BASE_URL}/api/home/categories?category=${category}&offset=${offset}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch home category items");
  }

  return response.json();
};
