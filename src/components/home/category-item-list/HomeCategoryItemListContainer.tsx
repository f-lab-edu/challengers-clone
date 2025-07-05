"use client";

import HomeCategoryItemList from "@/components/home/category-item-list/HomeCategoryItemList";
import { fetchHomeCategoryItems } from "@/remotes/home";
import { HOME_CATEGORY_ITEM } from "@/type/home";
import { useEffect, useState } from "react";

export default function HomeCategoryItemListContainer() {
  /**
   * TODO
   * 추후 RSC에서 데이터 받아와 렌더링하는 것 A/B 테스트 진행할 예정
   * 이 컴포넌트 삭제 금지
   */
  // const data = HOME_CATEGORY_ITEMS;

  const [data, setData] = useState<HOME_CATEGORY_ITEM[]>([]);

  const initData = async () => {
    const res = await fetchHomeCategoryItems({
      category: "all",
      offset: 0,
    });

    setData(res.data.data || []);
  };

  useEffect(() => {
    initData();
  }, []);

  return <HomeCategoryItemList items={data} />;
}
