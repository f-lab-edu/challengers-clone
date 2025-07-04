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
    const offset = Number(url.searchParams.get("offset") || "0");
    const limit = Number(url.searchParams.get("limit") || "10");

    const sliced = HOME_CATEGORY_ITEMS.slice(offset, offset + limit);
    const hasNextPage = offset + limit < HOME_CATEGORY_ITEMS.length;

    return HttpResponse.json({
      data: {
        data: sliced,
        hasNextPage,
        nextOffset: offset + limit,
      },
    });
  }),
];
