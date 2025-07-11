import {
  HOME_ACTION_ICONS,
  HOME_CAROUSEL_ITEMS,
  HOME_CATEGORY_ITEMS,
} from "@/data/data";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(`/api/home/carousel`, () => {
    return HttpResponse.json({ data: HOME_CAROUSEL_ITEMS });
  }),

  http.get(`/api/home/action-icons`, () => {
    return HttpResponse.json({ data: HOME_ACTION_ICONS });
  }),

  http.get(`/api/home/categories`, ({ request }) => {
    const url = new URL(request.url);

    const category = url.searchParams.get("category") || "all";
    const offset = Number(url.searchParams.get("offset") || "0");
    const limit = Number(url.searchParams.get("limit") || "10");

    const filteredByCategory = HOME_CATEGORY_ITEMS.filter(
      (item) => item.category === category
    );

    const sliced = filteredByCategory.slice(offset, offset + limit);
    const hasNextPage = offset + limit < filteredByCategory.length;

    return HttpResponse.json({
      data: {
        data: sliced,
        hasNextPage,
        nextOffset: hasNextPage ? offset + limit : undefined,
      },
    });
  }),
];
