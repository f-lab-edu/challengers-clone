"use client";

import HomeCategory from "@/components/home/category-item-list/HomeCategory";
import HomeCategoryItemList from "@/components/home/category-item-list/HomeCategoryItemList";
import { PaginatedResponse } from "@/hooks/useInfiniteData";
import { fetchHomeCategoryItems } from "@/remotes/home";
import { HOME_CATEGORY_ITEM } from "@/type/home";
import { Suspense, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import styles from "./HomeCategoryItemListContainer.module.css";
import SkeletonCategoryItem from "@/components/loading/SkeletonCategoryItem";
import { CategoryProvider } from "@/contexts/CategoryContext";
import { DEFAULT_CATEGORY } from "@/constants/constants";
import SuspenseErrorBoundary from "@/components/error/SuspenseErrorBoundary";

export default function HomeCategoryItemListContainer() {
  /**
   * TODO
   * 추후 RSC에서 데이터 받아와 렌더링하는 것 A/B 테스트 진행할 예정
   * 이 컴포넌트 삭제 금지
   */
  // const data = HOME_CATEGORY_ITEMS;
  const [data, setData] = useState<PaginatedResponse<HOME_CATEGORY_ITEM[]>>({
    data: [],
    hasNextPage: false,
    nextOffset: 0,
  });

  const initData = async () => {
    const res = await fetchHomeCategoryItems({
      category: DEFAULT_CATEGORY,
      pageParam: 0,
    });

    if (res.data) {
      setData(res.data);
    }
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    // <ErrorBoundary fallback={<div>Error</div>}>
    //   <div className={styles.layout}>
    //     <CategoryProvider initialData={data}>
    //       <HomeCategory />
    //       <Suspense fallback={<SkeletonCategoryItem colsCount={2} />}>
    //         <HomeCategoryItemList initialData={data} />
    //       </Suspense>
    //     </CategoryProvider>
    //   </div>
    // </ErrorBoundary>

    // 1. Suspense + ErrorBoundary
    <SuspenseErrorBoundary
      loading={<SkeletonCategoryItem colsCount={2} />}
      rejectedFallback={<>something is wrong</>}
      onError={(error, info) => {
        console.error("error: ", error, info)
      }}
    >
      <div className={styles.layout}>
        <CategoryProvider initialData={data}>
          <HomeCategory />
          <HomeCategoryItemList initialData={data} />
        </CategoryProvider>
      </div>
    </SuspenseErrorBoundary >

  );
}
