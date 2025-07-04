"use client";

import HomeActionIcons from "@/components/home/action-icons/HomeActionIcons";
import { fetchHomeActionIcons } from "@/remotes/home";
import { HOME_ACTION_ICON } from "@/type/home";
import { useState } from "react";
import { useEffect } from "react";

export default function HomeActionIconsContainer() {
  /**
   * TODO
   * RSC 환경에서 Api Call 할 것
   */
  // const data = await fetchHomeActionIcons()

  const [data, setData] = useState<HOME_ACTION_ICON[]>([]);

  const initData = async () => {
    const res = await fetchHomeActionIcons();
    setData(res.data || []);
  };

  useEffect(() => {
    initData();
  }, []);
  return <HomeActionIcons items={data} />;
}
