import HomeActionIcons from "@/components/home/HomeActionIcons";
import HomeBannerCarousel from "@/components/home/HomeBannerCarousel";
import styles from "./layout.module.css";
import { HOME_ACTION_ICONS, HOME_CAROUSEL_ITEMS } from "@/data/data";

type HomeLayoutProps = {
  children: React.ReactNode;
};

export default function layout({ children }: HomeLayoutProps) {
  /**
   * Todo
   * API Call - 1. homeCarousel data, 2. HomeActionIcons
   */

  return (
    <div className={styles.layout}>
      <HomeBannerCarousel items={HOME_CAROUSEL_ITEMS} />
      <HomeActionIcons items={HOME_ACTION_ICONS} />
      {children}
    </div>
  );
}
