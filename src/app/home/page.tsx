import HomeActionIconsContainer from "@/components/home/action-icons/HomeActionIconsContainer";
import HomeBannerCarouselContainer from "@/components/home/banner-carousel/HomeBannerCarouselContainer";
import HomeGuideBanner from "@/components/home/HomeGuideBanner";
import styles from "./page.module.css";
import HomeCategoryItemListContainer from "@/components/home/category-item-list/HomeCategoryItemListContainer";

export default function page() {
  return (
    <div className={styles.layout}>
      <HomeBannerCarouselContainer />
      <HomeActionIconsContainer />
      <HomeGuideBanner />
      <HomeCategoryItemListContainer />
    </div>
  );
}
