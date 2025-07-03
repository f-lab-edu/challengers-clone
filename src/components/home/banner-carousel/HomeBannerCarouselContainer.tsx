import HomeBannerCarousel from "@/components/home/banner-carousel/HomeBannerCarousel";
import { HOME_CAROUSEL_ITEMS } from "@/data/data";
import { fetchHomeBannerCarouselData } from "@/remotes/home";

export default async function HomeBannerCarouselContainer() {
  console.log("HomeBannerCarouselContainer");
  // const data = await fetchHomeBannerCarouselData();
  const data = HOME_CAROUSEL_ITEMS;

  return <HomeBannerCarousel items={data} />;
}
