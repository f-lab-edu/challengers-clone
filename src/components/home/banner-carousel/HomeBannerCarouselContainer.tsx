import HomeBannerCarousel from "@/components/home/banner-carousel/HomeBannerCarousel";
import useGetApi from "@/hooks/useGetApi";
import { HOME_CAROUSEL_ITEM } from "@/type/home";

const fetchHomeBannerCarouselData = async (): Promise<HOME_CAROUSEL_ITEM[]> => {
  const data = await fetch("/api/home/carousel", {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });

  return data.json();
};

export default function HomeBannerCarouselContainer() {
  const { data } = useGetApi<HOME_CAROUSEL_ITEM[]>({
    queryKey: ["/api/home/carousel"],
    queryFn: fetchHomeBannerCarouselData,
  });

  return <HomeBannerCarousel items={data} />;
}
