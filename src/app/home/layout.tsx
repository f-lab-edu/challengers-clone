import styles from "./layout.module.css";
import HomeBannerCarouselContainer from "@/components/home/banner-carousel/HomeBannerCarouselContainer";
import HomeActionIconsContainer from "@/components/home/action-icons/HomeActionIconsContainer";

type HomeLayoutProps = {
  children: React.ReactNode;
};

export default function layout({ children }: HomeLayoutProps) {
  return (
    <div className={styles.layout}>
      <HomeBannerCarouselContainer />
      <HomeActionIconsContainer />
      {children}
    </div>
  );
}
