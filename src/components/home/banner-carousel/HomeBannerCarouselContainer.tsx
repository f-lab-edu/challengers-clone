"use client";

import HomeBannerCarousel from "@/components/home/banner-carousel/HomeBannerCarousel";
import { fetchHomeBannerCarouselData } from "@/remotes/home";
import type { HOME_CAROUSEL_ITEM } from "@/type/home";
import { useEffect, useState } from "react";

export default function HomeBannerCarouselContainer() {
  /**
   * TODO
   * RSC 환경에서 Api Call 할 것
   */
  // const data = await fetchHomeBannerCarouselData()

  const [data, setData] = useState<HOME_CAROUSEL_ITEM[]>([]);

  const initData = async () => {
    const res = await fetchHomeBannerCarouselData();
    setData(res.data || []);
  };

  useEffect(() => {
    initData();
  }, []);

  return <HomeBannerCarousel items={data} />;
}
